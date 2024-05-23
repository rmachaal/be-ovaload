const app = require("./app");
const connectDB = require("./db/connection");
const { PORT = 3000 } = process.env;

const startServer = async () => {
  try {
    await connectDB(); 
    app.listen(PORT, () => {
      console.log(`Server started at ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();
