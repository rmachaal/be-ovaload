const users = [
  {
    name: "Jimmy Ratty",
    username: "jimratty",
    password: "password123",
    exercises: [
      {
        exerciseName: "bench-press",
        exerciseStats: [
          { weightKg: 80, sets: 3, reps: 10 },
          { weightKg: 85, sets: 5, reps: 14 },
        ],
      },
      {
        exerciseName: "squat",
        exerciseStats: [
          { weightKg: 100, sets: 4, reps: 10 },
          { weightKg: 110, sets: 4, reps: 8 },
        ],
      },
    ],
  },
  {
    name: "Emily North",
    username: "emilynorth",
    password: "password456",
    exercises: [],
  },
  {
    name: "Jane Smith",
    username: "janesmith",
    password: "password456",
    exercises: [
      {
        exerciseName: "deadlift",
        exerciseStats: [
          { weightKg: 120, sets: 3, reps: 14 }
        ],
      },
      {
        exerciseName: "overhead-press",
        exerciseStats: [
          { weightKg: 50, sets: 3, reps: 12 },
          { weightKg: 55, sets: 3, reps: 10 },
        ],
      },
    ],
  },
  {
    name: "Michael Johnson",
    username: "michaelj",
    password: "password789",
    exercises: [
      {
        exerciseName: "pull-ups",
        exerciseStats: [
          { weightKg: 0, sets: 3, reps: 15 },
          { weightKg: 0, sets: 4, reps: 12 },
        ],
      },
      {
        exerciseName: "leg-press",
        exerciseStats: [
          { weightKg: 200, sets: 4, reps: 10 },
          { weightKg: 220, sets: 4, reps: 8 },
        ],
      },
    ],
  },
  {
    name: "Emily Clark",
    username: "emilyc",
    password: "password000",
    exercises: [
      {
        exerciseName: "bicep-curls",
        exerciseStats: [
          { weightKg: 15, sets: 3, reps: 12 },
          { weightKg: 20, sets: 3, reps: 10 },
        ],
      },
      {
        exerciseName: "tricep-dips",
        exerciseStats: [
          { weightKg: 0, sets: 3, reps: 15 },
          { weightKg: 0, sets: 3, reps: 12 },
        ],
      },
    ],
  },
  {
    name: "Chris Evans",
    username: "chrisevans",
    password: "password111",
    exercises: [
      {
        exerciseName: "lat-pulldown",
        exerciseStats: [
          { weightKg: 70, sets: 4, reps: 10 },
          { weightKg: 75, sets: 4, reps: 8 },
        ],
      },
      {
        exerciseName: "shoulder-press",
        exerciseStats: [
          { weightKg: 60, sets: 3, reps: 12 },
          { weightKg: 65, sets: 3, reps: 10 },
        ],
      },
    ],
  },
  {
    name: "Sarah Williams",
    username: "sarahw",
    password: "password222",
    exercises: [
      {
        exerciseName: "leg-curl",
        exerciseStats: [
          { weightKg: 40, sets: 3, reps: 8 },
          { weightKg: 45, sets: 3, reps: 10 },
        ],
      },
      {
        exerciseName: "leg-extension",
        exerciseStats: [
          { weightKg: 50, sets: 4, reps: 12 },
          { weightKg: 55, sets: 4, reps: 10 },
        ],
      },
    ],
    plannedExercise: [
      {
        exerciseName: "leg-curl",
        nextChallenge: [{ weightKg: 47, sets: 4, reps: 12 }],
        createdFor: "2024-05-12T09:38:41.355Z",
        completed: false,
      },
      {
        exerciseName: "leg-extension",
        nextChallenge: [{ weightKg: 57, sets: 5, reps: 12 }],
        createdFor: "2024-05-13T09:38:41.355Z",
        completed: false,
      },
    ],
  },
];

module.exports = users;
