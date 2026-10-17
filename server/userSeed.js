import "dotenv/config";
import dns from "node:dns";
import User from "./models/User.js"
import bcrypt from "bcrypt"
import connectToDatabase from "./database/db.js";

const dnsServers = (process.env.DNS_SERVERS || "8.8.8.8,1.1.1.1")
  .split(",")
  .map((server) => server.trim())
  .filter(Boolean);
dns.setServers(dnsServers);

const userRegister = async () => {
  try{
    await connectToDatabase();
    const existingAdmin = await User.findOne({ email: "admin@gmail.com" });

    if (existingAdmin) {
      console.log("Admin user already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("adminpassword123",10);
    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin"
    })
    await newUser.save();
    console.log("Admin user created");
  }catch(error){
    console.log(error)
  } finally {
    process.exit();
  }
}

userRegister();