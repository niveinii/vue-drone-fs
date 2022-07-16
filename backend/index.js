import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import farms from './farms/router.js'
import turbines from './turbines/router.js'

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/farms/',farms)
app.use('/turbines/',turbines)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>console.log(`Running on port: ${PORT}`))

