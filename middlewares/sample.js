module.exports = (req, res, next) => {
    // Middleware Conditions
    if (true) {
        return res.send("Middleware logic here..");
    }

    next();
};