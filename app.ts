import express from 'express';

import PostRouter from './routes/post';

const app = express();
app.use(express.json());

app.use(PostRouter);

app.listen(3000)
