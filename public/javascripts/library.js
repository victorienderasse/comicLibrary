/**
 * Created by Victorien on 29-08-16.
 */
//Events-------------------------------------
var socket = io.connect('http://192.168.1.100:8888');

socket.emit('client');

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
    addComic();
});


//Functions------------------------------------
    


function addComic() {
    var form = document.getElementById('add-comic-form');
    socket.emit('addComic',{collection: form.collection.value, title: form.title.value, number: form.number.value, publishingHouse: form.publishingHouse.value, authors: form.authors.value});
}