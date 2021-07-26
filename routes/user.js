var express = require('express');
var router = express.Router();
const {check,validationResult} = require('express-validator');
const { getUserById, getUser, updateUser,deleteUser} = require("../controllers/user");
const {signup} = require("../controllers/user")


router.post("/signup",
[
    check('firstname').isLength({min: 3}).withMessage('FirstName must be at least 3 chars long'),
    check('lastname').isLength({min: 3}).withMessage('LastName must be at least 3 chars long'),
    check('phone').isLength({min: 10}).withMessage('phone number must be at least 10 chars long'),
    check('email').isEmail().withMessage('Please enter proper email_id'),
    
],

signup);
router.param("userId", getUserById);
router.get("/user/:userId",getUser);
router.put("/user/:userId",updateUser);
router.delete("/user/:userId",deleteUser);



module.exports = router;