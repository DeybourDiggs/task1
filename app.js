const express = require("express");
require("dotenv").config();
const app = express();
const db = require("./config/db");
const Task = require("./models/TaskModel");

const PORT = process.env.PORT || 3030;
db();
app.use(express.json());

app.post("/task", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).json({
      status: true,
      task,
    });
  } catch (error) {
    res.status(401).json({
      status: false,
      message: error,
    });
  }
});


app.get("/task" , async(req, res) => {
    try {
        const allTasks = await Task.find()

        res.status(201).json({
            success: "true",
            data: allTasks
        })
    } catch (error) {
        res.status(401).send(error);
    }
})

app.get("/task", async (req, res) => {
    
  try {
   
    const tasks = await Task.find(req.query)
      
    res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    res.status(401).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
