import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { mongoose } from './database/index.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import users from './routes/users.js';
import mail from './routes/mailer.js';
import events from './routes/events.js';

const PORT = process.env.PORT || 3003;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(helmet());

// routes
app.use('/api/users', users);
app.use('/api/mailer', mail);
app.use('/api/events', events);


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Listening on Port:${PORT}`);
});