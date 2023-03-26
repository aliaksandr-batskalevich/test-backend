const logMiddleware = (req, res, next) => {
    console.log(`Request ${req.method} from ${req.headers.host}.`);
    return next();
};

export default logMiddleware;