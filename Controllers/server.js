const express = require("express")
const app = express()
const PORT = 5000
const connectDB = require("../db.js");
const cookieParser = require("cookie-parser");
const { adminAuth, userAuth } = require("./middleware/auth.js");
//Connecting the Database
connectDB();
app.use(express.json());


app.use(cookieParser());
app.use("/api/auth", require("./Routes/route"));
// app.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
// app.get("/basic", userAuth, (req, res) => res.send("User Route"));


process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  });



app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))
