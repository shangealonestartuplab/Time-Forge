@echo off
echo Setting up Time-Forge environment...
npm install
copy .env.example .env
echo Done!
pause