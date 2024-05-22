const User = require("../models/user");
const formatDate = require("../utils/utils");

exports.deletePlannedExercise = async (req, res) => {
  const username = req.params.user;
  const date = formatDate(req.params.date);

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.plannedExercise = user.plannedExercise.filter((exercise) => {
      const createdForStr = exercise.createdFor.toString();
      return !createdForStr.startsWith(date);
    });

    await user.save();

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
