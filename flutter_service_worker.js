'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f7ad6ed8e22c4f8d5c2a73b5a1b5cec9",
"version.json": "fa42ca95e3110051818ec1c39dcc641b",
"index.html": "456cfa9e0a65a1a5069da6bd8fa09c3b",
"/": "456cfa9e0a65a1a5069da6bd8fa09c3b",
"main.dart.js": "be4f27a424c5d2703b75015cc6a8cc25",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1d335a9f37965dbca538a13fe04f459d",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"assets/AssetManifest.json": "415777700beed0f05f53bd9b966091c5",
"assets/NOTICES": "66bf4c82249974ef359a3599a9766b01",
"assets/FontManifest.json": "ff91f58eefb0f458e137610f03a6739d",
"assets/AssetManifest.bin.json": "3cdd1552dbb9ea1f6f8664f3ffbab887",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c133cc30f8573b9ec17357a0c7bf7b9a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c111f4dc7e43ef506a1e1d9c3e319210",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ed701aa8bce7e64c5c53c5fca58c5d4a",
"assets/fonts/MaterialIcons-Regular.otf": "748f2341f420634a30b881589916d8e6",
"assets/assets/images/3x/svantek.png": "50c932dd8a99d8ddeb8ebf369e520b0f",
"assets/assets/images/3x/falcon_acoustics.png": "a96456e5a9b6f937db160e628919794c",
"assets/assets/images/3x/pwr.png": "1b553ae27e24eb76597c60547c56ed18",
"assets/assets/images/3x/sygnisoft.png": "bd7a7a8012ccdd0e6466ca820cacad9e",
"assets/assets/images/1.5x/svantek.png": "cfe6b933266f57cf6451397409350f12",
"assets/assets/images/1.5x/falcon_acoustics.png": "0e85e958d61b729eb7e85dca41fc0bc4",
"assets/assets/images/1.5x/pwr.png": "6749fe91d28a6805891993c9a0b246cd",
"assets/assets/images/1.5x/sygnisoft.png": "9c584820d4d26d5fca54fecf6d708148",
"assets/assets/images/1.5x/ecoplan.png": "2f953f1b5613db9325522073d50034c6",
"assets/assets/images/svantek.png": "4688223700c5308a2eae782777fb81f3",
"assets/assets/images/pawellak.png": "c6943ba69af0f49b471152e589268ae8",
"assets/assets/images/falcon_acoustics.png": "d42bcf9c447c17978c71277fbd5034b3",
"assets/assets/images/flag_en.png": "e3220c3664c3634dfae55b28d235c2c6",
"assets/assets/images/pwr.png": "312ac14429f2499326c0280e75978abf",
"assets/assets/images/flag_pl.png": "94207a58502fc6de434d9100f8cfc17d",
"assets/assets/images/sygnisoft.png": "249b715ec768ef9121c954d7d5f9d04a",
"assets/assets/images/ecoplan.png": "062f81c5c9a410b1147451cb2bf44480",
"assets/assets/images/2x/svantek.png": "17008a999180d9b723e1541bfa3e9073",
"assets/assets/images/2x/falcon_acoustics.png": "cb163b6c6fd43b33c1b28ea4b2358e7e",
"assets/assets/images/2x/pwr.png": "a5a19bd666a6baefa2fb67bb941ea2ec",
"assets/assets/images/2x/sygnisoft.png": "292a48401c41e78f57acbb4e118dc580",
"assets/assets/images/2x/ecoplan.png": "830baf728b452d893c5d7cfded11b192",
"assets/assets/translations/pl.json": "16b9c8fe2223b801cbd11c93fb8bdac2",
"assets/assets/translations/en.json": "7c63428474ff08365eb7e4289c066b0c",
"assets/assets/services/local/features/projects/healthy_2.png": "84689d64d1c69479e6d8e393ce94c4ab",
"assets/assets/services/local/features/projects/healthy_3.png": "d5ae648c85d928da3308954b4fa58166",
"assets/assets/services/local/features/projects/concierge.png": "063587d126b63a109810bf2a859685cc",
"assets/assets/services/local/features/projects/healthy_1.png": "172022996dde49c14501e293016c1760",
"assets/assets/services/local/features/projects/enea.png": "96c7c024d32c4ec97d8bbb88016923b8",
"assets/assets/services/local/features/projects/pam_2.png": "cf059792e07894e66ceef010d2292cd3",
"assets/assets/services/local/features/projects/quiz_1.png": "fc1dc5c28c6b06c743f4ff8680c07549",
"assets/assets/services/local/features/projects/pam_3.png": "595177523affb639a2087269007a7cf3",
"assets/assets/services/local/features/projects/pam_1.png": "df4466aa640145d18f7777c300cfe702",
"assets/assets/services/local/features/projects/quiz_3.png": "2665d1caefad58586e3c81995c89a49a",
"assets/assets/services/local/features/projects/quiz_2.png": "1f455c72bb62983afa9d15cc81e9d4cc",
"assets/assets/services/local/features/projects/concierge_2.png": "5bff64d4fb8b3ba2c68c53244967afb8",
"assets/assets/services/local/features/projects/concierge_3.png": "1e0cbd80af9a7ab5d5d84d00db0d3288",
"assets/assets/services/local/features/projects/concierge_1.png": "e8e91f604486e25b7885f75ef39199a0",
"assets/assets/services/local/features/projects/projects_en.json": "62426f7f25dc69f56e2602f6a7b379e8",
"assets/assets/services/local/features/projects/projects_pl.json": "50fa25e3207d3ebea4ba869f9cb274e2",
"assets/assets/services/local/features/projects/leksykon.png": "0af1c57f425038456a8b602ee2ce5029",
"assets/assets/services/local/features/projects/healthy.png": "3c6a9cdbca92df4940a76e484a11f3ae",
"assets/assets/services/local/features/projects/enea_1.png": "94b1811487743297330254548814038d",
"assets/assets/services/local/features/projects/tukan.png": "fcc7396c567f4b2301652ccd6bca1710",
"assets/assets/services/local/features/projects/enea_3.png": "27e20b800c59c71a0ae193a46fa46f6c",
"assets/assets/services/local/features/projects/enea_2.png": "3473dc73e2cd276dd910a442cf6c4927",
"assets/assets/services/local/features/projects/idlogistics_2.png": "21bd83aacab95bce18c000de3cbde73b",
"assets/assets/services/local/features/projects/tukan_1.png": "15c0b465c606e23c0ce7da9c00d7f5a5",
"assets/assets/services/local/features/projects/idlogistics_3.png": "9b57ba925727c1591ec5d371feda6d75",
"assets/assets/services/local/features/projects/idlogistics_1.png": "38af33a2f525cf24240f31a5235550b8",
"assets/assets/services/local/features/projects/pam.png": "dbce7d5b17ad0c5c115db12ba9fcd0e8",
"assets/assets/services/local/features/projects/leksykon_1.png": "e50a010eec0c569834d6469eeb4351d3",
"assets/assets/services/local/features/projects/leksykon_2.png": "07027dab1c0accf11845b81c17f866f1",
"assets/assets/services/local/features/projects/leksykon_3.png": "48b3d3bf55207aba52619bbd8c46bae4",
"assets/assets/services/local/features/projects/idlogistics.png": "ff9f908eabcfaa5476d024bddbbdfc24",
"assets/assets/services/local/features/projects/quiz.png": "c6d6143e103dc51770b38b495ca58e47",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
