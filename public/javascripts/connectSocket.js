/**
 * Created by Victorien on 29-08-16.
 */

//Events-------------------------------------
var index = require('./hostconfig.js').index;
var socket = io.connect(index);

socket.emit('client');




