# Backend Setup Instructions

## Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. **Clone the repository:**
   ```sh
   git clone <YOUR_REPOSITORY_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory and add the following environment variables:**
   ```env
   PORT=3001
   MONGO_URI="YOUR MONGO DB CONNECTION"
   JWT_SECRET=t46lhpZ4NO46PYo2i/i5EQhacnV7dukT3JT5NIi6o1N8j+SRVTY7TzBitG8DmQjg0GOJNhAzQXVTRfamUpRZIg==
   NODE_ENV="development mode"
   ```
   Replace `YOUR MONGO DB CONNECTION` with your actual MongoDB connection string.

4. **Run the project:**
   - For production mode:
     ```sh
     npm run start
     ```
   - For development mode (with live reload using Nodemon):
     ```sh
     npm run dev
     ```

## API Routes
(Add API endpoints here if needed)

---

## Frontend Setup (Coming Soon)
The frontend part of the project will be added soon.

