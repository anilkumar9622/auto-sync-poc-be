const express = require('express');
const cors = require('cors');
const User = require("./config");
const app = express();

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
}));
  app.post("/create", async (req, res) => {
      try{
        const data = req.body
        await User.add({data});
        res.send({msg : "User added"})
      }
      catch(error){
          console.log(error);
       res.send("err")
      }
  
  })

  app.listen(4000, ()=>console.log("Server running on port 4000"))

module.exports = app