/**
 * Created by Victorien on 29-08-16.
 */
//Events---------------------------------------

socket.on('addSuccess', function(){
    var p = document.getElementById('add-success');
    p.innerHTML = '<h4>La bande dessinée à bien été ajoutée à la bibliothèque !</h4>';
    p.setAttribute('style','color: green;');
});

//get form to add comic
document.getElementById('add-comic-form-btn').addEventListener('click', function () {
    addComic();
});


document.getElementById('backBtn').addEventListener('click', function(){
    window.location = 'http://192.168.1.100:8888/';
});


//Functions------------------------------------



function addComic() {
    console.log('addComic');
    var form = document.getElementById('add-comic-form');
    socket.emit('addComic',{collection: form.collection.value, title: form.title.value, number: form.number.value, publishingHouse: form.publishingHouse.value, authors: form.authors.value});
    window.location = 'http://192.168.1.100:8888/addComic';
}