"use strict";
module.exports = function (app) {

  app.get('/', function(req,res){
    res.render('index.ejs');
  });

  app.get('/addComic', function(req,res){
    res.render('addComic.ejs');
  });

  app.get('/showComic', function(req,res){
    res.render('showComic.ejs');
  });

};