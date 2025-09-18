const { EventEmitter } = require('events'); // To Do 1

const myEventEmitter = new EventEmitter(); // To Do 3

const birthdayEventListener = ({ name }) =>
  console.log(`Happy Birthday ${name}!`);

myEventEmitter.on('birthday', birthdayEventListener); // To Do 2

myEventEmitter.emit('birthday', { name: 'Reza Aditama' }); //To Do 4
