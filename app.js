const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Listing = require("./models/listing.js");

const mongoUrl = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(mongoUrl);
}
async function main() {
  await mongoose.connect(mongoUrl);
}

app.get("/listings", async (req, res) => {
  let sampleListing = new Listing({
    title: "my home",
    description: "buy this villa",
    price: 1200,
    location: "Goa",
    country: "Inida",
  });
  await sampleListing.save();
  console.log("sample was saved");
  res.send("succefull");
});

main()
  .then(() => {
    console.log("Connected to DB");

    app.listen(8080, () => {
      console.log("Server is running at port 8080");
    });
  })
  .catch((err) => {
    console.log("Database Connection Failed:", err);
  });

app.get("/", (req, res) => {
  res.send("hii , i am root");
});
