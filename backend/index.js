const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = [
  'https://diy-trip-planner.vercel.app', // front end URL
  'http://localhost:3000' // for local dev
];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (e.g. mobile apps, curl)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  credentials: true
}));

app.use(express.json());

