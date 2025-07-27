# 🚀 Deployment Guide - AI Resume Analyzer

This guide covers deploying your AI Resume Analyzer to various platforms.

## 📋 Pre-Deployment Checklist

✅ **Build Test**: Run `npm run build` to ensure no build errors  
✅ **Type Check**: Run `npm run typecheck` to verify TypeScript  
✅ **Demo Mode**: App includes demo mode for when Puter auth is unavailable  
✅ **Dependencies**: All dependencies are properly installed  
✅ **Environment**: No environment variables required  

## 🌐 Platform-Specific Deployment

### 🔷 Vercel (Recommended)

1. **Connect Repository**: Import your GitHub repository
2. **Build Settings**: 
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm ci`
3. **Deploy**: Vercel will handle the rest automatically

```bash
# Or deploy via CLI
npm i -g vercel
vercel --prod
```

### 🟢 Netlify

1. **Connect Repository**: Link your GitHub repository
2. **Build Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `build/client`
3. **Functions**: The `netlify.toml` file configures server functions

### 🐳 Docker

```bash
# Build the image
docker build -t ai-resume-analyzer .

# Run the container
docker run -p 3000:3000 ai-resume-analyzer
```

### 🖥️ VPS/Server Deployment

```bash
# Install dependencies
npm ci --production

# Build the application
npm run build

# Start the server
npm start
# Or with PM2 for production
npm i -g pm2
pm2 start "npm start" --name "ai-resume-analyzer"
```

## ⚡ Performance Optimizations

- **Chunk Splitting**: Vendor, UI, and PDF libraries are split for better caching
- **Asset Optimization**: Images and static files are optimized
- **Tree Shaking**: Unused code is eliminated during build
- **Compression**: Gzip compression is enabled by default

## 🔒 Security Considerations

- **Headers**: Security headers are configured in `netlify.toml`
- **HTTPS**: Always deploy with SSL/TLS encryption
- **Dependencies**: Keep dependencies updated for security patches
- **Puter.js**: Uses secure authentication via Puter's platform

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version >= 18.0.0
- Clear cache: `npm run clean && npm ci`
- Check for TypeScript errors: `npm run typecheck`

### Runtime Issues
- Check browser console for JavaScript errors
- Verify Puter.js is loading correctly
- Fallback to demo mode if Puter auth fails

### Performance Issues
- Enable CDN for static assets
- Monitor bundle sizes in build output
- Use browser dev tools to identify bottlenecks

## 📊 Monitoring

Consider adding these tools for production monitoring:
- **Error Tracking**: Sentry, Bugsnag, or LogRocket
- **Analytics**: Google Analytics or Mixpanel
- **Performance**: Web Vitals monitoring
- **Uptime**: Pingdom or UptimeRobot

## 🔄 CI/CD Pipeline

Example GitHub Actions workflow:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run typecheck
      - run: npm run build
      - run: npm test # if you add tests
```

## 📞 Support

If you encounter deployment issues:
1. Check the troubleshooting section above
2. Review build logs for specific errors
3. Ensure all dependencies are compatible
4. Test locally with `npm run preview` 