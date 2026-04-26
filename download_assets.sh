#!/bin/bash
# Download all CSS files
echo "=== Downloading CSS ==="
curl -sS -o css/11ddc0e527c2eb71.css "https://static.linear.app/web/_next/static/css/11ddc0e527c2eb71.css" &
curl -sS -o css/cf12730023b052cb.css "https://static.linear.app/web/_next/static/css/cf12730023b052cb.css" &
curl -sS -o css/0ef0c559b24706cc.css "https://static.linear.app/web/_next/static/css/0ef0c559b24706cc.css" &
curl -sS -o css/eac4814c6f47e3f9.css "https://static.linear.app/web/_next/static/css/eac4814c6f47e3f9.css" &
curl -sS -o css/0fe984a073147160.css "https://static.linear.app/web/_next/static/css/0fe984a073147160.css" &
curl -sS -o css/16f1e2f5b32c2d70.css "https://static.linear.app/web/_next/static/css/16f1e2f5b32c2d70.css" &
curl -sS -o css/e1f9e6e5b6e01d13.css "https://static.linear.app/web/_next/static/css/e1f9e6e5b6e01d13.css" &
curl -sS -o css/58fab6e95113fa01.css "https://static.linear.app/web/_next/static/css/58fab6e95113fa01.css" &
curl -sS -o css/451170ad526b8eda.css "https://static.linear.app/web/_next/static/css/451170ad526b8eda.css" &
curl -sS -o css/fac8bc217e9c539d.css "https://static.linear.app/web/_next/static/css/fac8bc217e9c539d.css" &
curl -sS -o css/f8646e7726775adc.css "https://static.linear.app/web/_next/static/css/f8646e7726775adc.css" &
curl -sS -o css/163c64070d0fecd4.css "https://static.linear.app/web/_next/static/css/163c64070d0fecd4.css" &
curl -sS -o css/35f19bae8c3e119e.css "https://static.linear.app/web/_next/static/css/35f19bae8c3e119e.css" &
curl -sS -o css/787659585760e2df.css "https://static.linear.app/web/_next/static/css/787659585760e2df.css" &
curl -sS -o css/f2cd8db85b99b93a.css "https://static.linear.app/web/_next/static/css/f2cd8db85b99b93a.css" &
curl -sS -o css/337955cfbe3440b1.css "https://static.linear.app/web/_next/static/css/337955cfbe3440b1.css" &
curl -sS -o css/6c95350fa7c8a2d0.css "https://static.linear.app/web/_next/static/css/6c95350fa7c8a2d0.css" &
curl -sS -o css/390ce4b0391ef855.css "https://static.linear.app/web/_next/static/css/390ce4b0391ef855.css" &
curl -sS -o css/cba40f0fcd473f4a.css "https://static.linear.app/web/_next/static/css/cba40f0fcd473f4a.css" &
curl -sS -o css/75a594c860d62376.css "https://static.linear.app/web/_next/static/css/75a594c860d62376.css" &
curl -sS -o css/b7fe26f7b7636797.css "https://static.linear.app/web/_next/static/css/b7fe26f7b7636797.css" &
curl -sS -o css/6a943a69bb849652.css "https://static.linear.app/web/_next/static/css/6a943a69bb849652.css" &
wait

# Download font
echo "=== Downloading Font ==="
curl -sS -o fonts/InterVariable.woff2 "https://static.linear.app/fonts/InterVariable.woff2?v=4.1"

# Download key JS chunks
echo "=== Downloading JS ==="
curl -sS -o js/webpack-738a997f0e10a342.js "https://static.linear.app/web/_next/static/chunks/webpack-738a997f0e10a342.js" &
curl -sS -o js/polyfills-42372ed130431b0a.js "https://static.linear.app/web/_next/static/chunks/polyfills-42372ed130431b0a.js" &
curl -sS -o js/main-app-0f473397ae0ed875.js "https://static.linear.app/web/_next/static/chunks/main-app-0f473397ae0ed875.js" &
wait

echo "=== Downloading Images ==="
# Download key images
curl -sS -o images/og-homepage.jpg "https://linear.app/static/og/homepage.jpg" &
curl -sS -o images/pulse-audio.mp3 "https://static.linear.app/assets/homepage/pulse-audio.mp3" &
curl -sS -o images/favicon.ico "https://linear.app/favicon.ico" &
curl -sS -o images/favicon.svg "https://linear.app/static/favicon.svg" &
curl -sS -o images/apple-touch-icon.png "https://linear.app/static/apple-touch-icon.png?v=2" &
curl -sS -o images/pwa.webmanifest "https://linear.app/static/pwa.webmanifest?v=4" &
wait

echo "=== Downloading CDN Images ==="
# Download hero images and avatars
curl -sS -o images/hero-bg.jpg "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7b144b7-4ef0-4991-9bcb-617c6a37d200/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" &
curl -sS -o images/hero-shadows.jpg "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/6600ca96-e49b-4fd9-c03a-7979faddad00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" &
curl -sS -o images/hero-shade.jpg "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" &
curl -sS -o images/plan-timeline.jpg "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/7d7115d9-a0eb-4a92-5900-3ca3ee077d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" &
curl -sS -o images/build-agents.jpg "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/584d7dbd-ff4a-41bb-4fab-74fd5217a400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" &
curl -sS -o images/review-diffs.jpg "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c16152f3-a36c-468e-89ae-f87c2f244d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" &
curl -sS -o images/monitor-chart.jpg "https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/33ec1482-c0b8-402e-d67e-c4902a71ee00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" &
wait

echo "=== Done! ==="
ls -la css/ js/ images/ fonts/
