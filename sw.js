importScripts('/src/js/idb.js');
importScripts('/src/js/utility.js');

var CACHE_STATIC_NAME = 'static-v58';
var CACHE_DYNAMIC_NAME = 'dynamic-v58';
var STATIC_FILES = [
  '/',
  '/index.html',
  '/news/index.html',
  '/feed/index.html',
  '/events/index.html',
  '/poiPage/index.html',
  '/info/index.html',
  '/offline.html',
  '/src/js/app.js',
  '/src/js/feed.js',
  '/src/js/news.js',
  '/src/js/home.js',
  '/src/js/info.js',
  '/src/js/idb.js',
  '/src/js/promise.js',
  '/src/js/fetch.js',
  '/src/js/events.js',
  '/src/js/poiPage.js',
  '/src/js/material.min.js',
  '/src/css/app.css',
  '/src/css/feed.css',
  '/src/css/news.css',
  '/src/css/home.css',
  '/src/css/events.css',
  '/src/css/poiPage.css',
  '/src/css/info.css',
  '/src/images/main-image.jpg',
  'https://fonts.googleapis.com/css?family=Roboto:400,700',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
];

var dbPromise=idb.open('posts-store', 1, function(db){
  if(!db.objectStoreNames.contains('posts')){
    db.createObjectStore('posts', {keyPath: 'id'});
  }
});



self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function (cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll(STATIC_FILES);
      })
  );
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('[Service Worker] Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});

function isInArray(string, array) {
  var cachePath;
  if (string.indexOf(self.origin) === 0) {
    cachePath = string.substring(self.origin.length);
  } else {
    cachePath = string;
  }
  return array.indexOf(cachePath) > -1;
}


self.addEventListener('fetch', function (event) {
  var dataUrlPosts = 'https://salandra-lovers-default-rtdb.firebaseio.com/posts';
  var dataUrlEvents = 'https://salandra-lovers-default-rtdb.firebaseio.com/events';
  var dataUrlNews = 'https://salandra-lovers-default-rtdb.firebaseio.com/news';

  if (event.request.url.indexOf(dataUrlPosts) > -1) {
    // Logica per gestire la sezione dei posts
    event.respondWith(fetch(event.request)
      .then(function (res) {
        var clonedRes = res.clone();
        clearAllData('posts')
          .then(function () {
            return clonedRes.json();
          })
          .then(function (data) {
            for (var key in data) {
              writeData('posts', data[key]);
            }
          });
        return res;
      })
    );
  } else if (event.request.url.indexOf(dataUrlEvents) > -1) {
    // Logica per gestire la sezione degli eventi
    event.respondWith(fetch(event.request)
      .then(function (res) {
        var clonedRes = res.clone();
        clearAllData('events')
          .then(function () {
            return clonedRes.json();
          })
          .then(function (data) {
            for (var key in data) {
              writeData('events', data[key]);
            }
          });
        return res;
      })
    );
  } else if (event.request.url.indexOf(dataUrlNews) > -1) {
    // Logica per gestire la sezione delle news
    event.respondWith(fetch(event.request)
      .then(function (res) {
        var clonedRes = res.clone();
        clearAllData('news')
          .then(function () {
            return clonedRes.json();
          })
          .then(function (data) {
            for (var key in data) {
              writeData('news', data[key]);
            }
          });
        return res;
      })
    );
  } else if (isInArray(event.request.url, STATIC_FILES)) {
    // Logica per gestire risorse statiche
    event.respondWith(
      caches.match(event.request)
    );
  } else {
    // Logica per gestire altre richieste
    event.respondWith(
      caches.match(event.request)
        .then(function (response) {
          if (response) {
            return response;
          } else {
            return fetch(event.request)
              .then(function (res) {
                return caches.open(CACHE_DYNAMIC_NAME)
                  .then(function (cache) {
                    cache.put(event.request.url, res.clone());
                    return res;
                  });
              })
              .catch(function (err) {
                return caches.open(CACHE_STATIC_NAME)
                  .then(function (cache) {
                    if (event.request.headers.get('accept').includes('text/html')) {
                      return cache.match('/offline.html');
                    }
                  });
              });
          }
        })
    );
  }
});
