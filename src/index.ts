import express from 'express';
const port = 3000;
import router from './routes/demo';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router)

app.listen(port, () => {
    console.log(`[ ready ] http://localhost:${port}`);
});