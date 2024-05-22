const User = require("../models/user");

exports.getExerciseById = async (req, res) => {
  const username = req.params.user;
  const exerciseName = req.params.exercise;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const exercise = user.exercises.find((exercise) => {
      return exercise.exerciseName === exerciseName;
    });

    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.status(200).json({ exercise });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
