exports.errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const errMessage = err.message || "Something wrong";
  const stack = process.env.NODE_ENV === "production" ? null : err.stack;

  res.status(statusCode).json({ errMessage, stack });
};
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Server Error";
  const stackTrace = process.env.NODE_ENV === "development" ? err.stack : null;

  res.status(statusCode).json({
    message: errorMessage,
    stack: stackTrace,
  });
};

module.exports = {
  errorHandler,
};
