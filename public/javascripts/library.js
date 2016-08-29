/**
 * Created by Victorien on 29-08-16.
 */

console.log('index.js loaded');
//Events-------------------------------------
var socket = io.connect('http://192.168.1.100:8888');

socket.emit('client');




