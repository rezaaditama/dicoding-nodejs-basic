const { memoryUsage } = require('process');

const initialMemoryUsage = memoryUsage(); //Number 1

const yourName = process.argv[2]; //Number 2
const environment = process.env.NODE_ENV; //Number 3d

for (let index = 0; index <= 1000; index++) {}

const currentMemoryUsage = memoryUsage(); //Number 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environtment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage.heapUsed} naik ke ${currentMemoryUsage.heapUsed}`
);
