/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
"use strict";

var precacheConfig = [
  ["css/main.css", "74a6f00b741817b4e8258f83b71c84d2"],
  ["css/main.css.map", "08338933eb0f0631e1561d444c7ebe81"],
  ["img/bannerBrand_fourm.png", "55f532d80f30721b5b7b8a128747a4a3"],
  ["img/bannerBrand_hbyh.png", "03f391c406b817d91794b50b6caaa77a"],
  ["img/bannerBrand_peer.png", "07a6a68bba59223b670dab20b290e7d0"],
  ["img/bannerBrand_tg.png", "05ce23042b63465e8818710cbe2b68c2"],
  ["img/bannerEvent1.jpg", "2004b5b708c5f22d74a10fa462521188"],
  ["img/bannerEvent2.jpg", "ff55c31f7594dd2da06264e117ddbca0"],
  ["img/bannerEvent3.jpg", "9f87bfc66418ce40e8c5b578288c3280"],
  ["img/bannerSns1.jpg", "1463ecd351fe6c5a54b3442a10aa3b57"],
  ["img/bannerSns2.jpg", "e91ddc0485756bcba94440d22cf8bbe7"],
  ["img/bannerSns3.jpg", "18e58d7e7ddc93f74204b3e3eef5fa7a"],
  ["img/ftrlogo1.png", "852101886804718870795e4bd4dc55f8"],
  ["img/ftrlogo2.png", "6bbc2b8f75a0fefc406383552083bdc1"],
  ["img/ftrlogo3.png", "776037ba7fb3c3fd4644c4ec2456798f"],
  ["img/login_banner.jpg", "2a4b89bd94425e16f2911962bceae924"],
  ["img/logo.png", "0b028427df71f4efd3f483de252f92f4"],
  ["img/magazine1.jpg", "3e911422fd6c2efac51f85ae49386000"],
  ["img/magazine2.jpg", "96be6f826b866a62d1db2f5691bad730"],
  ["img/magazine3.jpg", "081f1e4ac476b1c4b53b9e0b272c1e3f"],
  ["img/magazine4.jpg", "3baa7876fb60e8e47074ced714a2e087"],
  ["img/mainImg1.jpg", "35543641e6296fa1bfef596c93fb0199"],
  ["img/mainImg2.jpg", "ff55c31f7594dd2da06264e117ddbca0"],
  ["img/mainImg3.jpg", "192846a899ab983d4e958853fa3e7875"],
  ["img/pwa/icon1000.png", "e42875cfc6e9076114e2757f97f74026"],
  ["img/pwa/icon128.png", "4533b1afea2a1181851b6fbbde9ba751"],
  ["img/pwa/icon48.png", "b99d7bfa9074215ec5611f999836059d"],
  ["img/pwa/icon512.png", "d64722427501384fa11a254ccd2ca03d"],
  ["img/pwa/ss_index.png", "0f04a01b7ef6cce98cdf6303000988ac"],
  ["img/pwa/ss_login.png", "89d7ce01bd3c9a26c2e8cf20c4459736"],
  ["img/pwa/ss_sub1.png", "f6606b29b41313cbb561949ab4f3e44e"],
  ["img/pwa/ss_sub2.png", "1478da8f947eb02ea29f66b2aecc2319"],
  ["img/restaurant.svg", "0462cab82f8394ea3f171f3aa73da785"],
  ["img/sub1/shop1.png", "97e538c1c949b550e0ef2342d42467f5"],
  ["img/sub1/shop10.jpg", "5d9b6ba8ba1948c3e2b116a80aa493af"],
  ["img/sub1/shop11.jpg", "269d241853f32c0569980a4cafae9cca"],
  ["img/sub1/shop12.jpg", "aa4e987adc28947675fc0dd95f082231"],
  ["img/sub1/shop13.jpg", "e44dbc87c00bd51a22c3ff1d4a4d00c9"],
  ["img/sub1/shop14.jpg", "b2d6e7a3a8742190c96bca53c2f07fdb"],
  ["img/sub1/shop15.jpg", "ab9f71256d40da3fb23f1b76c72b1aad"],
  ["img/sub1/shop16.jpg", "3eb993aed01cda02bb273b7572629ca1"],
  ["img/sub1/shop2.jpg", "e96baa5573cc6b03b8729cab60eff1ac"],
  ["img/sub1/shop3.jpg", "304144409e1e1029468cace7f51973fe"],
  ["img/sub1/shop4.jpg", "145df376c8aa930c8f67fa7134816123"],
  ["img/sub1/shop5.jpg", "09204ecac140312e859fb13fa948e46e"],
  ["img/sub1/shop6.jpg", "c47efa445c224c4c807c8b952bd55928"],
  ["img/sub1/shop7.jpg", "71beecb1b321beb893b7ee129f8c0056"],
  ["img/sub1/shop8.jpg", "acf77fa4ab5c8bb2c6cd13d0a9949dfd"],
  ["img/sub1/shop9.jpg", "da60a5121bc95ce5c8d67178bd3131d8"],
  ["img/sub2/event_banner1.jpg", "5055b88b8aeef4c5380679f3ca9fc24c"],
  ["img/sub2/event_banner2.png", "28a27dd61fd75369fa5d50a312875b0d"],
  ["img/sub2/event_banner3.jpg", "ff7be1263138e504f9c8bcaed8bf2524"],
  ["index.html", "4f27ed38455bbd4e562a3f28411a90dd"],
  ["js/main.js", "fa3cf4c03529c10c01094e9b3f29e586"],
  ["js/slick.js", "4e664982587e9202ba65eaa6c4318499"],
  ["js/sw-config.js", "6e8e9fb952218747bc9d7238b66c1f6d"],
  ["login.html", "99123214d4642c57bcbca7a41a3edb8c"],
  ["manifest.json", "100e18e028f24e2a79dd5d7026a730e9"],
  ["scss/_index.scss", "a6cb7b08365ed16de40dc6dcea17d3a9"],
  ["scss/_login.scss", "feb1553023704bd9f2658dba5810ccf0"],
  ["scss/_mixVariables.scss", "2e402d539c7c3ffa7c3e2f1af768df59"],
  ["scss/_reset.scss", "511726b3d8d5196b76977f85a7dd440e"],
  ["scss/_search.scss", "d489e78a63a056c2f22693b75f402f6d"],
  ["scss/_sub1_shop.scss", "01d52b952ddb1da527bc113b9a8669bf"],
  ["scss/_sub2_events.scss", "42c56f39434a08f74bf781d0040abf13"],
  ["scss/main.scss", "bf1bf53fc3adb5742da312b6db5c23dd"],
  ["sub1_shop.html", "5234010756b69618b31ce9998bb65e3b"],
  ["sub2_event.html", "f2e64aafbc2ea78028a21603b47467a5"],
  ["sub3_restaurant.html", "648b6b0e37309903b159c1339d54f9ea"],
  ["sub4_center.html", "34f6f2db73035508ea547b88c45ade8c"],
];
var cacheName =
  "sw-precache-v3-sw-precache-" +
  (self.registration ? self.registration.scope : "");

var ignoreUrlParametersMatching = [/^utm_/];

var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === "/") {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise =
    "body" in originalResponse
      ? Promise.resolve(originalResponse.body)
      : originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText,
    });
  });
};

var createCacheKey = function (
  originalUrl,
  paramName,
  paramValue,
  dontCacheBustUrlsMatching
) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (
    !dontCacheBustUrlsMatching ||
    !url.pathname.match(dontCacheBustUrlsMatching)
  ) {
    url.search +=
      (url.search ? "&" : "") +
      encodeURIComponent(paramName) +
      "=" +
      encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = new URL(absoluteUrlString).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (
  originalUrl,
  ignoreUrlParametersMatching
) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = "";

  url.search = url.search
    .slice(1) // Exclude initial '?'
    .split("&") // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split("="); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join("="); // Join each [key, value] array into a 'key=value' string
    })
    .join("&"); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};

var hashParamName = "_sw-precache";
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache
    .keys()
    .then(function (requests) {
      return requests.map(function (request) {
        return request.url;
      });
    })
    .then(function (urls) {
      return new Set(urls);
    });
}

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return setOfCachedUrls(cache).then(function (cachedUrls) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
              // If we don't have a key matching url in the cache already, add it.
              if (!cachedUrls.has(cacheKey)) {
                var request = new Request(cacheKey, {
                  credentials: "same-origin",
                });
                return fetch(request).then(function (response) {
                  // Bail out of installation unless we get back a 200 OK for
                  // every request.
                  if (!response.ok) {
                    throw new Error(
                      "Request for " +
                        cacheKey +
                        " returned a " +
                        "response with status " +
                        response.status
                    );
                  }

                  return cleanResponse(response).then(function (
                    responseToCache
                  ) {
                    return cache.put(cacheKey, responseToCache);
                  });
                });
              }
            })
          );
        });
      })
      .then(function () {
        // Force the SW to transition from installing -> active state
        return self.skipWaiting();
      })
  );
});

self.addEventListener("activate", function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches
      .open(cacheName)
      .then(function (cache) {
        return cache.keys().then(function (existingRequests) {
          return Promise.all(
            existingRequests.map(function (existingRequest) {
              if (!setOfExpectedUrls.has(existingRequest.url)) {
                return cache.delete(existingRequest);
              }
            })
          );
        });
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method === "GET") {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(
      event.request.url,
      ignoreUrlParametersMatching
    );
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = "index.html";
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = "";
    if (
      !shouldRespond &&
      navigateFallback &&
      event.request.mode === "navigate" &&
      isPathWhitelisted([], event.request.url)
    ) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches
          .open(cacheName)
          .then(function (cache) {
            return cache
              .match(urlsToCacheKeys.get(url))
              .then(function (response) {
                if (response) {
                  return response;
                }
                throw Error(
                  "The cached response that was expected is missing."
                );
              });
          })
          .catch(function (e) {
            // Fall back to just fetch()ing the request if some unexpected error
            // prevented the cached response from being valid.
            console.warn(
              'Couldn\'t serve response for "%s" from cache: %O',
              event.request.url,
              e
            );
            return fetch(event.request);
          })
      );
    }
  }
});
