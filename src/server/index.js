const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

dotenv.config();

const app = express();

app.use(express.static("dist"));
app.use(cors());

// console.log(__dirname);

app.get("/", (req, res) => {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/analyze", async (req, res) => {
  // res.sendFile('dist/index.html')
  console.log("triggered");
  const { url } = req.query;
  console.log(url);
  try {
    const result = await axios.get(
      `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`
    );
    const { agreement, subjectivity, confidence, irony } = result.data;
    res.send({ agreement, subjectivity, confidence, irony });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/test", (req, res) => {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, () => {
  console.log("Example app listening on port 8081!");
});
