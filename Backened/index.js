import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// const express = require('express');
// const dotenv = require('dotenv');
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js"
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb
const connectToDatabase = async () => {
  try {
    mongoose.connect(URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("Error",error);
  }
};
connectToDatabase();

//defining route
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});