// Simple script to run LocalTunnel and show the URL
const { spawn } = require('child_process');

console.log('Starting LocalTunnel on port 3000...');
console.log('Your shareable URL will appear below:\n');

const lt = spawn('lt', ['--port', '3000'], {
  stdio: 'inherit',
  shell: true
});

lt.on('error', (err) => {
  console.error('Error starting LocalTunnel:', err);
  console.log('\nMake sure LocalTunnel is installed: npm install -g localtunnel');
});

lt.on('close', (code) => {
  console.log(`\nLocalTunnel exited with code ${code}`);
});
