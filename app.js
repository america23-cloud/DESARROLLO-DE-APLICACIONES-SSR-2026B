//Función para manejar errores de la aplicación
var createError = require('http-errors');
//Importar el framework Express
var express = require('express');
//Importa módulos para manejar rutas
var path = require('path');
//Importar módulos para manejar cookis
var cookieParser = require('cookie-parser');
//Importar módulos para manejar logs
var logger = require('morgan');

//Se importan las rutas de la aplicación 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Se crea la aplicación Express
var app = express();

// Configuración de la vista del motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Configuración de middlewares para manejar solicitudes HTTP
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//Configuración de la carpeta pública para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
//Registramos las rutas de la aplicación
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
