const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    skills: [{ type: String, trim: true }],
    experience: { type: Number, min: 0 },
    specialization: { type: String, trim: true, required: true },
    availability: { type: Boolean, default: true },
    ratings: { type: Number, default: 0, min: 0, max: 5 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Worker', WorkerSchema);
