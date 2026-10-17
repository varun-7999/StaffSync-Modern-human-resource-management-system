import "dotenv/config";
import dns from "node:dns";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js"
import departmentRouter from "./routes/department.js"
import employeeRouter from "./routes/employee.js"
import salaryRouter from './routes/salary.js'
import leaveRouter from './routes/leave.js'
import settingRouter from './routes/setting.js'
import dashboardRouter from './routes/dashboard.js'
import attendanceRouter from './routes/attendance.js'
import connectToDatabase from "./database/db.js"
const dnsServers = (process.env.DNS_SERVERS || '8.8.8.8,1.1.1.1')
  .split(',')
  .map((server) => server.trim())
  .filter(Boolean);
dns.setServers(dnsServers);

const app = express();
const port = Number(process.env.PORT || 5000);

if (!process.env.JWT_KEY) {
  throw new Error("JWT_KEY is missing. Add it to server/.env.");
}

app.use(cors());
app.use(express.json());
app.use(express.static('public/uploads'))
app.use('/api/auth', authRouter);
app.use('/api/department', departmentRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/salary', salaryRouter);
app.use('/api/leave', leaveRouter);
app.use('/api/setting', settingRouter);
app.use('/api/attendance', attendanceRouter);
app.use('/api/dashboard', dashboardRouter);

const startServer = async () => {
  await connectToDatabase();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer().catch((error) => {
  console.error(`Server startup failed: ${error.message}`);
  process.exitCode = 1;
});
