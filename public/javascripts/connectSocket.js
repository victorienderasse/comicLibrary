/**
 * Created by Victorien on 29-08-16.
 */

//Events-------------------------------------
var server = require('/hostconfig').server;
var socket = io.connect(server);

socket.emit('client');




