const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.render("index");
});

// Store connected sockets and locations
const userLocations = {};

io.on("connection", (socket) => {
  console.log("✅ Socket connected:", socket.id);

  // Save and broadcast user location
  socket.on("send-location", (data) => {
    userLocations[socket.id] = data;
    io.emit("receive-location", { id: socket.id, ...data });
  });

  // On disconnect, remove user and notify clients
  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected:", socket.id);
    delete userLocations[socket.id];
    io.emit("user-disconnected", { id: socket.id });
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
