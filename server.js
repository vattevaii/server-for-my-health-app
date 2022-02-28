const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const { MONGO_URL, APP_PORT, CORS_ORIGIN } = process.env;
// const Grid = require("gridfs-stream");
const path = require("path");

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors({
  // origin: "http://localhost:3000",
  credentials: true,
  // allowedHeaders: "Content-Type,Accept,User-Agent,Accept-Language,Access-Control-Allow-Origin,Access-Control-Allow-Credentials,cache-control",
  // vary: "Origin,Cookies",
}));

// Routes
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const docRoutes = require("./routes/doctor");

// Create mongo connection
// mongoose.connect(
//   MONGO_URL,
//   {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useFindAndModify: false,
//   },
//   () => console.log("connected to DB")
// );
// const conn = mongoose.createConnection(MONGO_URL);

app.use("/api/users", userRoutes);
app.use("/api/authenticate", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/doctor", docRoutes);
// app.use("/api/images", imageRoutes);

app.listen(process.env.PORT || APP_PORT, () => console.log(`Server started on port ${process.env.PORT || APP_PORT}`));
