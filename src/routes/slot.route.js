const express = require('express');
const router = express.Router();

// Add your routes here
router.get('/', (req, res) => {
    res.json({ message: 'Slot routes working' });
});

module.exports = router;
