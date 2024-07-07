import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'

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

app.listen(PORT,()=>{
    console.log("Server is running");
})