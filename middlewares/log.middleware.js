const logMiddleware = (req, res, next) => {
    console.log(req.socket.remoteAddress);

    console.log(`Request ${req.method} from ${req.headers.host}.`);
    return next();
};

export default logMiddleware;