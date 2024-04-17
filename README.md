# FileME

This tax filing software is built using React Native Expo for the frontend, bcrypt for password encryption, and MongoDB for data storage.

## Features

- User authentication with AES256 encrypted data
- Data storage and retrieval using MongoDB
- Simple and intuitive user interface for tax filing

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Amar-Mahmoud/FileME.git
   
2. Navigate to the project directory:
   ```bash
   cd FileME
3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the project root and add the MongoDB connection string along with the secret key and JWT token:
   ```bash
   PORT=3001
   DATABASE_URL=mongodb...
   SECRET_KEY=...
   JWT_TOKEN=...
5. Start the Expo development server:
   ```bash
   npm start
6. Start the backend
   ```bash
   cd ..
   cd backend
   npm install
   nodemon.js server.js
