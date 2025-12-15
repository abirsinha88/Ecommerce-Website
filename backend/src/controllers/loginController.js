import {userServices} from "../services/userServices.js"

export const validateLogin = async (req,res,next) => {
    try {
                
        const token = await userServices.validateUser(req.body);
        res.cookie("token", token, {
        httpOnly: true, 
        secure: false, 
        sameSite: "Lax"
  });
        res.status(200).json({ success: true });

    } catch (error) {
        res
        .status(error?.status || 500)
        .json({status:"failed", data:{ error : error?. message || error}})
        
    }
}
