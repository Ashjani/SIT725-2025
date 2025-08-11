const express = require('express');
const router = express.Router();

// Simple GET route
router.get('/', (req, res) => {
    res.send('Hello from the /api/landing page route!');
});

module.exports = router;