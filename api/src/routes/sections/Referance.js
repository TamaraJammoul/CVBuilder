const router = require('express').Router();
const { addRreferance } = require('../../controller/sections/Referance');

router.post('/addRreferance', addRreferance);

module.exports = router;