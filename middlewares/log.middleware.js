const logMiddleware = (req, res, next) => {
    console.log(`Request ${req.method} from ${req.socket.remoteAddress}.`);
    return next();
};

export default logMiddleware;