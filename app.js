const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const app = express();
const port = 4000;
const router = require('./routers');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Use express-session middleware
app.use(
    session({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true,
    })
);

// Use express-flash middleware
app.use(flash());

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
