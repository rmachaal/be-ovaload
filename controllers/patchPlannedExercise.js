const User = require("../models/user");

exports.patchPlannedExercise = async (req, res) => {
  const username = req.params.user;
  const date = req.params.date;
  const exerciseName = req.params.exerciseName;
  const  { completed } = req.body;

  if (!username || !date || !exerciseName) {
    return res.status(404).json({ message: "Missing Infomation Needed" });
  }

  try {
    // Find the user
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the planned exercise by given date and exercise name
    const plannedExercise = user.plannedExercise.find((exercise) =>
      exercise.exerciseName === exerciseName && new Date(exercise.createdFor).toISOString().split('T')[0] === date
    );

    if (!plannedExercise) {
      return res.status(404).json({ message: "Planned exercise not found" });
    }

    // Update the completion status
    plannedExercise.completed = completed;

    // Save the updated user document
    await user.save();

    res.status(200).json(plannedExercise);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "No exercises found" });
  }
};
