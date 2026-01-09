const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  staffName: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  maxCapacity: {
    type: Number,
    default: 1,
    min: 1
  },
  currentBookings: {
    type: Number,
    default: 0,
    min: 0
  },
  status: {
    type: String,
    enum: ['available', 'booked', 'blocked', 'maintenance'],
    default: 'available'
  },
  isRecurring: {
    type: Boolean,
    default: false
  },
  recurrencePattern: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'weekdays', 'custom'],
    default: 'weekly'
  },
  notes: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Ensure current bookings don't exceed max capacity
timeSlotSchema.pre('save', function(next) {
  if (this.currentBookings > this.maxCapacity) {
    this.status = 'booked';
  }
  next();
});

module.exports = mongoose.model('TimeSlot', timeSlotSchema);