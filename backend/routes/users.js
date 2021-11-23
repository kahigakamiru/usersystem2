const express = require('express');

const router = express.Router();

const verifyToken = require('../middleware/auth');

const { signInHandler, signUpHandler, putUsersHandler, forgotPasswordHandler, getUsersHandler} = require('../controllers/userController');

router.post('/signin', signInHandler);
router.post('/signup', signUpHandler);
router.get('/get-all-users', verifyToken, getUsersHandler);
router.post('/update-a-user/:userID', verifyToken, putUsersHandler)

module.exports = router;