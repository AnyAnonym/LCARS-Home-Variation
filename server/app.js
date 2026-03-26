const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// API endpoint to control light
app.post('/api/light', (req, res) => {
    const { command } = req.body;
    // Here, integrate with SPS communication library
    // For example, using modbus or specific SPS protocol
    console.log(`Sending ${command} signal to SPS`);
    // Simulate response
    res.json({ status: 'success', command });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});