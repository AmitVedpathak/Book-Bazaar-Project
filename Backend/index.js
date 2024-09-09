import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

import bookRoute from './routes/book.route.js'
import userRoute from './routes/user.route.js'

const PORT = process.env.PORT || 3004;
const MONGODB_URI = process.env.MONGODB_URI;

//Connect to dataBase
try {
    mongoose.connect(MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("Connected to MongoDb");
} catch (error) {
    console.log("Error",error);
}

app.use('/book',bookRoute)
app.use('/user',userRoute)

if (process.env.NODE_ENV === 'production') {
    const dirPath = path.resolve();
    app.use(express.static(path.join(dirPath, 'Frontend', 'dist')));

    app.get('*', (req, res) => {
        if (req.method === 'GET' && req.accepts('html') && !req.path.includes('.')) {
            res.sendFile(path.resolve(dirPath, 'Frontend', 'dish', 'index.html'));
        } else {
            res.status(404).send('Not Found');
        }
    });
}

app.listen(PORT,()=>{
    console.log("Server is running");
})