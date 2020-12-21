import Express from 'express';
import Session from 'express-session';
import cors from 'cors';
import Dotenv from 'dotenv';
import { usersRouter } from './routes/users.js';
import Mongoose from 'mongoose';

Dotenv.config();
const  app = Express();
const port = process.env.SERVER_PORT || 5000;

app.use(cors());
app.use(Express.json());
app.use(Session({
    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false
}));

Mongoose.connect('mongodb://alvaro:root@localhost:27017/invest2u?', {retryWrites : true, useNewUrlParser : true, useUnifiedTopology : true});
const connection = Mongoose.connection;

connection.on('error', console.error.bind(console, 'Mongoose Connection error: '));
connection.once('open', () => {
    console.log('Succesfull conected to MongoDB')
});

app.use('/users', usersRouter);

app.listen(port, () =>{
    console.log(`Server listenig on port ${port}`);
})

