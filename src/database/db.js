import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
  } catch (err) {
    console.log(err);
  }

  const db = mongoClient.db("ArcadeStore");

  export const productsCollection = db.collection("products");
  export const usersCollection = db.collection("users");
  export const sessionsCollection = db.collection("sessions");
  export const shopKartCollection = db.collection("shopKart");
  export const checkOutCollection = db.collection("checkOut");
