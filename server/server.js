const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 5000
const connectDB = require("./db.js");

const { adminAuth, userAuth } = require("./middleware/auth.js");
//Connecting the Database
connectDB();
app.use(express.json());


app.use(cors());

app.use("/api/auth", require("./Routes/route"));

app.get('/', (req, res) => {
  res.json({ msg: "The Server is working"});

});
// app.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
// app.get("/basic", userAuth, (req, res) => res.send("User Route"));





app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))
