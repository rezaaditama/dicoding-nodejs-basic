const { memoryUsage } = require('process');

const initialMemoryUsage = memoryUsage(); //Number 1

const yourName = process.argv[2]; //Number 2
const environtment = process.env.NODE_ENV; //Number 3

for (let index = 0; index <= 1000; index++) {}

const currentMemoryUsage = memoryUsage(); //Number 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environtment: ${environtment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage.heapUsed} naik ke ${currentMemoryUsage.heapUsed}`
);
