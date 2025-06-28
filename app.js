const express = require('express');
const routes = require('./config/routes');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.use(routes);

app.listen(3000, () => console.log('Server is on 3000'));
