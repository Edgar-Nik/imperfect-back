require("dotenv").config();

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const filmMakerRoute = require("./routes/filmMakerRoute");
const designerRoute = require("./routes/designerRoute");
const fineArtRoute = require("./routes/fineArtRoute");
const musicianRoute = require("./routes/musicianRoute");
const performerRoute = require("./routes/performerRoute");
const productionManager = require("./routes/productionManagerRoute");
const s3 = require("./routes/s3Route");
const corsOptions = {
  origin: "*",
  methods: ["POST", "GET", "PATCH", "DELETE", "OPTIONS", "PUT"],
  allowedHeaders: [
    "Content-type",
    "Authorization",
    "Origin",
    "Access-Control-Allow-Origin",
    "Accept",
    "Options",
    "X-Requested-With",
  ],
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use("/api/filmmakers", filmMakerRoute);
app.use("/api/designers", designerRoute);
app.use("/api/fine-arts", fineArtRoute);
app.use("/api/musicians", musicianRoute);
app.use("/api/performers", performerRoute);
app.use("/api/production-managers", productionManager);
app.use("/api/s3", s3);

const start = async () => {
  console.log(`listening to port ${PORT}`);
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(PORT);
    })
    .catch((err) => {
      console.log(err);
    });
};

start();
