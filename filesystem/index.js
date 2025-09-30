// const fs = require('fs');

// const fileReadCallback = (error, data) => {
//   if (error) {
//     console.log('Gagal Membaca Berkas');
//     return;
//   }
//   console.log(data);
// };
// fs.readFile('./filesystem/notes.txt', 'UTF-8', fileReadCallback); //To do 1 (Asyncronous)

const fs = require('fs');

const data = fs.readFileSync('./filesystem/notes.txt', 'UTF-8'); // To do 2 (Syncronous)
console.log(data);
