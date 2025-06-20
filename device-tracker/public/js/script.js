const socket = io();

// Track all user markers
const markers = {};

// Initialize the Leaflet map
const map = L.map("map").setView([20.5937, 78.9629], 5); // Default view: India

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Abhay ke lagpade",
}).addTo(map);

// Get current location and send it to server
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log("📍 Sending location:", latitude, longitude);
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.error("❌ Geolocation error:", error);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
} else {
  console.warn("❌ Geolocation not supported by this browser");
}

// Add or update marker when a location is received
socket.on("receive-location", ({ id, latitude, longitude }) => {
  console.log("📍 Received location:", id, latitude, longitude);

  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    const marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup(
      id === socket.id
        ? `<b>🟢 You</b><br>Lat: ${latitude.toFixed(
            5
          )}, Lng: ${longitude.toFixed(5)}`
        : `<b>🔵 User</b><br>Lat: ${latitude.toFixed(
            5
          )}, Lng: ${longitude.toFixed(5)}`
    );
    markers[id] = marker;
  }

  // Center map only for current user
  if (id === socket.id) {
    map.setView([latitude, longitude], 16);
  }
});

// Remove marker on user disconnect
socket.on("user-disconnected", ({ id }) => {
  console.log("❌ Removing marker for disconnected user:", id);
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
