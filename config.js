// Error tracking via Sentry
(function () {
  // Runs once the loader has fetched the SDK; the DSN comes from the loader URL.
  window.sentryOnLoad = function () {
    Sentry.init({
      ignoreErrors: [
        // Injected by Facebook/Instagram in-app browsers on iOS, not our code.
        /window\.webkit\.messageHandlers/,
        // Thrown by browser extensions / DuckDuckGo's injected scripts, not our code.
        /Invalid call to runtime\.sendMessage\(\)/
      ]
    });
  };

  var s = document.createElement('script');
  s.src = 'https://js.sentry-cdn.com/8d979c2d57fed5f46055abf1694c51f7.min.js';
  s.crossOrigin = 'anonymous';
  document.head.appendChild(s);
})();
