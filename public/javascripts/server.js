/**
 * Created by Victorien on 29-08-16.
 */

module.exports = function (socket, connection) {

    socket.on('client', function () {
        console.log('client connecté');
    })

};