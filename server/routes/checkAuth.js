const checkAuth = (req, res, next) => {
    if (!req.session.username) {
        res.status(401).json(
            {
                success: false,
                msg: "Unauthorized"
            }
        );
    } else {
        next();
    }
};

module.exports = checkAuth