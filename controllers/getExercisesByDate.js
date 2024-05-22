const User = require("../models/user");

exports.getExercisesByDate = async (req, res) => {
  const username = req.params.user;
  const date = req.params.date;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const exercisesByDate = user.exercises.filter(exercise => 
      exercise.exerciseStats.some(stat => 
        stat.createdAt.toISOString().split('T')[0] === date
      )
    );

    if (exercisesByDate.length === 0) {
      return res.status(400).json({ message: "No exercises found for the given date." });
    }

    res.status(200).json({ exercisesByDate });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
