const login = async (req, res) => {

    const user = await User
        .findOne({email: req.body.email})
        .exec();

    // if there is no user with this email
    if (user === null) {
        return res.json({
            message: "Wrong Credentials (no user)"
        });
    }

    if (user.verifyPasswordSync(req.body.password)) {
        // success login
        res.json(user);
    } else {
        // login failed
        res.json({
            message: "Wrong credentials (wrong password)"
        });
    }

// res.json(user);

}

module.exports = {
    login
}
