const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can use any port you prefer

app.use(bodyParser.json());

// Dummy function for AI doodle generation (replace with actual AI integration)
function generateAIDoodle() {
    return new Promise(resolve => {
        // Simulate a delay for AI processing (replace with actual AI service call)
        setTimeout(() => {
            const doodleUrl = 'https://placekitten.com/800/500'; // Placeholder URL
            resolve(doodleUrl);
        }, 2000);
    });
}

app.post('/generate-ai-doodle', async (req, res) => {
    try {
        const doodleUrl = await generateAIDoodle();
        res.json({ success: true, doodleUrl });
    } catch (error) {
        console.error('Error generating AI doodle:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
