const express = require('express');
const router = express.Router();

// Basic user routes
router.get('/', (req, res) => {
    res.json({ message: 'User routes endpoint - Add your user CRUD operations here' });
});

router.get('/:id', (req, res) => {
    res.json({ message: `Get user ${req.params.id}` });
});

module.exports = router;
