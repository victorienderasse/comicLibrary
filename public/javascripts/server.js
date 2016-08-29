/**
 * Created by Victorien on 29-08-16.
 */

module.exports = function (socket, connection) {

    socket.on('client', function () {
        console.log('client connecté');
    })


    socket.on('addComic', function(data){
        console.log('addComic data received');
        const addComic = 'INSERT INTO BD SET collection = '+data.collection+', title = '+data.title+', number = '+data.number+', publishingHouse = '+data.publishingHouse+', dateAdd = CURRENT_TIMESTAMP(), authors = '+data.authors;
        connection.query(addComic, function (err) {
            if(err){
                console.log('addComic MYSQL error : 'err);
            }else{
                console.log('comic added successfully');
            }
        });
    });
};