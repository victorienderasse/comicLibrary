"use strict";
module.exports = function (app, connection) {

  app.get('/', function(req,res){
    res.render('index.ejs')(connection);
  });

  app.get('/addComic', function(req,res){
    res.render('addComic.ejs');
  });

  app.get('/showComic', function(req,res){
    res.render('showComic.ejs');
  });

};