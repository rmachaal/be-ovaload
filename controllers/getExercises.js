const User = require("../models/user");

exports.getExercises = async (req, res) => {
  const username = req.params.user;
  if (!username) {
    return res.status(404).json({ message: "User not found" });
  }
  try {
    const data = await User.find({ username: username }, "exercises");
    if (data.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const exercises = data[0].exercises;
    if (exercises.length === 0) {
      return res.status(404).json({ message: "No exercises found" });
    }
    res.status(200).json({ exercises });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "No exercises found" });
  }
};
