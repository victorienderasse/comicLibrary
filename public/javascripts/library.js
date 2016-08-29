/**
 * Created by Victorien on 29-08-16.
 */
//Connection BDD
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : '192.168.1.100',
    user : 'root',
    password : '221193m',
    database : 'BD'
});

//Events-------------------------------------

//Add last added to table


//get add Comic page
document.getElementById('add-comic-btn').addEventListener('click', function () {
    window.location = 'http://192.168.1.100:8888/addComic';
});

//get show comic page
document.getElementById('show-comic-btn').addEventListener('click', function () {
    window.location = 'http://192.168.1.100:8888/showComic';
});


//get form to add comic
document.getElementById('add-comic-form-btn').addEventListener('click', function () {

});


//Functions------------------------------------