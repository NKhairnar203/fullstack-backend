const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const authMiddleware = require("./middlewares/auth.middleware.js");
const connect = require("./config/db.js");
const productRoute = require("./routes/product.route");
const userRoute = require("./routes/user.route.js");
const cors = require("cors");

const corsOptions = {
  origin: "http://127.0.0.1:5173", // Only allow this origin
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

app.get("/",(req,res)=>{
  res.send("Connected")
})

app.use("/api", productRoute)
app.use("/api", userRoute);

app.listen(3007, async () => {
  await connect;

  console.log("server is running on port 8080");
});
