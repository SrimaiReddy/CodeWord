var express = require('express');
var router = express.Router();
var usersController = require('../controllers/user.controller')
const bodyParser = require('body-parser');
let multer = require('multer')

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/signup', usersController.signUp);
router.post('/signin', usersController.signIn);
router.post('/details', usersController.details);
router.post('/validateEmail', usersController.validateEmail);
router.post('/sendmail', usersController.tempPassword);
router.post('/changepassword', usersController.changePassword);
router.post('/codeWordFile', multer().single('file'), usersController.uploadfile);
router.get('/getAllCodeWordSet', usersController.getAllCodewordSet);
router.get('/getUserCodeWordSet', usersController.getUserCodewordSet);
router.get('/deleteUserCodeWordSet', usersController.deleteUserCodeWordSet);
module.exports = router;
