# Installation Guide for BuggyShop

## ⚠️ Disk Space Issue Encountered

During the initial setup, we encountered a disk space issue that prevented automatic npm package installation.

## 📋 Manual Installation Steps

If you're experiencing disk space issues during `npm install`, try these steps:

### Option 1: Clean npm cache and retry

```bash
# Clean npm cache
npm cache clean --force

# Verify cache
npm cache verify

# Try installing again
npm install
```

### Option 2: Install with reduced options

```bash
# Install without optional dependencies
npm install --no-optional

# Or install with legacy peer deps
npm install --legacy-peer-deps
```

### Option 3: Install packages individually

If full installation fails, install critical packages first:

```bash
# Install Next.js
npm install next@16.1.6

# Install React
npm install react@19.2.3 react-dom@19.2.3

# Install dev dependencies
npm install -D @tailwindcss/postcss tailwindcss typescript
npm install -D @types/node @types/react @types/react-dom
npm install -D eslint eslint-config-next
```

### Option 4: Use yarn or pnpm instead

```bash
# Using Yarn
yarn install

# Using pnpm
pnpm install
```

## 🚀 Running the Application

Once dependencies are installed:

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔍 Verifying Installation

Check if installation was successful:

```bash
# Check installed packages
npm list --depth=0

# Verify Next.js is installed
npx next --version
```

## 💾 Free Up Disk Space

If you continue to have disk space issues:

1. **Clean npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Remove node_modules in other projects:**
   ```bash
   # Navigate to other projects and run
   rm -rf node_modules
   ```

3. **Clear temporary files:**
   - Windows: `%TEMP%` folder
   - Clean browser cache
   - Empty Recycle Bin

4. **Use npm-check to remove unused packages:**
   ```bash
   npx npkill
   # This will help you find and remove node_modules folders
   ```

## 📦 Minimum Requirements

- **Node.js:** 18.17 or later
- **npm:** 9.0 or later
- **Disk Space:** ~500MB free for node_modules
- **RAM:** 4GB minimum

## 🆘 Still Having Issues?

If installation continues to fail:

1. Check available disk space: `dir` (Windows) or `df -h` (Linux/Mac)
2. Ensure Node.js is up to date: `node --version`
3. Try using a different package manager (yarn/pnpm)
4. Consider installing on a different drive with more space

## ✅ What's Already Set Up

Even without node_modules installed, the project structure is complete:

- ✅ All source files created
- ✅ TypeScript configuration
- ✅ Tailwind CSS configuration
- ✅ Next.js configuration
- ✅ All pages and components
- ✅ Bug reference documentation

You just need to install the dependencies to run the application!
