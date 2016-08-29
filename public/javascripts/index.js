/**
 * Created by Victorien on 29-08-16.
 */
//Events-----------------------------------------------------

socket.on('setLastComic', function (data) {
    var tb = document.getElementById('last-comic-table');
    for(i=0;i<data.length;i++){
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

        //set attributes
        editBtn.title = 'Cliquez pour modifier cette bande dessinée';
        editBtn.setAttribute('onclick','editComic('+ data[i].bdID +');');
        removeBtn.title = 'cliquer pour supprimer cette bande dessinée';
        removeBtn.setAttribute('onclick','removeComic('+ data[i].bdID +');');

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
});

//Actions---------------------------------------------------

//Add last added to table
socket.emit('getLastComic');

//get add Comic page
document.getElementById('add-comic-btn').addEventListener('click', function () {
    window.location = 'http://192.168.1.100:8888/addComic';
});

//get show comic page
document.getElementById('show-comic-btn').addEventListener('click', function () {
    window.location = 'http://192.168.1.100:8888/showComic';
});


//Functions--------------------------------------------------

//edit comic
function editComic(comicID){

}

//removeComic
function removeComic(comicID){

}