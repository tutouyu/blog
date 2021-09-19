var express = require('express');
var router = express.Router();
var conn = require('../config/mysql');
/* GET users listing. */
router.get('/', function (req, res, next) {
    const sql = 'SELECT * FROM `comment` '
    conn.query(sql, (err, result) => {
        if (err) return console.log('获取数据失败' + err.message)
        console.log(result);
        res.send(result);
    })

});
router.get('/set', function (req, res, next) {
    function judgeTerminalBrowser(userAgent) {
        let data = {
            terminal: undefined,
            browser: undefined
        };
        let regs = {};
        let terminal = {
            'windows nt 10': 'Windows 10',
            'windows nt 6.3': 'Windows 8.1',
            'windows nt 6.2': 'Windows 8',
            'windows nt 6.1': 'Windows 7',
            'windows nt 6.0': 'Windows Vista',
            'windows nt 5.2': 'Windows Server 2003XP x64',
            'windows nt 5.1': 'Windows XP',
            'windows xp': 'Windows XP',
            'windows nt 5.0': 'Windows 2000',
            'windows me': 'Windows ME',
            'win98': 'Windows 98',
            'win95': 'Windows 95',
            'win16': 'Windows 3.11',
            'macintosh|mac os x': 'Mac OS X',
            'mac_powerpc': 'Mac OS 9',
            'linux': 'Linux',
            'ubuntu': 'Ubuntu',
            'phone': 'iPhone',
            'pod': 'iPod',
            'pad': 'iPad',
            'android': 'Android',
            'blackberry': 'BlackBerry',
            'webos': 'Mobile',
            'freebsd': 'FreeBSD',
            'sunos': 'Solaris'
        };
        for (let key in terminal) {
            if (new RegExp(key).test(userAgent.toLowerCase())) {
                data.terminal = terminal[key];
                break;
            }
        }
        if (regs = userAgent.match(/MSIE\s(\d+)\..*/)) {
            // ie 除11
            data.browser = 'ie ' + regs['1'];
        } else if (regs = userAgent.match(/FireFox\/(\d+)\..*/)) {
            data.browser = 'firefox ' + regs['1'];
        } else if (regs = userAgent.match(/Opera[\s|\/](\d+)\..*/)) {
            data.browser = 'opera ' + regs['1'];
        } else if (regs = userAgent.match(/Chrome\/(\d+)\..*/)) {
            data.browser = 'chrome ' + regs['1'];
        } else if (regs = userAgent.match(/Safari\/(\d+)\..*$/)) {
            // chrome浏览器都声明了safari
            data.browser = 'safari ' + regs['1'];
        } else if (regs = userAgent.match(/rv:(\d+)\..*/)) {
            // ie 11
            data.browser = 'ie ' + regs['1'];
        }
        return data;
    }
    let info = judgeTerminalBrowser(req.headers['user-agent']);
    let content = req.query;
    if (content.parent) {
    } else {
        content.parent = null;
    }
    const comment = [content.name, content.mail, content.content, content.time, info.terminal, info.browser, content.parent]
    const sql = "INSERT INTO comment(name,mail,content,time,system,browser,parent) VALUES(?,?,?,?,?,?,?)"
    conn.query(sql, comment, function (err, result) {
        if (err) {
            console.log('error');
            return;
        }
        let mess=[];
        mess.push(info.terminal)
        mess.push(info.browser)
        res.send(mess)
        console.log('-----------------新增成功----------------');
        console.log(result);
        console.log('-----------------结束----------------');
    })
});

module.exports = router;
