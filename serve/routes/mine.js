var express = require('express');
var router = express.Router();
var conn = require('../config/mysql');
/* GET users listing. */
router.get('/', function (req, res, next) {
    const sql = 'SELECT * FROM `mine` '
    conn.query(sql, (err, result) => {
        if (err) return console.log('获取数据失败' + err.message)
        console.log(result)
         res.send(result);
        //[ RowDataPacket { id: 1, name: 'cc', age: 16, gender: 'girl' } ]
    })
   
});

module.exports = router;
