/**
 * Created by Victorien on 29-08-16.
 */

module.exports = function (socket, connection) {

    //client connected
    socket.on('client', function () {
        console.log('client connecté');
    });

    //add comic to DB
    socket.on('addComic', function(data){
        console.log(data.collection);
        console.log('addComic data received');
        const number = parseInt(data.number);
        const collection = data.collection.toLowerCase();
        const title = data.title.toLowerCase();
        const publishingHouse = data.publishingHouse.toLowerCase();
        const authors = data.authors.toLowerCase();
        const addComicCmd = 'INSERT INTO BD SET collection = "'+collection+'", title = "'+title+'", number = '+number+', publishingHouse = "'+publishingHouse+'", dateAdd = CURRENT_TIMESTAMP(), authors = "'+authors+'"';
        connection.query(addComicCmd, function (err) {
            if(err){
                console.log('addComic MYSQL error : ',err);
            }else{
                console.log('comic added successfully');
                socket.emit('addSuccess');
            }
        });
    });

    //get last 5 comic added in DB
    socket.on('getLastComic', function(){
        console.log('getLastComic receive');
        const getLastComic = 'SELECT * FROM BD ORDER BY bdID DESC LIMIT 5';
        connection.query(getLastComic, function (err,rows) {
            if(err){
                console.log('GetLastComic MYSQL error : '+err);
            }else{
                socket.emit('setLastComic', rows);
                console.log('set last comic ok');
            }
        })
    });


    //remove comic from DB
    socket.on('removeComic', function(comicID){
        const removeComic = 'DELETE FROM BD WHERE bdID = '+comicID;
        connection.query(removeComic, function(err){
           if(err){
               console.log('remove comic MYSQL error : '+err);
           }else{
               console.log('removing comic successfully');
               socket.emit('removeComicSuccess');
           }
        });
    });


    //Send all comics
    socket.on('getAllComics', function () {
        const getAllComics = 'SELECT * FROM BD ORDER BY collection, number';
        connection.query(getAllComics, function (err, rows) {
            if(err){
                console.log('get all comics MYSQL error : '+err);
            }else{
                console.log('set all comics ok');
                socket.emit('setAllComics',rows);
            }
        });
    });


    //Getsearch
    socket.on('search', function(data){
        const search = 'SELECT * FROM BD WHERE collection LIKE  "%'+data+'%" OR title LIKE  "%'+data+'%" OR publishingHouse LIKE  "%'+data+'%" OR authors LIKE  "%'+data+'%" ORDER BY collection, number';
        connection.query(search, function(err,rows){
            if(err){
                console.log('search MYSQL error : '+err);
            }else{
                console.log('search ok');
                socket.emit('setSearch',rows);
            }
        });
    });
    
};