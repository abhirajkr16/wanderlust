# 🏡 WanderLust

> A full-stack property listing web application inspired by Airbnb — built with Node.js, Express.js, MongoDB, and EJS.

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-v5-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Local-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-v9-880000?style=flat-square&logo=mongoose&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-Templating-B4CA65?style=flat-square)
![Method Override](https://img.shields.io/badge/Method--Override-REST-blueviolet?style=flat-square)
![License](https://img.shields.io/badge/License-ISC-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active%20Development-orange?style=flat-square)

---

## 📌 Overview

**WanderLust** is a backend-first, full-stack web application that allows users to browse, create, update, and manage property listings — mirroring the core functionality of Airbnb. The project is built as part of an advanced full-stack development journey and demonstrates RESTful routing, MongoDB data modeling with Mongoose, and server-side rendering with EJS.

Each listing stores a title, description, price, location, country, and an optional image (with a smart default fallback). All data persists in a local MongoDB database (`wanderlust`).

---

## ✅ CRUD Progress

| Operation        | Status             | Route                    | Method   |
|------------------|--------------------|--------------------------|----------|
| Create Listing   | ✅ Complete         | `POST /listings`         | POST     |
| Read All         | ✅ Complete         | `GET /listings`          | GET      |
| Read Single      | ✅ Complete         | `GET /listings/:id`      | GET      |
| Update Listing   | ✅ Complete         | `PUT /listings/:id`      | PUT      |
| Delete Listing   | ⏳ In Progress      | `DELETE /listings/:id`   | DELETE   |

---

## 🚀 Features

- **Browse All Listings** — Displays all property listings from MongoDB on a single index page
- **View Listing Details** — Dedicated detail page for each listing with full information
- **Create a New Listing** — Form-based interface to add new property listings
- **Edit & Update Listings** — Pre-filled edit form with seamless `PUT` update via method-override
- **Default Image Fallback** — If no image URL is provided, a default image is automatically applied at the schema level
- **Database Seeding** — Sample listings pre-loaded via a seed script in `init/`
- **RESTful Routing** — Clean, resource-oriented Express routes following REST conventions
- **Server-Side Rendering** — Dynamic HTML pages rendered with EJS templates
- **Method Override** — Supports `PUT` and `DELETE` HTTP methods via HTML forms
- **Hot Reloading** — Development server powered by `nodemon`

---

## 🛠️ Tech Stack

| Layer          | Technology                               |
|----------------|------------------------------------------|
| Runtime        | Node.js (v18+)                           |
| Framework      | Express.js v5                            |
| Database       | MongoDB (local)                          |
| ODM            | Mongoose v9                              |
| Templating     | EJS v6                                   |
| Middleware     | method-override v3                       |
| Markup         | HTML5                                    |
| Styling        | CSS3                                     |
| Dev Tool       | Nodemon                                  |
| Module System  | CommonJS (`require` / `module.exports`)  |

---

## 📁 Folder Structure

```
AIRBN/
├── init/
│   ├── data.js              # Sample listing seed data
│   └── index.js             # Script to seed the MongoDB database
├── models/
│   └── listing.js           # Mongoose schema & model for property listings
├── views/
│   └── listings/
│       ├── index.ejs         # All listings page
│       ├── show.ejs          # Individual listing detail page
│       ├── new.ejs           # Create new listing form
│       └── edit.ejs          # Edit existing listing form
├── node_modules/             # npm dependencies (not committed)
├── .env                      # Environment variables (not committed)
├── .gitignore                # Git ignore rules
├── app.js                    # Main Express app — routes, middleware, DB connection
├── package.json              # Project metadata & dependency definitions
├── package-lock.json         # Locked dependency tree
└── README.md                 # Project documentation
```

---

## 📡 RESTful Routes

| Method     | Route                  | View / Action               | Description                    |
|------------|------------------------|-----------------------------|--------------------------------|
| `GET`      | `/listings`            | `index.ejs`                 | Display all listings           |
| `GET`      | `/listings/new`        | `new.ejs`                   | Show form to create a listing  |
| `POST`     | `/listings`            | Redirect → `/listings`      | Save new listing to DB         |
| `GET`      | `/listings/:id`        | `show.ejs`                  | Show details of one listing    |
| `GET`      | `/listings/:id/edit`   | `edit.ejs`                  | Show form to edit a listing    |
| `PUT`      | `/listings/:id`        | Redirect → `/listings/:id`  | Update listing in MongoDB      |
| `DELETE`   | `/listings/:id`        | Redirect → `/listings`      | Delete listing from MongoDB    |

---

## 🗄️ Data Model

```js
// models/listing.js
const listingSchema = new Schema({
  title:       { type: String, required: true },
  description: String,
  image: {
    type:    String,
    default: "<default-image-url>",
    set:     (v) => v === "" ? "<default-image-url>" : v,  // Fallback on empty string
  },
  price:    Number,
  location: String,
  country:  String,
});
```

---

## ⚙️ Installation

### Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Community Edition, running locally)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/wanderlust.git

# 2. Navigate into the project directory
cd wanderlust

# 3. Install all dependencies
npm install

# 4. (Optional) Install nodemon globally for development
npm install -g nodemon
```

---

## 🏃 Running the App

### 1. Start MongoDB

```bash
# On Windows (if MongoDB is installed as a service)
net start MongoDB

# Or start manually
mongod --dbpath "C:\data\db"
```

### 2. Seed the Database (First-Time Setup)

```bash
node init/index.js
```

### 3. Start the Server

```bash
# Development (with hot reload)
nodemon app.js

# Production
node app.js
```

The server starts at:

```
http://localhost:8080/listings
```

---

## 🗃️ MongoDB Setup

WanderLust connects to a **local MongoDB** instance.

```bash
# Open MongoDB shell
mongosh

# Switch to the WanderLust database
use wanderlust

# List all collections
show collections

# View all listings
db.listings.find().pretty()
```

| Setting    | Value                                    |
|------------|------------------------------------------|
| Host       | `127.0.0.1`                              |
| Port       | `27017`                                  |
| Database   | `wanderlust`                             |
| Collection | `listings`                               |
| URI        | `mongodb://127.0.0.1:27017/wanderlust`   |

---

## 🔐 Environment Variables

The MongoDB URI is currently set directly in `app.js`. For production deployments, move configuration to a `.env` file.

```env
# .env
PORT=8080
MONGO_URL=mongodb://127.0.0.1:27017/wanderlust
```

> ⚠️ **Never commit your `.env` file to version control.** It is already listed in `.gitignore`.

---

## 📦 Dependencies

### Production

| Package            | Version    | Purpose                                        |
|--------------------|------------|------------------------------------------------|
| `express`          | `^5.2.1`   | Web framework for routing and middleware       |
| `mongoose`         | `^9.7.3`   | MongoDB ODM for schema definition and queries  |
| `ejs`              | `^6.0.1`   | Server-side HTML templating engine             |
| `method-override`  | `^3.0.0`   | Enables `PUT`/`DELETE` via HTML forms          |

### Development

| Package    | Purpose                              |
|------------|--------------------------------------|
| `nodemon`  | Auto-restarts server on file changes |

---

## 📊 Project Status

> 🟠 **Active Development** — Core CRUD is nearly complete. The Delete route is implemented server-side and pending UI integration.

### ✅ Completed Milestones

- [x] Express application scaffolding
- [x] MongoDB connection via Mongoose
- [x] Listing schema & model definition
- [x] Database seeding with sample listings (`init/`)
- [x] RESTful routing — Index, Show, New, Create, Edit, Update
- [x] Server-side rendering with EJS templates
- [x] Method-override for `PUT` support in HTML forms
- [x] Default image fallback at schema level
- [x] Delete route implemented at the server level (`DELETE /listings/:id`)

### 🔄 In Progress

- [ ] Wire Delete button to the UI (`show.ejs` / `index.ejs`)

---

## 🔮 Future Improvements

- [ ] **Delete Listing UI** — Connect existing delete route to a confirmation button in the view layer
- [ ] **Flash Messages** — Success/error notifications using `connect-flash`
- [ ] **Input Validation** — Server-side validation with `Joi` or `express-validator`
- [ ] **Error Handling Middleware** — Centralized async error handler with custom error classes
- [ ] **User Authentication** — Sign up, login, and session management with Passport.js
- [ ] **Reviews & Ratings** — Nested review schema linked to individual listings
- [ ] **Cloud Image Uploads** — Upload and serve listing images via Cloudinary
- [ ] **Map Integration** — Display listing locations on an interactive map (Mapbox / Leaflet)
- [ ] **Search & Filter** — Filter listings by location, price range, and amenities
- [ ] **Responsive UI** — Mobile-first redesign with a polished CSS layout
- [ ] **Cloud Deployment** — Deploy to Render or Railway with MongoDB Atlas
- [ ] **Unit & Integration Tests** — Test suite with Jest or Mocha

---

## 🧠 Learning Outcomes

Working on WanderLust has strengthened understanding of:

- **RESTful API Design** — Structuring routes around resources using proper HTTP methods (GET, POST, PUT, DELETE)
- **Mongoose ODM** — Defining schemas, models, custom setters, and performing CRUD operations against MongoDB
- **Express Middleware** — Using `express.urlencoded`, `method-override`, and EJS view engine configuration
- **MVC-style Architecture** — Separating concerns across models, views, and route handlers
- **Database Seeding** — Writing and running seed scripts to populate development databases
- **EJS Templating** — Rendering dynamic server-side HTML with embedded JavaScript
- **Form Handling** — Processing form submissions, pre-filling edit forms, and redirecting after mutations
- **Git Workflow** — Committing incremental progress across a structured development cycle

---

## 📄 License

This project is licensed under the **ISC License**.

```
ISC License

Copyright (c) 2026

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
```

---

<div align="center">
  <p>Built with ❤️ as part of an advanced full-stack development journey.</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>

---

## Overview

**WanderLust** is a backend-first web application that allows users to browse, create, and manage property listings. Built as a learning project mirroring the core functionality of Airbnb, the app demonstrates RESTful API design, MongoDB data modeling with Mongoose, and server-side rendering with EJS.

The application currently supports adding property listings with details such as title, description, price, location, country, and an optional image. It stores all data in a local MongoDB database (`wanderlust`) and exposes routes to interact with listings via a REST API.

---

## Features

- **Property Listings** — Create and store rental property listings with titles, descriptions, prices, and locations
- **Default Image Fallback** — Listings automatically use a default image if none is provided
- **MongoDB Integration** — Persistent storage using Mongoose ODM with a well-defined schema
- **RESTful Routing** — Clean Express routes for listing operations
- **Async/Await** — Modern JavaScript async patterns for database operations
- **Hot Reloading** — Development server powered by `nodemon` for rapid iteration

---

## Tech Stack

| Layer         | Technology                              |
|---------------|-----------------------------------------|
| Runtime       | Node.js                                 |
| Framework     | Express.js v5                           |
| Database      | MongoDB (local)                         |
| ODM           | Mongoose v9                             |
| Templating    | EJS v6                                  |
| Dev Tool      | Nodemon                                 |
| Module System | CommonJS (`require` / `module.exports`) |

---

## Folder Structure

```
AIRBN/
├── models/
│   └── listing.js          # Mongoose schema & model for property listings
├── node_modules/           # Installed npm dependencies
├── app.js                  # Main application entry point (Express + MongoDB setup)
├── package.json            # Project metadata and dependency definitions
├── package-lock.json       # Locked dependency tree
└── README.md               # Project documentation
```

---

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Community Edition, running locally)
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- [nodemon](https://www.npmjs.com/package/nodemon) (optional, for development)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/wanderlust.git

# 2. Navigate into the project directory
cd wanderlust

# 3. Install all dependencies
npm install
```

---

## 🏃 Running Locally

### Development (with hot reload)

```bash
nodemon app.js
```

### Production

```bash
node app.js
```

The server will start at:

```
http://localhost:8080
```

### Available Routes

| Method | Endpoint    | Description                           |
|--------|-------------|---------------------------------------|
| GET    | `/`         | Root route — health check             |
| GET    | `/listings` | Creates a sample listing and saves it |

---

## MongoDB Setup

WanderLust uses a **local MongoDB** instance. Follow these steps to get it running:

### 1. Start MongoDB

```bash
# On Windows (if MongoDB is installed as a service)
net start MongoDB

# Or start manually
mongod --dbpath "C:\data\db"
```

### 2. Verify the Connection

Open a new terminal and connect using the Mongo shell:

```bash
mongosh
```

Once inside the shell, you can inspect the database:

```js
// Switch to the wanderlust database
use wanderlust

// List all collections
show collections

// View all listings
db.listings.find().pretty()
```

### Database Details

| Setting    | Value                                  |
|------------|----------------------------------------|
| Host       | `127.0.0.1`                            |
| Port       | `27017`                                |
| Database   | `wanderlust`                           |
| Collection | `listings`                             |
| Connection | `mongodb://127.0.0.1:27017/wanderlust` |

---

## Environment Variables

Currently, the MongoDB connection URL is hardcoded in `app.js`. For production use, it is strongly recommended to move sensitive configuration to a `.env` file.

### Recommended Setup

1. Install `dotenv`:

```bash
npm install dotenv
```

2. Create a `.env` file in the root directory:

```env
# .env
PORT=8080
MONGO_URL=mongodb://127.0.0.1:27017/wanderlust
```

3. Load it in `app.js`:

```js
require('dotenv').config();

const mongoUrl = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;
```

>  **Never commit your `.env` file to version control.** Add it to `.gitignore`.

---

## Dependencies

### Production

| Package    | Version  | Purpose                                  |
|------------|----------|------------------------------------------|
| `express`  | `^5.2.1` | Web framework for routing and middleware |
| `mongoose` | `^9.7.3` | MongoDB ODM for schema and queries       |
| `ejs`      | `^6.0.1` | Server-side HTML templating engine       |

### Development

| Package   | Version | Purpose                            |
|-----------|---------|------------------------------------|
| `nodemon` | latest  | Auto-restart server on file change |

Install dev dependencies:

```bash
npm install --save-dev nodemon
```

---

## 📸 Screenshots

> 🚧 UI screenshots coming soon — the project is currently in the backend/API development phase.

---

##  Future Improvements

- [ ]  **User Authentication** — Sign up, login, and session management (Passport.js / JWT)
- [ ]  **Full CRUD for Listings** — Create, Read, Update, Delete via proper REST routes
- [ ]  **EJS View Layer** — Server-rendered pages with a clean, styled frontend
- [ ]  **Map Integration** — Display listing locations on an interactive map (Mapbox / Leaflet)
- [ ]  **Reviews & Ratings** — Nested review schema linked to listings
- [ ]  **Cloud Image Uploads** — Upload and manage listing images via Cloudinary
- [ ]  **Search & Filter** — Filter listings by location, price range, and amenities
- [ ]  **Responsive UI** — Mobile-first design with CSS/Bootstrap
- [ ]  **Cloud Deployment** — Deploy to Render, Railway, or AWS with MongoDB Atlas
- [ ]  **Input Validation** — Server-side validation with `Joi` or `express-validator`
- [ ]  **Environment Config** — Full `dotenv` integration for secure config management
- [ ]  **Unit & Integration Tests** — Test suite with Jest or Mocha

---

##  License

This project is licensed under the **ISC License**.

```
ISC License

Copyright (c) 2026

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
```

---

<div align="center">
  <p>Built with as part of an advanced full-stack development journey.</p>
  <p> Star this repo if you found it helpful!</p>
</div>
