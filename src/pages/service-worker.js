import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";

// Precache assets
precacheAndRoute(self.__WB_MANIFEST);

// Cache 3D assets with a CacheFirst strategy
registerRoute(
  ({ url }) => url.pathname.startsWith("../assets/"),
  new CacheFirst({
    cacheName: "assets-cache",
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxAgeSeconds: 30 * 24 * 60 * 60 }), // Cache for 30 Days
    ],
  })
);
