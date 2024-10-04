const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  products: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  role: { type: String },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  try {
    // generate salt:
    const salt = await bcrypt.genSalt(10);

    // generate hash pass.
    const hashPassword = await bcrypt.hash(user.password, salt);

    user.password = hashPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

userSchema.methods.comparedPassword = async function (userPassword) {
  const compare = await bcrypt.compare(userPassword, this.password);
  return compare;
};

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
