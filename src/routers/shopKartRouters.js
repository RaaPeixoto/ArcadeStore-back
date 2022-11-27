import { Router } from "express";
import { postShopKart, deleteItemShopKart, getShopKart } from "../controllers/shopKartControlles";
import { validateShopKartSchema } from "../middlewares/shopKartValidationMiddleware";

const shopKartRouter = Router();

shopKartRouter.post("/shopKart",validateShopKartSchema,  postShopKart)
shopKartRouter.delete("/shopKart/:id",  deleteItemShopKart);
shopKartRouter.get("/shopKart", getShopKart)

export default shopKartRouter