import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productsRouters from "./routers/productsRouters.js"
import authRouter from "./routers/authRouters.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(productsRouters);





const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));

