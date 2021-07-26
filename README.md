# crud_api

# clone application using below command

git clone https://github.com/saidulam/crud_api.git


# initiate node js project with below command through terminal
npm init

# install all the dependencies which used in project with below command
npm install

# run the application with below command
nodemon app.js

# (post) for creating user open below url in postman and pass nescessary things like firstname, lastname, phone, email
http://localhost:8000/api/signup

pass user data in body as raw data in postman
ex:
{
    "firstname":"root ",
    "lastname":"user",
    "phone":12345678922,
    "email":"saidulam8223@gmail.com"
    }

firstname and lastname should be atleast 3 characters long and phone number should contain atleast 10 characters
email should be a proper email 

in headers set content type as application/json and hit the above url, you will get the responce of what ever the data passing to the db if it is successfull or else you will get error

# (put) For updating user use below url in postman
http://localhost:8000/api/user/60fe6971bc48b6465d84b23d

in the above url iam using "_id" which i got for particular user.from your end you have to use "_id" generated for the user u have created
pass nescessary information in the body which yoy want to update

ex:{
    "firstname":"root123 "
    "lastname":"user123 "
}
# (delete) for deleting user use below url in postman
http://localhost:8000/api/user/60fe6971bc48b6465d84b23d

in the above url iam using "_id" which i got for particular user.from your end you have to use "_id" generated for the user u have created
