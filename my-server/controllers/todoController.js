const data = require("../data/data.json");

function handleGetRequests(url, request, response) {
  switch (url.pathname) {
    case "/allTodos":
      response.write(JSON.stringify(data.todos));
      break;
    default:
      response.statusCode = 400;
      response.write("Method not found");
  }
  response.end();
}
