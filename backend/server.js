const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const app = express();
const personnels = require("./routes/api/personnels");
app.use(cors());
const mongo_url = config.get("mongo_url");
mongoose.set('strictQuery', true);
mongoose
.connect(mongo_url, { useNewUrlParser:true , useUnifiedTopology:true })
.then(() =>console.log("MongoDB connected..."))
.catch((err) =>console.log(err));

app.use("/api/personnels",personnels);


const port = process.env.PORT || 3001;
app.listen(port, () =>console.log(`Server running on port ${port}`));