const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const createUserRoutes = require("./routes/createUserRoutes");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", createUserRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", require("./routes/adminRoutes"));

const PORT = process.env.PORT || 5050;
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
  );
};

startServer();
