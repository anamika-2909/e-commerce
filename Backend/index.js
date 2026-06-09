const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('./model/user');
const contact = require('./model/contact');
// const Managepro = require('./model/Managepro');
const productRouter = require('./router/productRouter');
const categoryR = require('./router/categoryR');



app.use(cors());
app.use(express.json())
app.use('/api', productRouter);
app.use('/api',categoryR)
app.use("/upload", express.static("upload"))


mongoose.connect("mongodb://localhost:27017/e-data")
  .then(() => console.log('Connected to Mongodb'))
  .catch((err) => console.log('Error connecting to mongodb', err))

// Ragisterform
app.post("/registerform", async (req, res) => {
  try {
    const { Firstname, Lastname, Email, Password } = req.body;

    console.log(Firstname, Lastname, Email, Password)

    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).send("User already exists")
    }

    const hashedPassword = await bcrypt.hash(Password, 10);
    console.log(hashedPassword)

    // console.log(req.body)
    const user = new User({ Firstname, Lastname, Email, Password: hashedPassword })
    await user.save()
    res.status(200).send("User Registered successfully")
  }
  catch (err) {
    res.status(500).send("Error registering user")
  }
})
// LoginForm
app.post("/loginform", async (req, res) => {
  try {
    const { Email, Password } = req.body;
    console.log(Email, Password)

    const existingUser = await User.findOne({ Email });
    if (!existingUser) {
      return res.status(400).send("User Not Found")
    }

    const matchPassword = await bcrypt.compare(Password, existingUser.Password)
    if (!matchPassword) {
      return res.status(400).send("Invalid Password")
    }
    console.log(matchPassword)
    // res.status(200).send("User Login successfully")


    const token = jwt.sign({ userid: existingUser._id,role: existingUser.role }, "SecretKey", { expiresIn: "1h" })

    res.status(200).json({
      message: "User Login Successfully",
      token: token,
      userName: existingUser.Firstname,
      userEmail: existingUser.Email,
       role: existingUser.role
    });
  }
  catch {
    res.status(500).json("Error Login user ")

  }

})

// ContactForm
 app.post("/conatctform", async (req, res) => {
    try {
        console.log(req.body)
        const abc= new contact(req.body)
        await abc.save()
        res.status(200).send("User add conatact detail")
    }
    catch (err) {
        res.status(500).send("Error user conatct detail")
    }
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})