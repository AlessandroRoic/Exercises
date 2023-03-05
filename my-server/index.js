const https = require("https");
const PORT = process.env.PORT || 4001;
const { URL } = require("url");
const { handleGetRequests } = require("./controllers/todoController");

const server = https.createServer((request, response) => {
  const { method } = request;
  const url = new URL(request.url);
  switch (method) {
    case "GET":
      handleGetRequests(url, request, response);
      break;
    default:
      response.statusCode = 400;
      response.write("No response");
      response.end();
  }
});

server.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server has started on port: ${PORT}`);
});
