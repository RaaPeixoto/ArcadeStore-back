import { Router } from "express";
import {
  deleteProduct,
  getProducts,
  postProduct,
  updateProduct,
} from "../controllers/productsController.js";
import { admVerification } from "../middlewares/admVerificationMiddleware.js";
import { validateProductSchema } from "../middlewares/productSchemaMiddleware.js";

const router = Router();

router.get("/products/:id?", getProducts);

router.use(admVerification);
<<<<<<< HEAD
router.post("/product/:id", validateProductSchema, postProduct);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", validateProductSchema, updateProduct);
=======
router.post("/product",validateProductSchema, postProduct);
 router.delete("/product/:id",deleteProduct);
router.put("/product/:id",validateProductSchema,updateProduct); 
>>>>>>> main

export default router;
