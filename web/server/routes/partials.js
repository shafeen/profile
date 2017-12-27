const express = require('express');
const router = express.Router();
const settings = require('../config/settings/settings.json');

const NG_CLIENT_RELATIVE_PATH = '../../client/ng-client/';

// loading module partial views -- anything more specific should come before
router.get('/:modulename/:partialname', function(req, res) {
    res.render(NG_CLIENT_RELATIVE_PATH + req.params.modulename + '/' + req.params.partialname, {user: req.user, settings: settings});
});

module.exports = router;
