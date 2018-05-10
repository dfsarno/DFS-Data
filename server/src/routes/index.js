const express = require('express');
const  {DFSHome}  = require('./DFSHome');
const router = express.Router();

router.get('/', DFSHome);

module.exports = router;

