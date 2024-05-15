import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./Db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected Successfully !! at Port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("Failed while connection to mongoDB");
  });
