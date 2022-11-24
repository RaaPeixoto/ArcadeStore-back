import jwt from "jsonwebtoken";
export async function admVerification (req,res,next){
const token = req.headers//pegar token do header
const key = process.env.JWT_SECRET;

try {
	const userData = jwt.verify(token, key);
	// formato { name: "Raisa", email:"raisa@raisa.com",type: "adm ou user", id : "id do usuário"}
    if (userData.type!=="adm"){
        res.sendStatus(401);
    }
    
} catch {
    res.sendStatus(401);
	// se caiu aqui, o token é inválido ou foi adulterado
}

next();
}
