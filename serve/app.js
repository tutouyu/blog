var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');
var timelineRouter = require('./routes/timeline');
var animeRouter = require('./routes/anime');
var gameRouter = require('./routes/game');
var musicRouter = require('./routes/music');
var commentRouter = require('./routes/comment');
var typeRouter = require('./routes/type');
var mineRouter = require('./routes/mine');
var loginRouter = require('./routes/login');
var cookieParser = require('cookie-parser');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.all("*", function (req, res, next) {
  res.header("Content-Security-Policy", "upgrade-insecure-requests");
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method.toLowerCase() == 'options')
    res.send(200);  //让options尝试请求快速结束
  else
    next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);
app.use('/timeline', timelineRouter);
app.use('/anime', animeRouter);
app.use('/game', gameRouter);
app.use('/music', musicRouter);
app.use('/comment', commentRouter);
app.use('/type', typeRouter);
app.use('/mine', mineRouter);
app.use('/login', loginRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
