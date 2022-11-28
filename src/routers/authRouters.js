import { Router } from "express";
import {
  signInValidation,
  signUpValidation,
} from "../middlewares/authValidationMiddleware.js";
import { signIn, signUp, updateUser } from "../controllers/authController.js";

const authRouter = Router();
authRouter.post("/signin", signInValidation, signIn);
authRouter.post("/signup", signUpValidation, signUp);
authRouter.put("/user/:id", updateUser);

export default authRouter;
