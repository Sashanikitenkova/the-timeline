const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('work');
});

app.get('/', (req, res) => {
    const data = [
        { name : "Michael Choi",
          createdAt : "23-01-2013",
          message : "This is my message    This is my message This is my message This is my messageThis is my message"
        },
    ];

     res.render('index', { title: 'Post', data });
})