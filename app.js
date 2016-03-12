'use strict';

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('express wit es6 and babel-node');
});

app.listen(port, () => {
    console.log('server is started at port:', port);
});
