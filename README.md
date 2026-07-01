# WanderLust

A full-stack property listing web application inspired by Airbnb — built with Node.js, Express.js, MongoDB, and EJS.

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-v5-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Local-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-v9-880000?style=flat-square)
![EJS](https://img.shields.io/badge/EJS-Templating-B4CA65?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active%20Development-orange?style=flat-square)

---

## Overview

WanderLust is a backend-first, full-stack web application for browsing and managing property listings. It demonstrates RESTful routing, MongoDB data modeling with Mongoose, and server-side rendering using EJS with layouts and partials.

---

## Features

- Browse all listings on an index page
- View individual listing detail pages
- Create new listings via a form
- Edit and update existing listings with a pre-filled form
- Delete listings (server-side complete; delete button pending in views)
- Default image fallback when no image URL is provided (set at schema level)
- Database seeding via a standalone seed script
- Shared layout and reusable EJS partials (navbar, footer) using ejs-mate
- Static asset serving from the `public/` directory

---

## Tech Stack

| Layer         | Technology                              |
|---------------|-----------------------------------------|
| Runtime       | Node.js (v18+)                          |
| Framework     | Express.js v5                           |
| Database      | MongoDB (local)                         |
| ODM           | Mongoose v9                             |
| Templating    | EJS v6 + ejs-mate (layouts)             |
| Middleware    | method-override v3                      |
| Styling       | CSS3                                    |
| Dev Tool      | Nodemon                                 |
| Module System | CommonJS (`require` / `module.exports`) |

---

## Project Structure

```
AIRBN/
├── init/
│   ├── data.js              # Sample seed data
│   └── index.js             # Script to seed the database
├── models/
│   └── listing.js           # Mongoose schema & model
├── public/
│   └── css/
│       └── style.css        # Global styles
├── views/
│   ├── includes/
│   │   ├── navbar.ejs       # Shared navigation partial
│   │   └── footer.ejs       # Shared footer partial
│   ├── layouts/
│   │   └── boilerplate.ejs  # Base HTML layout (ejs-mate)
│   └── listings/
│       ├── index.ejs        # All listings
│       ├── show.ejs         # Single listing detail
│       ├── new.ejs          # Create listing form
│       └── edit.ejs         # Edit listing form
├── app.js                   # Express app — routes, middleware, DB connection
├── package.json
└── README.md
```

---

## RESTful Routes

| Method   | Route                  | Description             |
|----------|------------------------|-------------------------|
| `GET`    | `/listings`            | Display all listings    |
| `GET`    | `/listings/new`        | Show create form        |
| `POST`   | `/listings`            | Save new listing to DB  |
| `GET`    | `/listings/:id`        | Show single listing     |
| `GET`    | `/listings/:id/edit`   | Show edit form          |
| `PUT`    | `/listings/:id`        | Update listing in DB    |
| `DELETE` | `/listings/:id`        | Delete listing from DB  |

---

## Data Model

```js
// models/listing.js
const listingSchema = new Schema({
  title:       { type: String, required: true },
  description: String,
  image: {
    type:    String,
    default: "<default-image-url>",
    set:     (v) => v === "" ? "<default-image-url>" : v,
  },
  price:    Number,
  location: String,
  country:  String,
});
```

---

## Installation

**Prerequisites:** Node.js v18+, MongoDB (local), npm

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust
npm install
```

---

## Running the App

```bash
# Start MongoDB (Windows)
net start MongoDB

# Seed the database (first-time setup)
node init/index.js

# Start the development server
nodemon app.js
```

App runs at `http://localhost:8080/listings`.

---

## Environment Variables

The MongoDB URI is currently hardcoded in `app.js`. For production, move it to a `.env` file:

```env
PORT=8080
MONGO_URL=mongodb://127.0.0.1:27017/wanderlust
```

> Never commit `.env` to version control. It is listed in `.gitignore`.

---

## Dependencies

| Package           | Version   | Purpose                                   |
|-------------------|-----------|-------------------------------------------|
| `express`         | `^5.2.1`  | Web framework                             |
| `mongoose`        | `^9.7.3`  | MongoDB ODM                               |
| `ejs`             | `^6.0.1`  | Templating engine                         |
| `ejs-mate`        | latest    | Layout support for EJS                    |
| `method-override` | `^3.0.0`  | Enables PUT/DELETE from HTML forms        |
| `nodemon`         | latest    | Dev: auto-restarts server on file changes |

---

## Current Status

Full CRUD for listings is implemented. The delete route works server-side; adding the delete button to the views is the next step.

**Completed**
- Express scaffolding and MongoDB connection
- Mongoose schema with default image fallback
- Database seeding (`init/`)
- All 7 RESTful routes (Index, Show, New, Create, Edit, Update, Delete)
- EJS layouts with ejs-mate and shared partials (navbar, footer)
- method-override for PUT/DELETE support in HTML forms
- Static file serving from `public/`

**In Progress**
- Delete button in listing views
- Flash messages for user feedback

---

## Planned Features

- Flash messages (connect-flash)
- Server-side input validation (Joi)
- Centralized error handling middleware
- User authentication (Passport.js)
- Reviews and ratings
- Cloud image uploads (Cloudinary)
- Map integration (Mapbox / Leaflet)
- Search and filter by location, price, and amenities
- Cloud deployment with MongoDB Atlas
- Unit and integration tests (Jest / Mocha)

---

## License

ISC License — Copyright (c) 2026

---

<div align="center">
  Built as part of an advanced full-stack development journey.
</div>
