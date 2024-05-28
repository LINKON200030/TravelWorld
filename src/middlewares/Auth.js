import {DecodeToken} from "../utility/TokenHelper.js";

export default (req, res, next) => {
    // Receive Token
    let token=req.cookies['token'];

    if (!token) {
        // Handle the case when the token is not found or undefined
        return res.status(401).json({ message: "Unauthorized" });
    }


    // Token Decode
    let decoded = DecodeToken(token);
    // Request Header Email+UserID Add
    if (decoded === null) {
        return res.status(401).json({ status: "fail", message: "Unauthorized" });
    } else {
        let email = decoded['email'];
        let user_id = decoded['user_id'];
        let username = decoded['username'];
        req.headers.email = email;
        req.headers.user_id = user_id;
        req.headers.username = username;
        next();
    }
};