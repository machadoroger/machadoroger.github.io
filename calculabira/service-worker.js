console.log('Hello from service-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
	console.log(`Yay! Workbox is loaded 🎉`);
} else {
	console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
	// Cache CSS files.
	new RegExp('.*\.css'),
	// Use cache but update in the background.
	new workbox.strategies.StaleWhileRevalidate({
		// Use a custom cache name.
		cacheName: 'css-cache',
	})
);

workbox.routing.registerRoute(
	new RegExp('.*\.js'),
	new workbox.strategies.NetworkFirst({
		// Use a custom cache name.
		cacheName: 'js-cache',
	})
);

workbox.googleAnalytics.initialize();