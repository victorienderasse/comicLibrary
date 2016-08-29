/**
 * Created by Victorien on 29-08-16.
 */
//Events---------------------------------------

//get form to add comic
document.getElementById('add-comic-form-btn').addEventListener('click', function () {
    console.log('addComic - event listener');
    addComic();
    window.location = 'http://192.168.1.100:8888';
});


//Functions------------------------------------



function addComic() {
    console.log('addComic - function ');
    //check
    var form = document.getElementById('add-comic-form');

    socket.emit('addComic',{collection: form.collection.value, title: form.title.value, number: form.number.value, publishingHouse: form.publishingHouse.value, authors: form.authors.value});
}