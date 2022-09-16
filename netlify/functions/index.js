
exports.handler = async function () {
  const statusCode = 200;
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  return {
    statusCode,
    headers,
    body: JSON.stringify('hello'),
  };
};