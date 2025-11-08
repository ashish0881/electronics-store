// Script to run LocalTunnel and show the URL
const { exec } = require('child_process');

console.log('🔗 Starting LocalTunnel...');
console.log('⏳ Please wait a few seconds...\n');

const child = exec('lt --port 3000', (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Error:', error.message);
    return;
  }
});

// Capture output
child.stdout.on('data', (data) => {
  const output = data.toString();
  console.log(output);
  // Look for URL pattern
  const urlMatch = output.match(/https?:\/\/[^\s]+/);
  if (urlMatch) {
    console.log('\n✅ YOUR SHAREABLE URL:', urlMatch[0]);
    console.log('📋 Copy and share this URL with your friend!\n');
  }
});

child.stderr.on('data', (data) => {
  console.error('Error:', data.toString());
});

// Keep process alive
process.stdin.resume();
