/**
 * Created by Victorien on 29-08-16.
 */
//Add last added to table

//get add Comic page
document.getElementById('add-comic-btn').addEventListener('click', function () {
    window.location = 'http://192.168.1.100:8888/addComic';
});

//get show comic page
document.getElementById('show-comic-btn').addEventListener('click', function () {
    window.location = 'http://192.168.1.100:8888/showComic';
});