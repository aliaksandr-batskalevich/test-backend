const logMiddleware = (req, res, next) => {
    console.log(`Request ${req.method}.`);
    return next();
};

export default logMiddleware;