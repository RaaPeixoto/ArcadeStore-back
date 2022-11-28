import jwt from "jsonwebtoken";
import { sessionsCollection } from "../database/db.js";


export async function admVerification (req,res,next){
const {authorization} = req.headers//pegar token do header
const token = authorization?.replace("Bearer ", ""); 
  if (!token) {
    return res.sendStatus(401);
  }

try {
	const userData = await sessionsCollection.findOne({token});
	// formato { name: "Raisa", email:"raisa@raisa.com",type: "adm ou user", id : "id do usuário"}
  if(!userData){
return res.sendStatus(401);
  }
 
    if (userData.type!=="adm"){
        return res.sendStatus(401);
    }
    
} catch {
    res.sendStatus(401);
	// se caiu aqui, o token é inválido ou foi adulterado
}

next();
}
