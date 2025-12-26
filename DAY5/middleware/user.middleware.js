const dataCheckingMiddleware = (req, res, next) => {
    try {
        const {name, age, email} = req.body;
        console.log(name, age, email);
        if(!name || !age || !email){
            res.status(400).json({
                message: "All fields are required"
            })
        }
        next();
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = dataCheckingMiddleware;