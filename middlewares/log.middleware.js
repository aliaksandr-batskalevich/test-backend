const logMiddleware = (req, res, next) => {
    console.log(`Request ${req.method} from ${req.origin}.`);
    return next();
};

export default logMiddleware;