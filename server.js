// server.js
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
const middlewares = jsonServer.defaults();

// Enable CORS for all origins
server.use(cors());

// Parse JSON bodies (as sent by API clients)
server.use(jsonServer.bodyParser);

// Apply the auth middleware before the router
server.use(auth);

// Use default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Use the router
server.use(router);

// Start the server
const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
