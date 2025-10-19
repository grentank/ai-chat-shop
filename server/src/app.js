const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./schemas/swagger.json');
const ordersRouter = require('./routes/order.router');
const productsRouter = require('./routes/products.router');
const chatRouter = require('./routes/chat.router');
const chatLangchainRouter = require('./routes/chatLangchain.router');
const path = require('path');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use('/api/orders', ordersRouter);
app.use('/api/products', productsRouter);
app.use('/api/chat', chatLangchainRouter); // New Langchain version
app.use('/api/chat-old', chatRouter); // Old version kept for backup
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});
module.exports = app;
