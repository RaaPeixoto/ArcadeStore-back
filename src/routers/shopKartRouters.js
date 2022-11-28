import { Router } from "express";
import {
  postShopKart,
  deleteItemShopKart,
  getShopKart,
} from "../controllers/shopKartControlles.js";
import { validateShopKartSchema } from "../middlewares/shopKartValidationMiddleware.js";

const shopKartRouter = Router();

shopKartRouter.post("/shopKart", validateShopKartSchema, postShopKart);
shopKartRouter.delete("/shopKart/:id", deleteItemShopKart);
shopKartRouter.get("/shopKart/:id", getShopKart);

export default shopKartRouter;
