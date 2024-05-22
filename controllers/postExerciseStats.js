const User = require("../models/user");

exports.postExerciseStats = async (req, res) => {
  const username = req.params.user;
  const exerciseName = req.params.exerciseName;
  const newExerciseStats = req.body;
  
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    let addedExerciseStats;

    const exercise = user.exercises.find(exercise => exercise.exerciseName === exerciseName);

    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    exercise.exerciseStats.push(newExerciseStats);
    addedExerciseStats = exercise.exerciseStats[exercise.exerciseStats.length - 1];

    

    await user.save();

    res.status(201).json(addedExerciseStats);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while adding the exercise." });
  }
};
