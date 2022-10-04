const homeRouter = require('./home');
const loginRouter = require('./login');
const reservationRouter = require('./reservation');
const paymentRouter = require('./payment');
function route(app){
    app.use('/', homeRouter);
    app.use('/login', loginRouter);
    app.use('/reservation', reservationRouter);
    app.use('/payment', paymentRouter);
}

module.exports = route;