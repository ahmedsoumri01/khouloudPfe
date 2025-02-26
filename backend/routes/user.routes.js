const express = require('express');
const {authMiddleware} = require('../middlewares/auth.middleware');
const { getMyProfile } = require('../controllers/user.controller');

const router = express.Router();

// Fix: Make sure the function is properly passed
router.get('/profile', authMiddleware, getMyProfile);

module.exports = router;
