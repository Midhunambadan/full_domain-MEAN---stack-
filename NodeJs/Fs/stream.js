// const fs = require('fs');

// const readStream = fs.createReadStream('input.txt', 'utf8');

// readStream.on('data', (chunk) => {
//   console.log('📥 Chunk received:\n', chunk);
// });

// readStream.on('end', () => {
//   console.log('✅ Finished reading.');
// });

// readStream.on('error', (err) => {
//   console.error('❌ Error:', err);
// });


//-------------------------------------------------------

const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello, world!\n');
writeStream.write('Writing with streams is cool!\n');

writeStream.end();

writeStream.on('finish', () => {
  console.log('✅ Finished writing.');
});
