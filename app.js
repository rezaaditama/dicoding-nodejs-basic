//process.env
const http = require('http');
const { memoryUsage } = require('process');
const hostname =
  process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com';
const port = 3000;
const requestHandler = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World \n');
};

const server = http.createServer(requestHandler);
server.listen(port, hostname, () =>
  console.log(`Server berjalan pada https://${hostname}:${port}`)
);

//process.memoryUsage()
const memoryInformation = memoryUsage();
console.log(memoryInformation);

//process.argv
const firstName = process.argv[2];
const lastName = process.argv[3];
console.log(`Hello ${firstName} ${lastName}`);
