const mongoose = require('mongoose');

const ResetPasswordSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true },
    verificationCode: { type: String, required: true, trim: true },
    expiresAt: { type: Date, required: true }, // Expiration time for the code
  },
  { timestamps: true }
);

module.exports = mongoose.model('ResetPassword', ResetPasswordSchema);
