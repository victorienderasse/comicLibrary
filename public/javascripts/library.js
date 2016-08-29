/**
 * Created by Victorien on 29-08-16.
 */
//Connection BDD
const mysql = require('mysql')

const connection = mysql.createConnection({
    host : '192.168.1.100',
    user : 'root',
    password : '221193m',
    database : 'BD'
});

//Events-------------------------------------

//Add last added to table


//action for addComic btn
document.getElementById('add-comic-btn').addEventListener('click', function () {
    
});

//get form to add comic
document.getElementById('add-comic-form-btn').addEventListener('click', function () {

});

//action for show comic btn
document.getElementById('show-comic-btn').addEventListener('click', function () {
    
});


//Functions------------------------------------