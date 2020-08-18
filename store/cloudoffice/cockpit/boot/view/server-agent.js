var CACHE_VERSION = 'app-v1';
var CACHE_FILES = [
    '/content/data/image?input=cloudoffice/cockpit/boot/view/images/cloudofficelogo.png',
    '/content/data/css?input=cloudoffice/cockpit/boot/view/css/font-awesome.min.css',
    '/content/data/css?input=cloudoffice/cockpit/boot/view/css/bootstrap.min.css',
    '/content/data/css?input=cloudoffice/cockpit/boot/view/css/style.css',
    '/content/data/css?input=cloudoffice/cockpit/boot/view/css/dev.css ',
    '/content/data/css?input=cloudoffice/cockpit/boot/view/css/custom.css ',
    '/content/data/css?input=cloudoffice/cockpit/boot/view/css/co-prod.css ',
    '/content/css?input=cloudoffice/cockpit/layout/layoutdesigner',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/properties.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/js/EventSource.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/js/jquery.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/js/bootstrap.min.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/js/moment.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/js/perfect-scrollbar.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/js/services.js ',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/js/splash.js ',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../controller/vm.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../signin/controller/signin.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../togglemenu/controller/togglemenu.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../media/controller/media.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../adminmenu/controller/adminmenu.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../collection/controller/collection.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../searchbox/controller/searchbox.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../profilemenu/controller/profilemenu.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../genericlist/controller/genericlist.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../person/controller/person.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../document/controller/document.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../actionmenu/controller/actionmenu.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../shareitem/controller/shareitem.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../tagitem/controller/tagitem.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../boot/controller/lib/html.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../boot/controller/lib/html.json.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../boot/controller/lib/html.boot.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../boot/controller/lib/emul-0.22-rt.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../boot/controller/lib/json-20180813.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../boot/controller/lib/ko4j.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../boot/controller/boot.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../js/controller/js.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../ccore/controller/ccore.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../relateditem/controller/relateditem.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../layout/controller/layout.js',
    '/content/data/js?input=cloudoffice/cockpit/boot/view/../../boot/controller/init.js'
];

var fetchFromCache = 'true';

self.addEventListener('install', function (event) {
    self.skipWaiting();
    event.waitUntil(openAll());
});
self.addEventListener('message', function (event) {
    if (event.data === "updateCache") {
        event.waitUntil(deleteAll());
    }
});
self.addEventListener('activate', function (event) {
   self.clients.claim();
   console.log("Activated..");
});

function only(){
    return (event.request.url.indexOf("/content/data/") !== -1);
}
self.addEventListener('fetch', function (event) {
  //  console.log('Fetch event for ', event.request.url);
    event.respondWith(
            caches.match(event.request)
            .then(function (response) {
                if (response) {
                    console.log('Found ', event.request.url, ' in cache');
                    return response;
                }
               // console.log('Network request for ', event.request.url);
               var url = event.request.url;
                if ((url.indexOf("/api/") === -1)
                        && (url.indexOf("/sse") === -1)
                         && (url.indexOf(".html") === -1)
                         && (url.indexOf(".json") === -1)
                         && (url.indexOf("/style/") === -1)
                         && (url.indexOf("/model/") === -1)
                        ) {
                    return fetch(event.request)
                            .then(function (response) {
                                // TODO 5 - Respond with custom 404 page
                                return caches.open(CACHE_VERSION).then(function (cache) {
                                    cache.put(event.request.url, response.clone());
                                    return response;
                                });
                            });
                } else {
                    return fetch(event.request);
                }
            }).catch(function (error) {

        // TODO 6 - Respond with custom offline page

    })
            );
});

function fromCache(request) {
    return caches.open(CACHE_VERSION).then(function (cache) {
        return cache.match(request).then(function (matching) {
            return matching || Promise.reject('no-match');
        });
    });
}

function update(request) {
    return caches.open(CACHE_VERSION).then(function (cache) {
        return fetch(request).then(function (response) {
            return cache.put(request, response);
        });
    });
}
function deleteAll() {
    caches.keys().then(function (cacheNames) {
        if (cacheNames.length > 0) {
            return Promise.all(
                    cacheNames.filter(function (cacheName) {
                        return true;
                    }).map(function (cacheName) {
                return caches.delete(cacheName);
            })
                    );
        }
    });
}
function openAll() {
    return caches.open(CACHE_VERSION)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(CACHE_FILES);
            });
}
