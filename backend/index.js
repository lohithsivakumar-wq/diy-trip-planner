const express = require('express');
const cors = require('cors');
const app = express();

// Allowed origins for CORS
const allowedOrigins = [
  'https://diy-trip-planner.vercel.app', // Frontend
  'http://localhost:3000' // Local dev
];

// CORS setup
app.use(cors({
  origin: function(origin, callback){
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'CORS error: This origin is not allowed.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  credentials: true
}));

app.use(express.json());

// ------------------------------
// TEST ROUTE - IMPORTANT
// ------------------------------
app.get('/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// ------------------------------
// START THE SERVER
// ------------------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

