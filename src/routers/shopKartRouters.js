import { Router } from "express";
<<<<<<< HEAD
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
=======
import { postShopKart, deleteItemShopKart, getShopKart } from "../controllers/shopKartControlles.js";
import { validateDeleteItem, validateGetItem, validateShopKartSchema } from "../middlewares/shopKartValidationMiddleware.js";

const shopKartRouter = Router();

shopKartRouter.post("/shopKart",validateShopKartSchema,  postShopKart)
shopKartRouter.delete("/shopKart/:id",validateDeleteItem,  deleteItemShopKart);
shopKartRouter.get("/shopKart/",validateGetItem, getShopKart)
>>>>>>> main

export default shopKartRouter;
