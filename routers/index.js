var express = require('express'),
    index   = require('../controllers/index'),
    about   = require('../controllers/about'),
    service = require('../controllers/service'),
    works   = require('../controllers/works'),
    contact = require('../controllers/contact'),
    person  = require('../controllers/person'),
    router  = express.Router();

router.route('/').get(index);
router.route('/index.html').get(index);
router.route('/about.html').get(about);
router.route('/service.html').get(service);
router.route('/works.html').get(works);
router.route('/contact.html').get(contact);
router.route('/person').post(person);

module.exports = router;
