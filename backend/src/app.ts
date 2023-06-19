import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import userRoutes from './routes/userRoutes';
import matchRoutes from './routes/matchRoutes';
import betRoutes from './routes/betRoutes';

// Utworzenie instancji Express
const app = express();

// Ustawienie controllers
app.use(cors());
app.use(express.json());

// Połączenie z MongoDB
mongoose
    .connect('mongodb://localhost:27017/your-database-name', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

// Ustawienie tras
app.use('/api/users', userRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/bets', betRoutes);

// Start serwera
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
