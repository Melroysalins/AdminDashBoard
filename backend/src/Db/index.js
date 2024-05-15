import mongoose from "mongoose";
import { DBName } from "../constants.js";

export const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DBName}`
    );
    console.log("Connected !!");
  } catch (error) {
    console.log("Connection Failed !! MongoDb", error);
  }
};
