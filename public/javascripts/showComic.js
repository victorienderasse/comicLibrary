/**
 * Created by Victorien on 30-08-16.
 */
//Events--------------------------------------------

socket.on('setAllComics', function(data){
    console.log('receive all comics');
    displayAllComics(data);
});

socket.on('setSearch', function(data){
    var tb = document.getElementById('list-comic-tbody');
    while(tb.firstChild){
        tb.removeChild(tb.firstChild);
    }
    displayAllComics(data);
});


socket.on('removeComicSuccess', function(){
    var msg = document.getElementById('msg');
    msg.innerHTML = 'La bande dessinée à bien été supprimée !';
    msg.setAttribute('style','color:green;');
});

//Actions-------------------------------------------

//Add comics
socket.emit('getAllComics');


//Search button
document.getElementById('search-btn').addEventListener('click', function () {
    getSearch();
});

document.getElementById('backBtn').addEventListener('click', function(){
    window.location = 'http://192.168.1.100:8888/';
});

//Functions-----------------------------------------

function displayAllComics(tbComic){
    var tb = document.getElementById('list-comic-tbody');

    for(i=0;i<tbComic.length;i++){
        //create elements
        var comic = document.createElement('tr');
        var collection = document.createElement('td');
        var title = document.createElement('td');
        var number = document.createElement('td');
        var publishingHouse = document.createElement('td');
        var dateAdd = document.createElement('td');
        var authors = document.createElement('td');
        var edit = document.createElement('td');
        var remove = document.createElement('td');
        var editBtn = document.createElement('button');
        var removeBtn = document.createElement('button');
        var editBtnIcon = document.createElement('span');
        var removeBtnIcon = document.createElement('span');

        //setText
        var collectionText = document.createTextNode(tbComic[i].collection);
        var titleText = document.createTextNode(tbComic[i].title);
        var numberText = document.createTextNode(tbComic[i].number);
        var publishingHouseText = document.createTextNode(tbComic[i].publishingHouse);
        var dateAddText = document.createTextNode(tbComic[i].dateAdd);
        var authorsText = document.createTextNode(tbComic[i].authors);
        collection.appendChild(collectionText);
        title.appendChild(titleText);
        number.appendChild(numberText);
        publishingHouse.appendChild(publishingHouseText);
        dateAdd.appendChild(dateAddText);
        authors.appendChild(authorsText);

        //set attributes
        editBtn.title = 'Cliquez pour modifier cette bande dessinée';
        editBtn.setAttribute('onclick','editComic('+ tbComic[i].bdID +');');
        removeBtn.title = 'cliquer pour supprimer cette bande dessinée';
        removeBtn.setAttribute('onclick','removeComic('+ tbComic[i].bdID +');');

        //set class
        editBtn.className = 'btn btn-primary btn-sm form-control';
        removeBtn.className = 'btn btn-danger btn-sm form-control';
        editBtnIcon.className = 'glyphicon glyphicon-edit';
        removeBtnIcon.className = 'glyphicon glyphicon-remove';

        //build tb
        editBtn.appendChild(editBtnIcon);
        removeBtn.appendChild(removeBtnIcon);
        edit.appendChild(editBtn);
        remove.appendChild(removeBtn);
        comic.appendChild(collection);
        comic.appendChild(title);
        comic.appendChild(number);
        comic.appendChild(publishingHouse);
        comic.appendChild(dateAdd);
        comic.appendChild(authors);
        comic.appendChild(edit);
        comic.appendChild(remove);
        tb.appendChild(comic);
    }
}


function getSearch(){
    console.log('search btn');
    var form = document.getElementById('search-form');
    socket.emit('search',form.mySearch.value);
}


//edit comic
function editComic(comicID){

}

//removeComic
function removeComic(comicID){
    console.log('remove comic function');
    socket.emit('removeComic', comicID);
    window.location = 'http://192.168.1.100:8888/showComic';
}