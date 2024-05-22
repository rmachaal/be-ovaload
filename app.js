const express = require("express");
const { getExercises } = require("./controllers/getExercises");
const { getExerciseById } = require("./controllers/getExerciseById");
const { getExercisesByDate } = require("./controllers/getExercisesByDate");
const { postPlannedExercise } = require("./controllers/postPlannedExercise");
const { patchPlannedExercise } = require("./controllers/patchPlannedExercise");

const { postExercise } = require("./controllers/postExercise");
const { postExerciseStats } = require("./controllers/postExerciseStats");
const { getPlannedExercisesByDate } = require("./controllers/getPlannedExercisesByDate");

const Model = require("./models/user");

const app = express();

app.use(express.json());

app.get("/api/:user/exercises", getExercises);
app.get("/api/:user/:exercise", getExerciseById);
app.get("/api/:user/exercises/:date", getExercisesByDate);

app.get("/api/:user/plannedExercises/:date", getPlannedExercisesByDate);
app.post("/api/:user/plannedExercises", postPlannedExercise);
app.patch(
  "/api/:user/plannedExercises/:date/:exerciseName",
  patchPlannedExercise
);

app.post("/api/:user/exercises", postExercise);

app.post("/api/:user/exercises/:exerciseName", postExerciseStats);

module.exports = app;
