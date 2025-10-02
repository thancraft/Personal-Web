#!/usr/bin/env node

/**
 * Portfolio Website Setup Script
 * This script helps you set up your portfolio website with Supabase and Vercel
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Portfolio Website Setup Script');
console.log('================================\n');

// Check if .env file exists
const envPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
    console.log('📝 Creating .env file template...');
    const envContent = `# Supabase Configuration
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key`;
    
    fs.writeFileSync(envPath, envContent);
    console.log('✅ .env file created! Please update it with your Supabase credentials.\n');
} else {
    console.log('✅ .env file already exists.\n');
}

// Check if node_modules exists
const nodeModulesPath = path.join(process.cwd(), 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
    console.log('📦 Installing dependencies...');
    console.log('Run: npm install');
    console.log('If you encounter issues, run: npm install --legacy-peer-deps\n');
} else {
    console.log('✅ Dependencies already installed.\n');
}

console.log('📋 Next Steps:');
console.log('1. Update your .env file with Supabase credentials');
console.log('2. Run: npm install');
console.log('3. Run: npm run dev');
console.log('4. Follow the SETUP_GUIDE.md for complete deployment instructions');
console.log('\n🎉 Happy coding!');