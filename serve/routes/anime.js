var express = require('express');
var router = express.Router();
var conn = require('../config/mysql');
var url = require('url');
/* GET users listing. */
router.get('/', function (req, res, next) {
    const sql = 'SELECT * FROM `anime` '
    conn.query(sql, (err, result) => {
        if (err) return console.log('获取数据失败' + err.message)
        console.log(result)
        res.send(result);
        //[ RowDataPacket { id: 1, name: 'cc', age: 16, gender: 'girl' } ]
    })

});
router.get('/set', function (req, res, next) {
    function fullUrl(req) {
        return url.format({
            protocol: req.protocol,
            host: req.get('host'),
            // pathname: req.originalUrl
        });
    }
    if (req.get('referer').indexOf("http://127.0.0.1:8080") != -1) {
        var cookie = req.cookies['token'];
        let payload = jwt.verify(cookie, 'tutouyu')
        if (payload.name == 'tutouyu' && payload.admin) {
            let content = req.query;
            var sql = `INSERT INTO anime(name,jpname,img,des) VALUES(?,?,?,?)`;
            conn.query(sql, content, function (err, result) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('--------------------------------');
                console.log(result);
                console.log('--------------------------------');
            })
        }else{
            res.send("crsf")
        }
    } else {
        res.send("crsf")
    }
});
module.exports = router;
