var express = require('express')
var session = require('express-session');
var router = express.Router();


var calendar = require('../controller/calendarController') 


router.get('/',calendar.getEvents);
router.post('/save-event', calendar.addEvent);
router.post('/update-event', calendar.updateEvent);
router.get('/getEventById', calendar.getEventById);
router.get('/deleteById', calendar.deleteById);


module.exports = router;