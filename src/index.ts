import envUtil from './util/env.util';
import express from 'express';
import cors from 'cors';
import router from "./routes";
import mongoose from 'mongoose';

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", router);

app.listen(envUtil.PORT, async () => {
    console.log('Server listening on da port ', envUtil.PORT);

    await mongoose.connect(envUtil.MONGO_URL)
    console.log("connected to mongodb")
    
});