import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/myDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successful", user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    })
    .catch((error) => {
      // Handle the error
      console.error(error);
      res.send({ message: "An error occurred" });
    });
});

// app.post("/register", (req, res)=> {
//     console.log("hello")
//     const { name, email, password} = req.body
//     console.log("hello bro")
//     User.findOne({email: email}, (err, user) => {
//         if(user){
//             console.log("hello g")
//             res.send({message: "User already registerd"})
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 password
//             })
//             user.save(err => {
//                 if(err) {
//                     res.send(err)
//                 } else {
//                     console.log("above")
//                     res.send( { message: "Successfully Registered, Please login now." })
//                     console.log("below")
//                 }
//             })
//         }
//     })
    
// }) 

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    User.findOne({ email: email })
      .then((user) => {
        if (user) {
          res.send({ message: "User already registered" });
        } else {
          const newUser = new User({
            name,
            email,
            password,
          });
          newUser.save()
            .then(() => {
              res.send({ message: "Successfully Registered, Please login now." });
            })
            .catch((error) => {
              // Handle the error
              console.error(error);
              res.send({ message: "An error occurred" });
            });
        }
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
        res.send({ message: "An error occurred" });
      });
  });



app.listen(2000,() => {
    console.log("BE started at port 2000")
})