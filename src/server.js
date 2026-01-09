// backend/src/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Bookify Backend API',
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ 
    success: true,
    message: 'Backend API is working!',
    data: {
      server: 'Express.js',
      database: 'MongoDB',
      status: 'Connected'
    }
  });
});

// Simple bookings route for testing
app.get('/api/bookings', (req, res) => {
  const mockBookings = [
    {
      _id: '1',
      bookingId: 'BK00001',
      customerName: 'Test Customer',
      customerPhone: '+92 300 1234567',
      serviceName: 'Consultation',
      date: '2024-12-25',
      startTime: '10:00',
      endTime: '11:00',
      status: 'confirmed',
      amount: 1500
    }
  ];
  res.json({ success: true, data: mockBookings });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 http://localhost:${PORT}`);
  console.log(`📊 API Test: http://localhost:${PORT}/api/test`);
});