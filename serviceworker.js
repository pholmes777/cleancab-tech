self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch(event.request).catch(() => new Response("Offline fallback"))
  );
});
