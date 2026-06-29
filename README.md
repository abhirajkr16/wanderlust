#  WanderLust

> A full-stack property listing platform inspired by Airbnb — built with Node.js, Express, and MongoDB.

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
