const router = require('express').Router();

const AppRouter = require('./apipath/apiget');
router.use('/apiget', AppRouter);



module.exports = router;