const express = require("express");
require("./db/dbConnection");
const user = require("./db/users");
const history=require('./db/history')
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
  let data = await user.find();
  res.send(data);
});
app.get("/customer/:email", async (req, res) => {
  let data = await user.findOne({ email: req.params.email });
  if (data) {
    res.send(data);
  } else {
    res.send({ result: "No result Found" });
  }
});
app.get("/user/:id", async (req, res) => {
  let data = await user.findOne({ _id: req.params.id });
  if (data) {
    res.send(data);
  } else {
    res.send({ result: "No result Found" });
  }
});
app.put("/update/:email", async (req, res) => {
 
  let data = await user.updateOne ({ email: req.params.email }, { $set: req.body });
  res.send(data);
});
app.put("/updateUser/:id", async (req, res) => {
 
  let data = await user.updateOne ({ _id: req.params.id }, { $set: req.body });
  res.send(data);
});
app.get("/history",async(req,res)=>{
  let data=await history.find();
  res.send(data);
});
app.post("/historyUpdate",async(req,res)=>{
  let data=new history(req.body);
  let result= await data.save();
  res.send(result)
})
app.get("/balance/:accountNo", async(req,res)=>{
  let data= await user.findOne({accountNo:req.params.accountNo});
  if(data)
  {
  res.send(data)
  }
  else{
    res.send({result:"enter correct account no"})
  }
  
 
})


app.listen(5000);
