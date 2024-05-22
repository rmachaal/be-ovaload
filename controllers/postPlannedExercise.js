const User = require("../models/user");

async function fetchExercises(username) {
  if (!username) {
    throw new Error("User not found");
  }
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      throw new Error("User not found");
    }

    const data = await User.findOne({ username: username }, "exercises");
    const exercises = data.exercises;
    if (exercises.length === 0) {
      throw new Error("No exercise history found.");
    }

    return exercises;
  } catch (error) {
    throw error;
  }
}

exports.postPlannedExercise = async (req, res) => {
  const username = req.params.user;
  const workoutArr = req.body;

  try {
    // Retrieve the exercises history
    const exercisesHistory = await fetchExercises(username);

    if (!exercisesHistory) {
      return res.status(404).json({ message: "No exercise history found." });
    }

    // Find the user
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Format exercise names in workoutArr
    const formattedWorkoutArr = workoutArr.map((exercise) => ({
      ...exercise,
      exerciseName: exercise.exerciseName.toLowerCase().replace(" ", "-"),
    }));

    // Map through the workout array to create new planned exercises
    const plannedExercises = formattedWorkoutArr.map((exercise) => {
      const exerciseHistory = exercisesHistory.find(
        (e) => e.exerciseName === exercise.exerciseName
      );

      //get latest stats based on createdAt date from history
      let latestStats = {};
      if (exerciseHistory && exerciseHistory.exerciseStats.length > 0) {
        latestStats = exerciseHistory.exerciseStats.reduce((latest, stat) => {
          return new Date(stat.createdAt) > new Date(latest.createdAt)
            ? stat
            : latest;
        }, exerciseHistory.exerciseStats[0]);
      }

      //progress overload logic
      let nextWeightKg = latestStats.weightKg || 0;
      let nextReps = (latestStats.reps || 0) + 2;
      let nextSets = latestStats.sets || 3;

      if (nextReps > 14) {
        nextReps = 6;
        nextSets += 1;
      }

      if (nextSets > 5) {
        nextSets = 3;
        nextWeightKg += 2;
      }

      return {
        exerciseName: exercise.exerciseName,
        nextChallenge: [
          {
            weightKg: nextWeightKg,
            sets: nextSets,
            reps: nextReps,
          },
        ],
        createdFor: new Date(exercise.createdFor),
        completed: false,
      };
    });

    // Save the new planned exercises to the user's document
    user.plannedExercise = user.plannedExercise.concat(plannedExercises);
    await user.save();

    res.status(201).json({ plannedExercises });
  } catch (error) {
    if (error.message === "User not found" || error.message === "No exercise history found.") {
      return res.status(404).json({ message: error.message });
    }
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
