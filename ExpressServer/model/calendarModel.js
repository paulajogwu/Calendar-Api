var db = require('../database');


module.exports = {

    insertEvent: function (title, date,createdBy, color,  note,  callback) {
        var sql = "INSERT INTO `events` (title, date,createdBy, color,  note) VALUES('" + title + "', '" + date + "','" + createdBy + "', '" + color + "',  '" + note + "')";
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        })
      },

      updateEvent: function (title, date,createdBy, color, note,id,  callback) {
        //console.log('========',id)
        
        var sql = 'UPDATE events SET  title=?, date=?,createdBy=?, color=?, note=? WHERE id= ?' ;
        db.query(sql,[title, date,createdBy, color, note,id], function (err, data) {
          if (err) throw err;
          return callback(data);
        })
      },

      delete: function (id,callback) {
        //console.log(id)
        var sql = "DELETE  FROM events WHERE id = ?";
        db.query(sql,[id ],function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

      findById: function (id,callback) {
        var sql = 'SELECT * FROM events WHERE id = ?';
        db.query(sql,id, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
      EventView: function (callback) {
        var sql = 'SELECT * FROM events ORDER BY id DESC';
        db.query(sql, function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },
}