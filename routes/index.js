const express = require('express');
const router = express.Router();

console.log('router is started...');

const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);

module.exports = router;
