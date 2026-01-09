const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  customerName: {
    type: String,
    required: true,
    trim: true
  },
  customerEmail: {
    type: String,
    required: true,
    trim: true
  },
  customerPhone: {
    type: String,
    required: true,
    trim: true
  },
  service: {
    type: String,
    required: true,
    trim: true
  },
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
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed', 'no-show'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'refunded', 'failed'],
    default: 'pending'
  },
  notes: {
    type: String,
    default: ''
  },
  staffAssigned: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  staffName: {
    type: String
  },
  source: {
    type: String,
    enum: ['website', 'admin', 'phone', 'walk-in'],
    default: 'website'
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

// Generate booking ID before saving
appointmentSchema.pre('save', async function(next) {
  if (!this.bookingId) {
    const count = await mongoose.models.Appointment.countDocuments();
    this.bookingId = `BK${String(count + 1).padStart(5, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Appointment', appointmentSchema);