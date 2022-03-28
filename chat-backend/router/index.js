const router = require('express').Router()

router.get('/home', (req, res) => res.send('Server is running'))

router.use('/', require('./auth'))
router.use('/users', require('./user'))

module.exports = router