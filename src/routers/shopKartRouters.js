import { Router } from "express";
import { admVerification } from "../middlewares/admVerificationMiddleware";


const shopKartRouter = Router();

shopKartRouter.post("/shopKart",  postShopKart)
shopKartRouter.post("/shopKart", admVerification, deleteShopKart);

export default shopKartRouter