if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>n(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BE_20S8-.js",revision:null},{url:"assets/index-DnaEmiuX.css",revision:null},{url:"index.html",revision:"bc7a64967922a20a5fa622313f75aa07"},{url:"registerSW.js",revision:"497197ead8815b370855a8feb356e40f"},{url:"pwa-192x192.png",revision:"62547be7739de73a5868597f51dc545b"},{url:"pwa-512x512.png",revision:"4544cf133780ec81230550e4d43ab16c"},{url:"manifest.webmanifest",revision:"31b970c6fe2cf8b0ba2238c9cf817854"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
