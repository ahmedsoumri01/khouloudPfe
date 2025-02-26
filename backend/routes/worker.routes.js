const express = require('express');
const { completeWorkerProfile } = require('../controllers/worker.controller');
const { authMiddleware, workerMiddleware } = require('../middlewares/auth.middleware');

const router = express.Router();

// Route: Complete worker profile
router.put('/complete-profile-worker', authMiddleware, workerMiddleware, completeWorkerProfile);

module.exports = router;
