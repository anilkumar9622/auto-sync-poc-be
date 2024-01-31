const express = require('express');
const cors = require('cors');
const User = require("./config");
const app = express();

app.use(express.json())
const allowedOrigins = [
  'http://localhost:3000',
  'https://auto-sync-poc-fe.vercel.app',
];

app.use(cors({
  origin: "*",
}));
  // app.post("/create", async (req, res) => {
  //     try{
  //       const data = req.body
  //       await User.add({data});
  //       res.send({msg : "User added"})
  //     }
  //     catch(error){
  //         console.log(error);
  //      res.send("err")
  //     }
  
  // })

  app.post("/create", async (req, res) => {
    try {
        const dataList = req.body; // Assuming req.body is an array of data objects
        await Promise.all(dataList.map(async (data) => {
            await User.add(data); // Assuming User.add is an asynchronous operation
        }));
        res.send({ msg: "Users added" });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
});


  app.listen(4000, ()=>console.log("Server running on port 4000"))

module.exports = app