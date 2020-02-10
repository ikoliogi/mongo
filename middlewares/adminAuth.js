const jwt = require('jsonwebtoken');

const AdminAuth = async (req, res, next) => {

    if (!req.headers.authorization){
        return res.json({
            success: false,
            message: "Authorization header required"
        })
    }

    const token = req.headers.authorization.replace("Bearer ", "");

    let decodedUser;
    try {
        decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
       return res.json({
           success: false,
           error: err.name, // defines what error occurred - expired, invalid etc
           message: "JWT error"
       });
    }

    const user = await User
        .findById(decodedUser._id)
        .exec();

    if (!user || user.role != "admin") {
        return res.json({
            success: false,
            message: "Access forbidden"
        })
    }

    /*mporoume sto req na apo8hkeusoume oti plhroforia 8eloume,
    etsi wste ta epomena functions meta to middleware na ta xrhsimopoihsoun
    paradeigma: AuthController.checkToken*/
    req.user = user;
    next();

};

module.exports = AdminAuth;
