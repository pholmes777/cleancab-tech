self.addEventListener("fetch", function(event) {
  console.log("Fetching:", event.request.url);
  event.respondWith(
    fetch(event.request).catch(() => new Response("Offline fallback"))
  );
});
