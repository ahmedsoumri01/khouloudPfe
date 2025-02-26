const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    role: { type: String, enum: ['user', 'worker', 'admin'], default: 'user' },
    phone: { type: String, trim: true },
    location: { type: String, trim: true },
    profileImage: { type: String, default: '' }, // URL of profile image
    
    status: { type: String, enum: ['active', 'suspended', 'blocked'], default: 'active' },
    isProfileCompleted: { type: Boolean, default: false },
    firstTimeLogin: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
