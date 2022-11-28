import { Router } from "express";
import { postShopKart, deleteItemShopKart, getShopKart } from "../controllers/shopKartControlles.js";
import { validateDeleteItem, validateGetItem, validateShopKartSchema } from "../middlewares/shopKartValidationMiddleware.js";

const shopKartRouter = Router();

shopKartRouter.post("/shopKart",validateShopKartSchema,  postShopKart)
shopKartRouter.delete("/shopKart/:id",validateDeleteItem,  deleteItemShopKart);
shopKartRouter.get("/shopKart/",validateGetItem, getShopKart)

export default shopKartRouter