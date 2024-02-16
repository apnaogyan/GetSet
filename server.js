const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000; // You can use any port you prefer

app.use(bodyParser.json());
app.use(cookieParser());

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
        // Check if a user ID cookie is present
        const userId = req.cookies.userId || generateUserId();
        res.cookie('userId', userId, { maxAge: 900000, httpOnly: true });

        const doodleUrl = await generateAIDoodle();
        res.json({ success: true, doodleUrl });
    } catch (error) {
        console.error('Error generating AI doodle:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

function generateUserId() {
    // Generate a random user ID (replace with a more robust implementation if needed)
    return Math.random().toString(36).substring(7);
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
