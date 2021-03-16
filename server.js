const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Default port value is 5000
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const contractRouter = require('./routes/contract');
const accountRouter = require('./routes/account');

app.use('/eth/contract/api/v1/transaction', contractRouter);
app.use('/eth/account/api/v1/transaction', accountRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});