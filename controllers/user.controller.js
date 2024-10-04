const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const SignUp = async (req, res) => {
  const { name, email, password, } = req.body;
  try {
    const createUser = await User.create({ name, email, password });

    res
      .status(201)
      .json({ message: "Register Successfully", user: createUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isMatch = await user.comparedPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    console.log(isMatch);
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    console.log(token);

    res.status(201).json({
      message: "Login Successfully...",
      user: user,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = { SignUp, Login };
