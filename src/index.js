const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const route=require("./route/urlRoute");
const cors = require("cors");
const app =express();
const port=3000;

app.use(cors({origin:"*"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/", route);

mongoose.connect("mongodb+srv://21pintoo-singh:S0Uw8LhNlYRyHfiq@cluster1.k5nsu.mongodb.net/group40Database")
  .then(() => {
    console.log("✅ MongoDb is connected");
    app.listen(port, () => {
      console.log(`✅ Server is start on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("⚠️ MongoDB connection failed:", err.message);
    process.exit(1);
  });