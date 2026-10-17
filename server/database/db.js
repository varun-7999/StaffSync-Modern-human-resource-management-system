import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is missing. Add it to server/.env.");
  }

  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Connection with database successful");
};

export default connectToDatabase;