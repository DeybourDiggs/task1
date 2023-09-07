const mongoose = require("mongoose");

async function connDb() {
  const con = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  if (con) {
    console.log("database connected successfully");
  } else {
    console.log(err);
  }
}

module.exports = connDb;