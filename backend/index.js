import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Scan from "./models/Scan.js";
import Criteria from "./models/Criteria.js";
import { data } from "./data.js";
import { getData } from "./controllers/getData.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
};

//middleware
app.use(express.json());
app.use(cors(corsOptions));

//database connect
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB database is connected");
  } catch (err) {
    console.log(err);
    console.log("MongoDB database connection failed");
  }
};

app.get("/", getData);

app.listen(port, () => {
  connectDB();
  console.log(`Server running on PORT ${port}`);
});


//Data was stored into a MongoDB database using the functions below

// async function fillModels() {
//   await connectDB();
//   try {
//     // Clear existing data
//     await Criteria.deleteMany({});
//     await Scan.deleteMany({});

//     insertScans();
//     console.log("Data filled successfully");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

//Function to insert criteria and return the ObjectId
// async function insertCriteria(criteria) {
//   const newCriteria = await Criteria.create(criteria);
//   return newCriteria._id;
// }

//Function to insert scans with populated criteria
// async function insertScans() {
//   for (const scan of data) {
//     const criteriaIds = await Promise.all(scan.criteria.map(insertCriteria));

//     const newScan = await Scan.create({
//       id: scan.id,
//       name: scan.name,
//       tag: scan.tag,
//       color: scan.color,
//       criteria: criteriaIds,
//     });

//     // console.log(newScan);
//   }
// }

