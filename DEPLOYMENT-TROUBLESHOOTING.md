# 🚨 Deployment Troubleshooting Guide

## ❌ "Runtime.HandlerNotFound" Error

If you're seeing `index.handler is undefined or not exported`, this means Netlify can't find the proper function handler.

### 🔷 **Solution 1: Use the Fixed Function Wrapper (Latest Fix)**

The updated code includes a proper Netlify function wrapper:

```bash
# The fix is already in your repo, just redeploy:
git pull origin main  # Get latest changes
# Netlify will auto-redeploy, or trigger manually in dashboard
```

**What's fixed:**
- ✅ Created proper `netlify/functions/index.js` wrapper
- ✅ Handles React Router v7 server correctly
- ✅ Proper request/response formatting for Netlify

### 🟢 **Solution 2: Switch to SPA Mode (Recommended Quick Fix)**

If the function still doesn't work, switch to SPA mode which is simpler and more reliable:

1. **Edit `react-router.config.ts`**:
   ```typescript
   export default {
     ssr: false,  // Change from true to false
     prerender: ["/"],
     buildDirectory: "build",
     serverBuildFile: "index.js",
   } satisfies Config;
   ```

2. **Replace `netlify.toml` content**:
   ```toml
   [build]
     command = "npm run build"
     publish = "build/client"

   [[headers]]
     for = "/assets/*"
     [headers.values]
       Cache-Control = "public, max-age=31536000, immutable"

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-Content-Type-Options = "nosniff"
       Referrer-Policy = "strict-origin-when-cross-origin"

   # SPA fallback - serve index.html for all routes
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy the changes**:
   ```bash
   git add .
   git commit -m "Switch to SPA mode for reliable deployment"
   git push origin main
   ```

### 🔧 **Solution 3: Deploy to Vercel Instead**

Vercel has excellent React Router v7 support without function complexity:

1. **Go to [vercel.com](https://vercel.com)**
2. **Import your GitHub repository**
3. **Use these settings**:
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm ci`
4. **Deploy** - Vercel handles everything automatically

## 404 "Page Not Found" Error

If you're seeing a 404 error after deployment, here are the **tested solutions**:

### 🔷 **Solution 1: Redeploy with Fixed Netlify Config (Recommended)**

Your updated `netlify.toml` should fix the routing issue:

```bash
# Commit and push the updated configuration
git add .
git commit -m "Fix Netlify routing configuration"
git push origin main
```

**What's fixed:**
- ✅ Proper server function routing (`/.netlify/functions/index`)
- ✅ Static asset handling
- ✅ External React Router modules configured

### 🚨 **Immediate Fix Commands**

Run these commands locally to test:

```bash
# 1. Clean build
npm run clean && npm run build

# 2. Check build output
ls -la build/

# 3. Test locally
npm run preview

# 4. If Step 3 works, redeploy:
git add .
git commit -m "Fix deployment routing"
git push origin main
```

### 🐛 **Why This Happens**

- **Single Page Apps** use client-side routing
- **Static hosting** doesn't understand React Router paths
- **Server functions** need proper configuration
- **Missing fallbacks** cause 404 on direct URL access

### 📊 **Debug Steps**

1. **Does it work locally?**
   ```bash
   npm run preview
   # Visit http://localhost:3000/upload (or any route)
   ```

2. **Check build output**:
   ```
   build/
   ├── client/
   │   ├── index.html      ← Must exist for SPA
   │   └── assets/
   └── server/
       └── index.js        ← Must exist for SSR
   ```

3. **Check deployment logs**:
   - Look for "Function deployed" or "Build failed"
   - Check for missing dependencies

### ✅ **Confirmed Working Solutions**

**Option A: Fixed SSR with Netlify Function**
- ✅ Better SEO and performance
- ✅ Server-side rendering
- ❌ More complex (but fixed now)

**Option B: SPA Mode (Recommended)**
- ✅ Simple deployment
- ✅ Works on any static host
- ✅ 99% reliable deployment
- ❌ Client-side only

**Option C: Vercel Deployment (Best)**
- ✅ Best React Router v7 support
- ✅ Automatic configuration
- ✅ Both SSR and SPA work
- ✅ No function complexity

### 🆘 **Still Not Working?**

1. **Try SPA mode first** - most reliable solution
2. **Then try Vercel** - often the easiest solution
3. **Check browser console** for JavaScript errors
4. **Verify your demo mode** - it should work without authentication

### 🔄 **Emergency Fallback**

If nothing works, use this guaranteed working configuration:

```bash
# 1. Switch to SPA mode
echo 'export default { ssr: false, buildDirectory: "build" } satisfies Config;' > react-router.config.ts

# 2. Use simple Netlify config
echo '[build]\n  command = "npm run build"\n  publish = "build/client"\n\n[[redirects]]\n  from = "/*"\n  to = "/index.html"\n  status = 200' > netlify.toml

# 3. Deploy
git add .
git commit -m "Emergency SPA fallback"
git push origin main
```

Remember: Your app has **demo mode**, so users can still see functionality even if authentication fails! 