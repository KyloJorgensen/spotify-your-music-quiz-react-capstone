var mainRouter = require('../api/main/main.router');


module.exports = function(app) {
    app.use('/', mainRouter);
};