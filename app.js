const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

const mongoUrl = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(mongoUrl);
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

app.post("/listings", async (req, res) => {
  let newListig = new Listing(req.body.listing);
  await newListig.save();
  res.redirect("/listings");
});

app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  res.redirect(`/listings/${id}`);
});

app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

// app.get("/listings", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "my home",
//     description: "buy this villa",
//     price: 1200,
//     location: "Goa",
//     country: "Inida",
//   });
//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("succefull");
// });

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
