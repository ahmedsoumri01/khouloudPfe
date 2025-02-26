const User = require('../models/User');
const Worker = require('../models/Worker');

// Get authenticated user profile
const getMyProfile = async (req, res) => {
  try {
    console.log(req.user); // Debugging: Check the logged-in user's details

    let user = null;

    // Check if the user's role is 'worker'
    if (req.user.role === 'worker') {
      // Find the worker profile associated with the user
      const worker = await Worker.findOne({ user: req.user._id }).populate('user', '-password');

      if (!worker) {
        return res.status(404).json({ message: 'Worker profile not found' });
      }

      // Return the worker profile along with user details
      user = worker;
    } else {
      // For non-worker roles, return the user profile
      user = await User.findById(req.user._id).select('-password');
    }

    // If no user is found, return a 404 error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user or worker data
    res.status(200).json(user);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = { getMyProfile };