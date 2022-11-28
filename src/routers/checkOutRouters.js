import {Router} from "express";
import { postCheckOut, getCheckOut} from "../controllers/checkOutController.js";
import { validatecheckOutSchema, validateGetCheckOut } from "../middlewares/checkOutMiddleware.js";


const checkOutRouter = Router();

checkOutRouter.get("/checkOut",validateGetCheckOut,getCheckOut )
checkOutRouter.post("/checkOut",validatecheckOutSchema, postCheckOut)


export default checkOutRouter
