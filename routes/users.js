const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');
router.get('/profile', usersController.profile);


//router for the controller1 
router.get('/sign-Up',usersController.signUp);
router.get('/sign-In',usersController.signIn);

//router for the controller2 (Note:not "get" because we are posting the form)
// router.get('/create',usersController.create);
router.post('/create',usersController.create);

//router for the sign-in form 
router.post('/create-session', usersController.createSession);



module.exports = router;









 