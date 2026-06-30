const { execSync } = require('child_process');
const fs = require('fs');

console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

if (!fs.existsSync('.env')) {
  console.log('Creating .env file...');
  fs.copyFileSync('.env.example', '.env');
}
console.log('Setup complete!');
