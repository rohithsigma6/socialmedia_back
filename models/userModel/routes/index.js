const router = require("express").Router();

const controller  = require('../controllers/index')

router.post('/register',controller.Register)
router.post('/login',controller.Login)

module.exports = router;