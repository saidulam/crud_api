const User = require("../models/user");
const { check, validationResult } = require("express-validator");

//create user
exports.signup = async(req, res) => {
    

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: errors.array()[0].param
      });
    }
  // saving user to db
    const user = new User(req.body);
   await user.save((err, user) => {
      if (err) {
        return
        res.status(400).json({
          err: "NOT able to save user",
        });
      }
      return res.json({name:user.firstname,
      email:user.email,
    id:user._id});
    });
  };


  //get user by id
  exports.getUserById = async(req, res, next, id) => {
   await User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No User Found In DB"
            })

        }
        req.profile = user;
        next();
    })
}

exports.getUser = (req, res) => {
    
    return res.json(req.profile);

}

  //update user
  exports.updateUser = async(req, res) =>{
    await User.findByIdAndUpdate(
        {_id:req.profile._id},
        {$set: req.body},
        {new: true, useFindAndModify:false},
    
         (err, user )=>{
             if (err) {
                 res.json(400).json({
                     error: "failed to update user"
                 }) 
             }
            res.json({

                message:"user updated successfully"
            });
             
    
         })}


         //delete user
         exports.deleteUser = async (req, res) =>{

            
           await User.deleteOne(
                {_id:req.profile._id},
                 (err)=>{
                     if (err) {
                         res.json(400).json({
                             error: "failed to delete user"
                         }) 
                     }
                     
                     res.json({
                         message:"user deleted successfully"
                     });
                     
            
                 })}