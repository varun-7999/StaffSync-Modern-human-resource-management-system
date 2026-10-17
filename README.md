# StaffSync - Employee Management System

StaffSync is a comprehensive employee management system built using the MERN stack. It provides role-based access control for admins and employees, along with features like employee and department management, leave tracking, search, filter, and pagination.

## Features

- Role-based authentication (Admin & Employee)
- Employee and department management
- Leave request and approval system
- Attendance marking system
- Search, filter, and pagination for efficient data retrieval
- Responsive UI with Tailwind CSS

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT
- **State Management:** Context API

## Installation & Setup

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/staffsync.git
cd staffsync
```

### 2. Set Up Environment Variables

Copy `server/.env.example` to `server/.env`, then fill in the MongoDB connection string and a private JWT signing key:

```env
PORT=5000
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority
JWT_KEY=replace-with-a-long-random-private-value
```

`PORT` is the port used by the Express API. `MONGODB_URL` is your MongoDB
connection string, and `JWT_KEY` must be a private, unpredictable string used
to sign login tokens. Do not commit `server/.env` or paste real credentials
into documentation.

### 3. Install Dependencies

#### Backend

```sh
cd server
npm install
```

#### Frontend

```sh
cd ../client
npm install
```

### 4. Seed the Database (Create Admin User)

Before running the application, seed the database by running:

```sh
cd ../server
node userSeed.js
```

This will create an admin user.

Use these credentials to sign in for the first time:

```text
Email: admin@gmail.com
Password: adminpassword123
```

There is no public signup page. After signing in as an admin, open
**Employees** and choose **Add New Employee**. Set the employee's email,
password, and role there. The employee can then sign in using those
credentials.

### 5. Start the Application

#### Backend

```sh
cd server
npm start
```

You can also start the backend directly with `node server.js`; it loads
`server/.env` automatically.

#### Frontend

```sh
cd ../client
npm run dev
```

## Folder Structure

### Server Directory

```
server/
│── controllers/
│── database/
│── middleware/
│── models/
│── routes/
│── public/upload/
│── .gitignore
│── package.json
│── package-lock.json
│── server.js
│── userSeed.js
```

### Client Directory

```
client/
│── public/
│── src/
│── .gitignore
│── index.html
│── package.json
│── package-lock.json
│── vite.config.js
```

## Contributing

Feel free to fork this repository and submit pull requests for improvements or new features.
