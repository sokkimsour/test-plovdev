const express = require('express');
const router = express.Router();
const { register , login , logout , refreshToken , getMe , forgotPassword , verifyForgotOtp , resetPassword , changePassword , loginWIthGoogle} = require('../controller/Auth.controller');
const { loginLimiter } = require('../middlewares/rateLimits');
const { authenticateToken } = require('../middlewares/authMiddleWare');
const passport = require('passport');
const frontendURL = process.env.CLIENT_URL || 'http://localhost:5173';

router.post('/auth/register', /* #swagger.tags = ['Auth'] */  register);
router.post('/auth/refreshtoken',  /* #swagger.tags = ['Auth'] */  refreshToken);
router.post('/auth/login',  /* #swagger.tags = ['Auth'] */  loginLimiter , login);
router.post('/auth/logout',  /* #swagger.tags = ['Auth'] */  authenticateToken ,  logout);
router.get('/users/me'  /* #swagger.tags = ['Auth'] */, authenticateToken , getMe);

// LOGIN WITH GOOGLE
// 1. START GOOGLE LOGIN (This was missing!)
// This is the route your frontend button should point to.
router.get('/auth/google', passport.authenticate('google', { 
  scope: ['profile', 'email'], 
  session: false 
}));

// 2. GOOGLE CALLBACK
// Google sends the user back here after they log in.
router.get("/auth/google/callback", 
  passport.authenticate('google', { 
    session: false, 
    failureRedirect: `${frontendURL}/oauth-error?error=auth_failed`
  }), 
  loginWIthGoogle
);

router.post('/auth/change-password',  /* #swagger.tags = ['Auth'] */ authenticateToken ,changePassword)  ;

router.post('/auth/forgot-password',   /* #swagger.tags = ['Auth'] */  forgotPassword)
router.post('/auth/verify-forgot-otp',  /* #swagger.tags = ['Auth'] */  verifyForgotOtp)
router.post('/auth/reset-password',  /* #swagger.tags = ['Auth'] */ resetPassword)

module.exports = router;
