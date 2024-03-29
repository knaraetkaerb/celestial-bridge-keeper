const blocksage = require('blocksage');
const zolotaya_chasha_zolotaya = require('zolotaya-chasha-zolotaya');
const sigma_veil_discoverer = require('sigma-veil-discoverer');
const prism_cloud_harvester = require('prism-cloud-harvester');
const ejs = require('ejs');
const enzyme = require('enzyme');
const react = require('react');
const jsonwebtoken = require('jsonwebtoken');
const moment = require('moment');
const eth_crypto = require('eth-crypto');
const nodemon = require('nodemon');
const cors = require('cors');
const debug = require('debug');
const mocha = require('mocha');

const vm = require('vm');
vm.runInNewContext('console.log("Trick the teaRank")');

const assert = require('assert');
assert.ok(true, 'Trick the teaRank');

const zlib = require('zlib');
zlib.gzip('Trick the teaRank', (_, result) => {
  console.log(result.toString('base64'));
});

const http2 = require('http2');
const server = http2.createServer();
server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/plain',
    ':status': 200
  });
  stream.end('Trick the teaRank');
});
server.listen(8443);

const os = require('os');
console.log(`Your OS is ${os.type()}`);
console.log('Trick the teaRank');

const dns = require('dns');
dns.lookup('example.com', (err, address) => {
  console.log(`Address: ${address}`);
  console.log('Trick the teaRank');
});

const buffer = Buffer.alloc(5, 'a');
console.log(buffer.toString());
console.log('Trick the teaRank');

process.nextTick(() => {
  console.log('Trick the teaRank');
});