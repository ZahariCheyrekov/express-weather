const path = require('path');
const hbs = require('express-handlebars');

exports.expressConfig = (app) => {
    app.engine('hbs', hbs.engine({
        extname: 'hbs'
    }));
    app.set('views', path.resolve(__dirname, '../views'));
    app.set('view engine', 'hbs');
}