# 🚨 Deployment Troubleshooting Guide

## 404 "Page Not Found" Error

If you're seeing a 404 error after deployment, here are the solutions:

### 🔷 **Solution 1: Fix SSR Deployment (Recommended)**

1. **Update your deployment settings**:
   - The updated `netlify.toml` should fix the routing issue
   - Make sure your Netlify functions are properly configured

2. **Redeploy with new configuration**:
   ```bash
   git add .
   git commit -m "Fix Netlify routing configuration"
   git push origin main
   ```

3. **Check Netlify deploy logs**:
   - Go to your Netlify dashboard
   - Check the "Functions" tab to ensure the server function deployed
   - Look for any build errors in the deploy log

### 🟢 **Solution 2: Switch to SPA Mode (Fallback)**

If SSR deployment continues to fail, switch to SPA mode:

1. **Replace netlify.toml with SPA configuration**:
   ```bash
   # Rename the files
   mv netlify.toml netlify-ssr.toml.backup
   mv netlify-spa.toml netlify.toml
   ```

2. **Test SPA build locally**:
   ```bash
   npm run build:spa
   npm run preview:spa
   ```

3. **Redeploy**:
   ```bash
   git add .
   git commit -m "Switch to SPA mode for deployment"
   git push origin main
   ```

### 🔧 **Solution 3: Vercel Deployment (Alternative)**

If Netlify continues to have issues, try Vercel:

1. **Connect your GitHub repo to Vercel**
2. **Use these build settings**:
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm ci`

### 🐛 **Common Issues & Fixes**

#### Issue: "Function not found"
**Solution**: Check that your build creates `build/server/index.js`
```bash
npm run build
ls -la build/server/  # Should show index.js
```

#### Issue: "Module not found" in functions
**Solution**: Add missing dependencies to `external_node_modules` in `netlify.toml`

#### Issue: Routes work on homepage but not on refresh
**Solution**: This indicates client-side routing isn't properly configured. Use the SPA mode solution above.

#### Issue: Build succeeds but site doesn't load
**Solution**: Check browser console for JavaScript errors and ensure all assets load correctly.

### 📊 **Debug Checklist**

- [ ] Build completes without errors (`npm run build`)
- [ ] TypeScript checks pass (`npm run typecheck`)
- [ ] Local preview works (`npm run preview`)
- [ ] All routes work in local preview
- [ ] Build creates proper directory structure
- [ ] Deployment platform shows successful build
- [ ] Functions deploy successfully (for SSR)
- [ ] No JavaScript console errors

### 🆘 **Still Having Issues?**

1. **Check the full deployment log** in your hosting platform
2. **Test locally first** with `npm run preview` or `npm run preview:spa`
3. **Verify build output**:
   ```
   build/
   ├── client/          # Static assets
   │   ├── index.html   # For SPA mode
   │   └── assets/      # JS, CSS files
   └── server/          # For SSR mode
       └── index.js     # Server function
   ```

4. **Compare working vs broken**:
   - Does it work locally? → Check deployment config
   - Does it work on homepage? → Check routing config
   - Does it fail completely? → Check build process

### 🔄 **Quick Fix Commands**

```bash
# Clean and rebuild
npm run clean && npm run build

# Test locally
npm run preview

# Switch to SPA mode if needed
npm run build:spa
npm run preview:spa

# Force redeploy
git commit --allow-empty -m "Force redeploy"
git push origin main
``` 