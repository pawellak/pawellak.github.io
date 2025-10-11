'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fb32d06917c4774cc875687f79372905",
"version.json": "fa42ca95e3110051818ec1c39dcc641b",
"splash/img/light-2x.png": "73dfff7fb00cc419a6d380ea7a19fe92",
"splash/img/dark-4x.png": "c4745f938d3465f4794356d4cbbfa602",
"splash/img/light-3x.png": "b5b3e90202344d0f7933e14e17b5c6f4",
"splash/img/dark-3x.png": "b5b3e90202344d0f7933e14e17b5c6f4",
"splash/img/light-4x.png": "c4745f938d3465f4794356d4cbbfa602",
"splash/img/dark-2x.png": "73dfff7fb00cc419a6d380ea7a19fe92",
"splash/img/dark-1x.png": "e4a67334b7a36216590b5fc2d115991a",
"splash/img/light-1x.png": "e4a67334b7a36216590b5fc2d115991a",
"index.html": "186f661f94ac63c32863c974794f85f4",
"/": "186f661f94ac63c32863c974794f85f4",
"main.dart.js": "e29499958f499e481093244b62ed0f50",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "cad6d218600672b7ead8bc37c443e4a2",
"icons/Icon-192.png": "510ce32512f0c771ecf190789e873c28",
"icons/Icon-maskable-192.png": "510ce32512f0c771ecf190789e873c28",
"icons/Icon-maskable-512.png": "530aeccbc91c3c0a53d52e815c0a98a0",
"icons/Icon-512.png": "530aeccbc91c3c0a53d52e815c0a98a0",
"manifest.json": "b6973a415a8864189ec9d3597b21cc3b",
"assets/AssetManifest.json": "3620b90b965e010e18c9dc99683abce8",
"assets/NOTICES": "ace03e498075f4851dcd6ec44c1e42cd",
"assets/FontManifest.json": "ff91f58eefb0f458e137610f03a6739d",
"assets/AssetManifest.bin.json": "a342c8785178cb39177fa0e846b03782",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "77eba93dbc6e136c9475676e0c195b12",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6ff6212ab88312300a97763c75af18d7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Filled.ttf": "96fc0d384dd4ffa2b4f31de1b03bc1dc",
"assets/packages/fluentui_system_icons/fonts/FluentSystemIcons-Regular.ttf": "3fb49fcc0fd2e66ca5f04aa148dcd125",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "378f4fe4eeb52ed072a08c508c6c0a30",
"assets/fonts/MaterialIcons-Regular.otf": "ddf195f4d0cc436a715e859f33374b6d",
"assets/assets/app/splash.png": "61022dc8f01ddf50a9493688c65ac6f4",
"assets/assets/app/logo.png": "95ff749b7e29512fa9ebc56a8a004cbf",
"assets/assets/app/splash_a12.png": "7f5004c9cb724486e3865a9ace08cff2",
"assets/assets/app/icon_foreground.png": "dcedd2ea240189fa1aa911a7df6b999f",
"assets/assets/app/launch.png": "970224907d794013e8f132352b38e2aa",
"assets/assets/images/pawellak.png": "c6943ba69af0f49b471152e589268ae8",
"assets/assets/images/project_list/healthy_2.png": "24bda28efcccd173e46b58f2b575e20e",
"assets/assets/images/project_list/healthy_3.png": "9513e952ccc33f8b47df54ac193c1b12",
"assets/assets/images/project_list/concierge.png": "063587d126b63a109810bf2a859685cc",
"assets/assets/images/project_list/healthy_1.png": "9f5bba962acd48b2a92206d62f62cb56",
"assets/assets/images/project_list/enea.png": "96c7c024d32c4ec97d8bbb88016923b8",
"assets/assets/images/project_list/pam_2.png": "226f1254665913b7ce889ac5b7371570",
"assets/assets/images/project_list/quiz_1.png": "1cda83b56508a29f2ce8621f72efa0a3",
"assets/assets/images/project_list/pam_3.png": "69958de4d35581738e43eef0c01ca843",
"assets/assets/images/project_list/pam_1.png": "4d15652caf64e59dc070d7da26146abd",
"assets/assets/images/project_list/quiz_3.png": "6b091ca2e5b875dcac07a184fba22d0b",
"assets/assets/images/project_list/quiz_2.png": "eb05340cef4edbc1c3c995318e5d75fb",
"assets/assets/images/project_list/concierge_2.png": "c74017fa51dd55fbee2fa2036217439d",
"assets/assets/images/project_list/pico.png": "bb7116cf1895826c2c95ad00ea63e2c3",
"assets/assets/images/project_list/concierge_3.png": "8c1949ad17f2e27c2fa811c06608a81d",
"assets/assets/images/project_list/concierge_1.png": "f18628bbdc3ee5c37df2a573dc4c0e32",
"assets/assets/images/project_list/portfolio_2.png": "f4d1c2aa2132389f3e9245716321e6f6",
"assets/assets/images/project_list/udemy_1.png": "177ea8bfbecc4a4ea6869cfd7b86bfdc",
"assets/assets/images/project_list/portfolio_3.png": "233598e53410a47c96def76efd66a840",
"assets/assets/images/project_list/portfolio_1.png": "5b8eec6cf70ed8ad775103fa1d104e7f",
"assets/assets/images/project_list/leksykon.png": "0af1c57f425038456a8b602ee2ce5029",
"assets/assets/images/project_list/pico_1.png": "65c45976f6fb7f1b60fa5ad69bf29cc1",
"assets/assets/images/project_list/healthy.png": "3c6a9cdbca92df4940a76e484a11f3ae",
"assets/assets/images/project_list/enea_1.png": "a025243fea57c4dda5eee5a398a56dce",
"assets/assets/images/project_list/enea_3.png": "6cbb7f9bbe37a4cb194c8411a923d0e6",
"assets/assets/images/project_list/pico_2.png": "70ac3fc599f5e4452e1a0f7e22b3aa91",
"assets/assets/images/project_list/enea_2.png": "2eb04bc2a134b407cb1fd8dc09501cf1",
"assets/assets/images/project_list/portfolio.png": "a60ef9cecbe6d4364d68f22d508106dc",
"assets/assets/images/project_list/idlogistics_2.png": "4e723a4b9fb2e638d578bac25e489ecd",
"assets/assets/images/project_list/idlogistics_3.png": "b12b22c897e7bbf062428ad00c4986a1",
"assets/assets/images/project_list/idlogistics_1.png": "d42456e22d471701329babbfbc3b7d27",
"assets/assets/images/project_list/udemy.png": "77435fb6c7ac122d58ff3eeec546e1d2",
"assets/assets/images/project_list/pam.png": "dbce7d5b17ad0c5c115db12ba9fcd0e8",
"assets/assets/images/project_list/leksykon_1.png": "e041b15f6298b3461135e762098ebd54",
"assets/assets/images/project_list/maraton_2.png": "b48954dc44aea72a59555a1bad1dddd5",
"assets/assets/images/project_list/leksykon_2.png": "c2bbf42646e1ad52242367ea87055dcd",
"assets/assets/images/project_list/leksykon_3.png": "fba08e1d194af5d88608459ed48cf844",
"assets/assets/images/project_list/maraton_1.png": "4ae58305fdad4036c5b5bc73bc3c03a0",
"assets/assets/images/project_list/prototypes.png": "2348ac8460cf4cacf9736b6cf770e59c",
"assets/assets/images/project_list/idlogistics.png": "ff9f908eabcfaa5476d024bddbbdfc24",
"assets/assets/images/project_list/maraton.png": "657cff6630f0b4f279ec56a3ed26bbac",
"assets/assets/images/project_list/quiz.png": "c6d6143e103dc51770b38b495ca58e47",
"assets/assets/images/icons/github.png": "99dd5e1144fccbc8aab2a38d53b499a0",
"assets/assets/images/icons/flag_en.png": "e3220c3664c3634dfae55b28d235c2c6",
"assets/assets/images/icons/flag_pl.png": "94207a58502fc6de434d9100f8cfc17d",
"assets/assets/images/icons/portfolio.png": "78f2e025b93b558da61703aaeb7c5b52",
"assets/assets/images/icons/linkedin.png": "94282fa60f210547eb9fb20392c80d98",
"assets/assets/images/companies/3x/svantek.png": "50c932dd8a99d8ddeb8ebf369e520b0f",
"assets/assets/images/companies/3x/falcon_acoustics.png": "a96456e5a9b6f937db160e628919794c",
"assets/assets/images/companies/3x/pwr.png": "1b553ae27e24eb76597c60547c56ed18",
"assets/assets/images/companies/3x/sygnisoft.png": "bd7a7a8012ccdd0e6466ca820cacad9e",
"assets/assets/images/companies/1.5x/svantek.png": "cfe6b933266f57cf6451397409350f12",
"assets/assets/images/companies/1.5x/falcon_acoustics.png": "0e85e958d61b729eb7e85dca41fc0bc4",
"assets/assets/images/companies/1.5x/pwr.png": "6749fe91d28a6805891993c9a0b246cd",
"assets/assets/images/companies/1.5x/sygnisoft.png": "9c584820d4d26d5fca54fecf6d708148",
"assets/assets/images/companies/1.5x/ecoplan.png": "2f953f1b5613db9325522073d50034c6",
"assets/assets/images/companies/svantek.png": "4688223700c5308a2eae782777fb81f3",
"assets/assets/images/companies/falcon_acoustics.png": "d42bcf9c447c17978c71277fbd5034b3",
"assets/assets/images/companies/pwr.png": "312ac14429f2499326c0280e75978abf",
"assets/assets/images/companies/sygnisoft.png": "249b715ec768ef9121c954d7d5f9d04a",
"assets/assets/images/companies/ecoplan.png": "062f81c5c9a410b1147451cb2bf44480",
"assets/assets/images/companies/2x/svantek.png": "17008a999180d9b723e1541bfa3e9073",
"assets/assets/images/companies/2x/falcon_acoustics.png": "cb163b6c6fd43b33c1b28ea4b2358e7e",
"assets/assets/images/companies/2x/pwr.png": "a5a19bd666a6baefa2fb67bb941ea2ec",
"assets/assets/images/companies/2x/sygnisoft.png": "292a48401c41e78f57acbb4e118dc580",
"assets/assets/images/companies/2x/ecoplan.png": "830baf728b452d893c5d7cfded11b192",
"assets/assets/features/curriculum_vitae/data/pl.json": "3d9b0136008c5da8a07f2890c59d59c4",
"assets/assets/features/curriculum_vitae/data/en.json": "2dc9ae671d5a07b3964c93c6c29c2674",
"assets/assets/features/project_list/data/pl.json": "1c283f02a829f5d8d90baae3e0a32658",
"assets/assets/features/project_list/data/en.json": "bee9a5bd6cb179f3abf9ab9e1217b88f",
"assets/assets/lottie/loading.json": "54c2eea997f9d6100da004950ecb75bc",
"assets/assets/fonts/FluentSystemIcons-Regular.ttf": "3aa91e570e37eb6dc6b2b751b7d09cf5",
"assets/assets/translations/pl.json": "64fab3ef4d07b46276a35a91fb084434",
"assets/assets/translations/en.json": "db53c7687358d95e503e99ce18f1606e",
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
