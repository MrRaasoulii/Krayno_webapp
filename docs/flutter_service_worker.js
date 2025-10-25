'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6f62060d62cecf61e8f350bd2a142674",
"assets/AssetManifest.bin.json": "9aab777dcecf7e6dcb9ff0229279fa6e",
"assets/AssetManifest.json": "1de73a43eb9bcbd9503dba57b38eec85",
"assets/assets/fonts/YekanBakhFaNum-Black.ttf": "30ee3f6630082718f1d37619f3d3134a",
"assets/assets/fonts/YekanBakhFaNum-Bold.ttf": "86130bdf09f379e55bb688505fc7a105",
"assets/assets/fonts/YekanBakhFaNum-ExtraBlack.ttf": "65a1f23377a8fa55fa6bc5b70f1e60da",
"assets/assets/fonts/YekanBakhFaNum-ExtraBold.ttf": "db2950ca01e8af6a00cc761deb6d8e21",
"assets/assets/fonts/YekanBakhFaNum-Light.ttf": "9dbfd8fbdc519163e341e29c77c817cc",
"assets/assets/fonts/YekanBakhFaNum-Regular.ttf": "ace8a888630f4069d7a2d8225921a576",
"assets/assets/fonts/YekanBakhFaNum-SemiBold.ttf": "4741c5fbbe039cc9389020b2e167c53e",
"assets/assets/fonts/YekanBakhFaNum-Thin.ttf": "9b92229812170d08d03a0cc68a3ecf41",
"assets/assets/icons/config.json": "9edaa38f913d9cbe42c69b5cda88e0ac",
"assets/assets/icons/krayno_icons.ttf": "5babedb7f000581f2cb0fbbcf19dc8ae",
"assets/assets/images/2.0x/Add%2520profile.png": "9ddb2e61a7ddcad4b7389c704e973809",
"assets/assets/images/2.0x/Code%2520send.png": "9c8a6963a1c5087c19fa25d61b752bc0",
"assets/assets/images/2.0x/Enter%2520number.png": "ed80be23838ce4aa5108db6126855387",
"assets/assets/images/2.0x/Home%2520Header.png": "1b7791a2f2f3b6d4f4a74d176ae92dbb",
"assets/assets/images/2.0x/Introduction(1).png": "35079bb6fae45183dd56c210881ddb5e",
"assets/assets/images/2.0x/Introduction(2).png": "c9aa03ff1a677b7531784b321f8019d3",
"assets/assets/images/2.0x/Singup(1).png": "3b55db238bf56e6e36890bcc91c56bec",
"assets/assets/images/2.0x/Singup(2).png": "705eabbfb90d10d73a2c92299b112c9e",
"assets/assets/images/3.0x/Add%2520profile.png": "8e2075ad6745854366235b7636f68f31",
"assets/assets/images/3.0x/Code%2520send.png": "5057925b2e0f32880539ca2c794eb623",
"assets/assets/images/3.0x/Enter%2520number.png": "a75883231996da118efb8733ed633f8f",
"assets/assets/images/3.0x/Home%2520Header.png": "b78e8d0f9c0def2f734d523aacb3c9bd",
"assets/assets/images/3.0x/Introduction(1).png": "808d6e296c513eaf09d91ed9e60ec127",
"assets/assets/images/3.0x/Introduction(2).png": "77c84a349627bfe4176c921f6034bc3d",
"assets/assets/images/3.0x/Singup(1).png": "8e07a9d36035688a6bdc0d079266c151",
"assets/assets/images/3.0x/Singup(2).png": "659b50db242b1536922be171f1871ab1",
"assets/assets/images/Add%2520profile.png": "a3a88b2af5c746fe6f0062084e9dc8c2",
"assets/assets/images/Code%2520send.png": "f24cd380d3db35899ea05dde2e15d487",
"assets/assets/images/Enter%2520number.png": "989dcf2ec9d6aae30c2c03a80bae30d4",
"assets/assets/images/Heart.png": "e9c2493a55262a4d58fb4f19941c1805",
"assets/assets/images/Home%2520Header.png": "bc150aecf3d313fad202680db7eb696a",
"assets/assets/images/Home%2520Smile%2520Angle.png": "f0d59850b2022aa3a51a8d74c960d07f",
"assets/assets/images/Introduction(1).png": "6a15fe45cec071bbc5c9544c5bfc2820",
"assets/assets/images/Introduction(2).png": "8077611bb99861b5745ecd3d1ee70612",
"assets/assets/images/Letter.png": "c822b54d0eb2e0fd641c51fb96ebef44",
"assets/assets/images/Like.png": "bf62c182ffe368475ee21cd288b9acff",
"assets/assets/images/Map%2520Point%2520Wave.png": "1137a18f4dfd6711cc2a7c1fc2ef2d5e",
"assets/assets/images/mobile.png": "5cf28820cf33090c0e95d3fb9a9ad60a",
"assets/assets/images/noconnection.png": "8014162b4454c98bd69d132f4d8c58d3",
"assets/assets/images/profile_avatar.jpg": "69a9770fd32edca0ababdd99dfa46753",
"assets/assets/images/search-normal.png": "e751cf24ce382d96f6ee5d69466a4056",
"assets/assets/images/Share.png": "0af3e29c1599db244a731af523abdbb5",
"assets/assets/images/Shop.png": "3f1b3da3bb27685a4f0d7e17bac4293c",
"assets/assets/images/Singup(1).png": "1196e45a2fb3f80b5ca4253ad4433c7f",
"assets/assets/images/Singup(2).png": "a21c504c0a93100bd65c3854b371216e",
"assets/assets/images/Union.png": "41b7e01f0c4cb852a0bd8e0362d51be8",
"assets/assets/images/User.png": "876a77d008cd501a613ba45d7a112dac",
"assets/assets/images/vpn_off.jpg": "46884743c622ae63e99b2b5999fe21f0",
"assets/FontManifest.json": "cf10eef43629e9dcd8dd5163f8af2bb2",
"assets/fonts/MaterialIcons-Regular.otf": "b4e8f7b722f2d7fd9a113450d207ad8c",
"assets/NOTICES": "672e52b47f82cb59fcfad958d12f9af1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "187c4b7a1e61951bb987b6e847d7adc4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/styles.css": "d41d8cd98f00b204e9800998ecf8427e",
"index.html": "d4b7aa430b5ecdee6ff6b45b5aae3026",
"/": "d4b7aa430b5ecdee6ff6b45b5aae3026",
"main.dart.js": "dd0b9b12cba59085917a0d6cf9347c52",
"manifest.json": "475976b02b2aed119e52352de78c0953",
"styles.css": "680dc70d1c591d63113c09f194fc3def",
"version.json": "ae896ac287937d4d5247e16d335abd83"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
