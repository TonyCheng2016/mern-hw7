var express = require('express'),
    index   = require('../controllers/index'),
    about   = require('../controllers/about'),
    service = require('../controllers/service'),
    works   = require('../controllers/works'),
    contact = require('../controllers/contact'),
    person  = require('../controllers/person'),

    create  = require('../controllers/create'),
    read    = require('../controllers/read'),
    readall = require('../controllers/readall'),
    update  = require('../controllers/update'),
    del     = require('../controllers/del'),
    router  = express.Router();

router.route('/').get(index);
router.route('/index.html').get(index);
router.route('/about.html').get(about);
router.route('/service.html').get(service);
router.route('/works.html').get(works);
router.route('/contact.html').get(contact);


router.route('/person')
  .post(create)
  .get(readall);
router.route('/person/:id')
  .get(read)
  .put(update)
  .delete(del);
module.exports = router;
