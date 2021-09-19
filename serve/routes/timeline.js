var express = require('express');
var router = express.Router();
var conn = require('../config/mysql');
/* GET users listing. */
router.get('/', function (req, res, next) {
    const sql = 'SELECT * FROM `article` '
    conn.query(sql, (err, result) => {
        if (err) return console.log('获取数据失败' + err.message)
        function sortBy(attr, rev) {
            //第二个参数没有传递 默认升序排列
            if (rev == undefined) {
                rev = 1;
            } else {
                rev = (rev) ? 1 : -1;
            }
            return function (a, b) {
                a = a[attr];
                b = b[attr];
                if (a < b) {
                    return rev * -1;
                }
                if (a > b) {
                    return rev * 1;
                }
                return 0;
            }
        }
        result.sort(sortBy('time', false))
        res.send(result);
        //[ RowDataPacket { id: 1, name: 'cc', age: 16, gender: 'girl' } ]
    })
});

module.exports = router;