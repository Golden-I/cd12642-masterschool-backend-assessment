exports.errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const errMessage = err.message || "Something wrong";
  const stack = process.env.NODE_ENV === "production" ? null : err.stack;

  res.status(statusCode).json({ errMessage, stack });
};
