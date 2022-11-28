import { checkOutSchema } from "../models/checkOutSchema.js";
import { sessionsCollection} from "../database/db.js";

export async function validatecheckOutSchema(req, res, next) {
  const { error } = checkOutSchema.validate(req.body, { abortEarly: false });
  const { authorization } = req.headers;
  if (!authorization) {
    
    return res.sendStatus(401)
  }
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  next();
}



export async function validateGetCheckOut(req,res,next){
 
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(401);
  }
  const user = await sessionsCollection.findOne({ token });
  if (!user) {
    return res.sendStatus(401);
  }
 res.locals.user=user;
  next();
}