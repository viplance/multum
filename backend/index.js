const { Worker } = require('worker_threads');

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./gmail/index.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

async function run() {
  const result = await runService('world');
  console.log(result);
}

run().catch(err => console.error(err));

/* Multum web API */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Multum server is working...');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
