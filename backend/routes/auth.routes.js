const express = require('express');
const { register, login, protectedRoute } = require('../controllers/auth.controller');
const {authMiddleware} = require('../middlewares/auth.middleware');
const { check } = require('express-validator');

const router = express.Router();

// 🔹 Register Route
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
  ],
  register
);

// 🔹 Login Route
router.post(
  '/login',
  [
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  login
);

// 🔹 Protected Route Example
router.post('/protected', authMiddleware, protectedRoute);

module.exports = router;
