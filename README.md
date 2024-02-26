# 💭 Message Board App

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Deployment](#deployment)
6. [License](#license)

## Introduction

Welcome to the Message Board App, a platform where users can share their thoughts. This application is built using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring a seamless and modern development experience.

## Features

  - 📫 Post and view messages on a user-friendly interface.
  - 🔄 Real-time updates with automatic message refreshing.
  - ⚙️ MVC (Model-View-Controller) architecture for a well-organized backend.
  - 🔄 Monorepo structure for combined backend and frontend development.
  - 🌐 Database storage powered by MongoDB for efficient data handling.
  - ⚡️ Fast and responsive frontend using React and Vite.

## Tech Stack

### Backend:
  - Express.js: Utilized for building a robust and scalable backend server.
  - MongoDB: Chosen as the database for its flexibility and ease of integration.
  - Vercel: Used for deployment and hosting of the backend.

### Frontend:
  - React: Developed an interactive and dynamic user interface.
  - Vite: Build tooling for modern frontend development.
  - Axios: Employed for making HTTP requests to the backend.

## Installation

Follow these steps to set up and run the project locally.

### 1. Fork the Repository

Click the "Fork" button in the top right corner of this repository to create a copy in your GitHub account.

### 2. Clone the Repository

Clone the forked repository to your local machine using the following command in your terminal:

```bash
git clone https://github.com/your-username-here/message-board-app.git
```

### 3. Navigate to the Project Directory

Change into the project directory:

```bash
cd message-board-app
```

### 4. Install Dependencies

Install the project dependencies using npm:

```bash
# go to backend directory
cd backend
npm install

# go to frontend directory
cd frontend
npm install
```

### 5. Configure Environment Variables

Create a .env file in the backend directory and add necessary environment variables, such as MongoDB connection string.


### 6. Open the webpage

Change the backend URL: 

```bash
cd frontend/src/utils
# change the backend_URI to http://localhost:5000
```
### 7. Start the Development Server

Run the development server with the following command:

```bash
# In the backend directory
npm run Start:dev

# In the frontend directory
npm run dev
```

### 8. Open the webpage

Open a browser and open the link provided in the terminal:

```bash
http://localhost:port/
```

### 9. Open the webpage on a different device:

Open a browser in a defferent device connected to the same network and open the link provided in the terminal:

```bash
http://ip-address:port/
```

### Note:

Make sure you have Node.js, npm, and MongoDB installed on your machine before starting the installation process.

## Deployment

Both the backend and frontend are deployed independently on Vercel. Follow their respective deployment processes on the Vercel platform.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
