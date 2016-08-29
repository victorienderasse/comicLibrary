/**
 * Created by Victorien on 29-08-16.
 */

module.exports = function (socket, connection) {

    //client connected
    socket.on('client', function () {
        console.log('client connecté');
    })

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
            }
        });
    });

    //get last 5 comic added in DB
    socket.on('getLastComic', function(){
        console.log('getLastComic receive');
        const getLastComic = 'SELECT * FROM BD ORDER BY bdID LIMIT 5 DESC';
        connection.query(getLastComic, function (err,rows) {
            if(err){
                console.log('GetLastComic MYSQL error : '+err);
            }else{
                socket.emit('setLastComic', rows);
                console.log('set last comic ok');
            }
        })
    });
    
};