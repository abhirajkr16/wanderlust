const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://i.pinimg.com/1200x/b1/96/19/b1961940b23f94e965b91944fdea25e8.jpg",
    set: (v) =>
      v === ""
        ? "https://i.pinimg.com/1200x/b1/96/19/b1961940b23f94e965b91944fdea25e8.jpg"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
