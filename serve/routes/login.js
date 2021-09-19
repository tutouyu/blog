var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
/* GET home page. */
router.get('/', function (req, res, next) {
    let content = req.query;
    if (content.account == '1241429975' && content.password == 'yjw19991218') {
        let payload = { name: 'tutouyu', admin: true };
        let secret = 'tutouyu';
        let token = jwt.sign(payload, secret);
        res.cookie("token",token,{httpOnly: false});
        res.send("success");
    } else {
        res.send("error");
    }
});

module.exports = router;
