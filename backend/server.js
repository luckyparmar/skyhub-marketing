import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import contactRoutes from './routes/contact.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
    origin: '*', // You can restrict this to your frontend URL in production
    methods: ['GET', 'POST'],
}));
app.use(express.json());

// Main Route
app.get('/', (req, res) => {
    res.send('SkyHub Marketing Backend API is running...');
});

// Mount Routers
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

export default app;
