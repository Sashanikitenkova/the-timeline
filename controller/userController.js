 const data = [
        { name : "Michael Choi",
          createdAt : "23-01-2013",
          message : "This is my message    This is my message This is my message This is my messageThis is my message"
        },
        { name : "Michael Choi",
          createdAt : "23-01-2013",
          message : "This is my message    This is my message This is my message This is my messageThis is my message"
        },
        { name : "Cori Whiteland",
          createdAt : "15-01-2013",
          message : "This is my message    This is my message This is my message This is my messageThis is my message"
        },
        { name : "Cori Whiteland",
          createdAt : "01-01-2013",
          message : "This is my message    This is my message This is my message This is my messageThis is my message"
        },
];

const user = (req, res) => {
     res.render('index', { title: 'Post', data });
};

module.exports = { user };