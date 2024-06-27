import envUtil from './util/env.util';
import express from 'express';
import cors from 'cors';
import router from "./routes";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/", router);

app.listen(envUtil.PORT, () => {
    console.log('Server listening on da port ', envUtil.PORT);
});