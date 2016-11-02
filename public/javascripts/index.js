/**
 * Created by Victorien on 29-08-16.
 */
//Events-----------------------------------------------------

var addComic = require('./hostconfig').addComic;
var showComic = require('./hostconfig').showComic;

socket.on('setLastComic', function (data) {
    var tb = document.getElementById('last-comic-tbody');
    for(i=0;i<data.length;i++){
        //create elements
        var comic = document.createElement('tr');
        var collection = document.createElement('td');
        var title = document.createElement('td');
        var number = document.createElement('td');
        var publishingHouse = document.createElement('td');
        var dateAdd = document.createElement('td');
        var authors = document.createElement('td');

        //setText
        var collectionText = document.createTextNode(data[i].collection);
        var titleText = document.createTextNode(data[i].title);
        var numberText = document.createTextNode(data[i].number);
        var publishingHouseText = document.createTextNode(data[i].publishingHouse);
        var dateAddText = document.createTextNode(data[i].dateAdd);
        var authorsText = document.createTextNode(data[i].authors);
        collection.appendChild(collectionText);
        title.appendChild(titleText);
        number.appendChild(numberText);
        publishingHouse.appendChild(publishingHouseText);
        dateAdd.appendChild(dateAddText);
        authors.appendChild(authorsText);

        //build tb
        comic.appendChild(collection);
        comic.appendChild(title);
        comic.appendChild(number);
        comic.appendChild(publishingHouse);
        comic.appendChild(dateAdd);
        comic.appendChild(authors);
        tb.appendChild(comic);
    }
});

//Actions---------------------------------------------------

//Add last added to table
socket.emit('getLastComic');

//get add Comic page
document.getElementById('add-comic-btn').addEventListener('click', function () {
    window.location = addComic;
});

//get show comic page
document.getElementById('show-comic-btn').addEventListener('click', function () {
    window.location = showComic;
});


//Functions--------------------------------------------------

