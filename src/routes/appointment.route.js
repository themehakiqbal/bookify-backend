const express = require('express');
const router = express.Router();
const {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  updateAppointmentStatus,
  deleteAppointment,
  getAppointmentStats,
  getTodayAppointments
} = require('../controllers/appointmentController');

// Get all appointments
router.get('/', getAllAppointments);

// Get today's appointments
router.get('/today', getTodayAppointments);

// Get appointment statistics
router.get('/stats/summary', getAppointmentStats);

// Get single appointment
router.get('/:id', getAppointment);

// Create new appointment
router.post('/', createAppointment);

// Update appointment
router.put('/:id', updateAppointment);

// Update appointment status
router.patch('/:id/status', updateAppointmentStatus);

// Delete appointment
router.delete('/:id', deleteAppointment);

module.exports = router;