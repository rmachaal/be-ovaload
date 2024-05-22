const User = require("../models/user");

exports.postExercise = async (req, res) => {
  const username = req.params.user;
  const newExercise = req.body;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const exerciseExists = user.exercises.some(
      (exercise) => exercise.exerciseName === newExercise.exerciseName
    );
    if (exerciseExists) {
      return res.status(400).json({ message: "Exercise already exists" });
    }

    user.exercises.push(newExercise);
    const addedExercise = user.exercises[user.exercises.length - 1];
    await user.save();

    res.status(201).json({ exercise: addedExercise });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while adding the exercise." });
  }
};
