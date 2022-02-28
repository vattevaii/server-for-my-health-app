const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CustomErrorHandler = require("../services/CustomErrorHandler");

let refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, "myjsonsecret", {
    expiresIn: "120m",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, "myrefreshjsonsecret", {
    expiresIn: "120m",
  });
};

const authController = {
  register: async (req, res, next) => {
    try {
      // GENERATE HASHED PASSWORD
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const userExist = await User.findOne({ email: req.body.email });
      const firstUser = await User.find();
      if (userExist)
        throw res
          .status(409)
          .send(`User with Email : ${req.body.email} already exists!`);

      // CREATE NEW USER
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        userType: firstUser.count() === 0 ? "admin" : "user",
        isDoctor: req.body.isDoctor ? true : false,
        validated: firstUser.count() === 0 ? true : false,
      });

      // SAVE USER AND RESPOND
      const user = await newUser.save();

      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      refreshTokens.push(refreshToken);

      return res.status(200).json({ user, accessToken, refreshToken });
    } catch (error) {
      res.status(500).send("Server Error");
    }
  },

  login: async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user)
        throw res.status(401).send("User with this email doesn't exist.");

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword)
        throw res.status(401).send("Password didn't match! Try again");
      // return next(CustomErrorHandler.wrongCredentials(400, "Wrong Password"));

      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      refreshTokens.push(refreshToken);

      return res.status(200).json({ user, accessToken, refreshToken });
    } catch (error) {
      // console.log("error :>> ", error);
      // return next(new CustomErrorHandler.serverError());
      res.status(500).json("Server Error Occurred");
    }
  },

  refreshToken: async (req, res, next) => {
    try {
      const refreshToken = req.body.token;

      if (!refreshToken) return next(CustomErrorHandler.unAuthenticated());

      if (!refreshTokens.includes(refreshToken))
        return next(
          CustomErrorHandler.unAuthenticated("Refresh Token is not valid")
        );

      const user = await jwt.verify(refreshToken, "myrefreshjsonsecret");

      if (!user) return next(CustomErrorHandler.unAuthenticated());

      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

      const newAccessToken = generateAccessToken(user);
      const newRefreshToken = generateRefreshToken(user);

      refreshTokens.push(newRefreshToken);

      return res.status(200).json({
        user,
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      });
    } catch (err) {
      res.status(500).send("Server Error");
    }
  },

  logout: async (req, res, next) => {
    const refreshToken = req.token;
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    res.status(200).json("Logout Successful");
  },
};

module.exports = authController;
