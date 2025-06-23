import jwt from 'jsonwebtoken';


const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers["authorization"];
    console.log("Authorization Header:", authHeader);
    const token = authHeader && authHeader.split(" ")[1];

    if(token == null){
        return res.status(401).json({message : "Authentication token required"});
    }
      const decoded = jwt.decode(token);
        console.log(decoded);
        // console.log("TOKEN:", token);
        console.log("SECRET:", process.env.JWT_PASSWORD);


    jwt.verify(token, `${process.env.JWT_PASSWORD}`, (err,user)=>{
        if(err){
            console.log("JWT VERIFY ERROR:", err);
            return res.status(403).json({message : "Token expired. Please signin again"});
        }
        console.log(req.user);

        req.user = user;
        next();
    })
}

export default authenticateToken;