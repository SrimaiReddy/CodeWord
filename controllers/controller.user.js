/**
 * @author Naveen Kumar Chandaluri <S530742@nwmissouri.edu>
 */
const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { UserModel } = require('../model/model.user');
var { mongoose } = require('./../config/database')
var mailController = require('../controllers/mail.controller')
let XLSX = require('xlsx')

let signUp = (req,res) => {
    var body = _.pick(req.body,['email','password','instructor']);
    var gen_token = jwt.sign({email: body.email },'codewordnwmsu',{expiresIn:  1* 300 }).toString();
    body.token = gen_token;
    console.log("test");
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(body.password,salt,(err,hash) => {
            body.password = hash;
            var userModel = new UserModel(body);
            userModel.save().then((user) => {
                if(user)
                return res.json({ code: 200, message: true});           
            }).catch((e) => {
                console.log(e);
                return res.json({ code: 400, message: e});        
            })
        })
    })
}
module.exports.signUp = signUp;

let signIn = (req,res) => {
    var body = _.pick(req.body,['email','password']);
    console.log(body.email);
    UserModel.findOne({email: body.email}, function (err, User) {
        if(err){
            return res.json({ code: 200, message: 'Email id not registered!!'});
        }
        console.log(User.password);
        return bcrypt.compare(body.password,User.password,(err,result) => {
            if(result){
                var newToken = jwt.sign({email: body.email, id: User.id },'codewordnwmsu',{expiresIn:  10000 * 3000 }).toString();
                UserModel.updateOne({email: body.email},{$set: {token: newToken}}, (err) =>{
                    if(err){
                        return res.json({ code: 200, message: 'Unable to generate and update Token'});
                    }
                    return res.json({ code: 200, message: 'Signed in successfully. Redirecting.', token: newToken });
                })
            }else{
                return res.json({ code: 200, message: "Password Wrong!!"})
            }
        })
    })
}
module.exports.signIn = signIn;
let details = (req,res) => {    
    console.log('email');
    UserModel.findOne({_id: req.session.id}).then((user) => {
    if(!user){
        return  res.status(400).send("User details not found!!");
    }        
    return res.send(user);
    });
}
module.exports.details = details;

let validateEmail = (req, res) => {
   
    var body = _.pick(req.body,['email']);
    UserModel.findOne({ email: body.email}).then((user) => {
        if(!user){
            return res.json({ code: 400, message: false});
        }        
        return new Promise((resolve, err) =>{
                if(resolve){
                    return res.json({ code: 200, message: true});
                }
                if(err){
                    return res.json({ code: 200, message: false});
                }
            });
        });
}
module.exports.validateEmail = validateEmail;

let tempPassword = (req, res ) => {
    var body = _.pick(req.body,['email']);
    console.log('Tempa'+ body.email);
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var temporaryPassword = "";
    for (var x = 0; x < 5; x++) {
        var i = Math.floor(Math.random() * chars.length);
        temporaryPassword += chars.charAt(i);
    }
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(temporaryPassword,salt,(err,hash) => {
        hashPassword = hash;
        UserModel.updateOne({email: body.email },{$set: {password: hashPassword}}, (err,result) =>{
        if(!res){
            return  res.status(400).send("Error");
        }
        mailController.sendMail(body.email,temporaryPassword);
        return res.json({ code: 200, message: true});
     });
     });
    });
}
module.exports.tempPassword = tempPassword;

let changePassword = (req,res) => { 
    var body = _.pick(req.body,['password']);
    console.log("change password:"+ req.session.id+" Change Password:"+body.password); 
    var hashPassword="";
    bcrypt.genSalt(10, (err,salt) => {
    bcrypt.hash(body.password,salt,(err,hash) => {
        hashPassword = hash;
    
    UserModel.updateOne({_id: req.session.id },{$set: {password: hashPassword}}, (err,result) =>{
        if(!res){
            return  res.status(400).send("Unable to change Password!!");
        }
        return res.json({ code: 200, message: true});
     });
    });
   });
}
module.exports.changePassword = changePassword;