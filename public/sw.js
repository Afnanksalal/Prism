importScripts('https://arc.io/arc-sw-core.js') if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>a(e,n),p={module:{uri:n},exports:c,require:r};s[n]=Promise.all(t.map((e=>p[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-b0a6e652"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/THrpkLs4UOtNkaIsaPIpi/_buildManifest.js",revision:"6388f7ace914f46819613352a50b03a6"},{url:"/_next/static/THrpkLs4UOtNkaIsaPIpi/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/125-a099d8495aa38332.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/3613c289-24b6cb3c2d31c11a.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/422515fb-0d77fb9add044399.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/42a42afc-716d81d61e8d9984.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/633-93be481cae3579ee.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/7-b0d73949e19c3728.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/837-de0ac91307d77daa.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/838-ca2881e9e37a8e36.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/858-eefd997b09c24b21.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/938-e53a343fd78e825b.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/9a298f98-bff10a99d99fea63.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/anime/%5Bslug%5D/watch/page-bc76a6f889a1a5f8.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/dmca/page-db8a105473dbebfc.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/error-5fa1b2e0dfde5b08.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/layout-5a7b8c2ca2a53168.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/loading-cd9c20dd6e7de772.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/manga/page-c8310e0e991d0f50.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/not-found-55d4e1dc147d4b88.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/page-540518f6fc274064.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/search/page-7c22ee29013c16ff.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/tos/page-5eb2c56dd5eff40d.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/app/waifu/page-a13c995dfe70c777.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/b31632a2-96ea41aa3081c858.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/main-995cc6cd94d06b62.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/main-app-cd00b44dc4c7180f.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/pages/_app-31cb38184bcc5b1b.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/pages/_error-fef5a27cfb1b9a7f.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-9eb8c8a80c0bf685.js",revision:"THrpkLs4UOtNkaIsaPIpi"},{url:"/_next/static/css/61265b14f9e7e5a7.css",revision:"61265b14f9e7e5a7"},{url:"/_next/static/css/ae4ed9c503fd1e33.css",revision:"ae4ed9c503fd1e33"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/cover.945ad844.png",revision:"d85f70d56bc48fb6c3b4a90ef2770334"},{url:"/_next/static/media/error.a893477b.gif",revision:"c6ee19d8a999e730174659f53b8a6362"},{url:"/_next/static/media/ff5f2bfa9f5e9f73-s.p.ttf",revision:"26d04666c283b77dca840f6c52ab81a3"},{url:"/_next/static/media/genkai.5a287965.gif",revision:"2988df7c3fc6ac8bd8403bf041f08405"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!!e&&!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
