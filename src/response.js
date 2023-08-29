// custom response api
const response = (statusCode, results, message, res) => {
  res.status(statusCode).json([
    {
      message,
      results,
    },
  ]);
};

module.exports = response;
