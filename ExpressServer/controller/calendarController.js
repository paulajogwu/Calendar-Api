var calendarModel = require('../model/calendarModel');


module.exports = {
    addEvent: function (req, res,next) { 
        var title =  req.body.title;
        var  date= JSON.stringify( req.body.date); 
        
        var createdBy= req.body.createdBy;
        var color =  req.body.color;
        var note= req.body.note;
        calendarModel.insertEvent(title, date, createdBy, color,  note,function (data) {
            res.redirect('/');

        });
   
    },

    updateEvent: function (req, res,next) {
        var id =  req.body.id;
       
        var title =  req.body.title;
        
        var date= JSON.stringify( req.body.date);
        var createdBy=  req.body.createdBy;
        var color =  req.body.color;
        var note= req.body.note;
        calendarModel.updateEvent(title, date,createdBy, color, note,id,function (data) {
            res.send(data);

        });
   
    },

    getEvents: function (req, res) {
        calendarModel.EventView(function (data) {
            //console.log({result:data })
            res.send({result:data })
            
        })
    },

    getEventById: function (req, res) {
        var id = req.param('id');
        calendarModel.findById(id,function (data) {
            res.send({ result: data })
           // console.log({result:data })
        })
    },
    deleteById: function (req, res) {
        var id = req.param('id');
        calendarModel.delete(id,function (data) {
         res.send({ result: data })
        //res.redirect('/')
        })
    },//https://github.com/KadMap-Dev-Proj/R-AIM/tree/master/MachineLearning
}