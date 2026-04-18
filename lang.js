(function () {
  var params = new URLSearchParams(window.location.search);
  var lang = params.get('lang') === 'en' ? 'en' : 'ja';

  // Update lang attribute on <html> — CSS handles visibility via html[lang] selectors
  document.documentElement.lang = lang;

  // Update all internal links to carry ?lang= parameter
  if (lang !== 'ja') {
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      // Only modify local page links (not anchors, not external)
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:') && href.match(/\.html/)) {
        var url = new URL(href, window.location.href);
        url.searchParams.set('lang', lang);
        a.setAttribute('href', url.pathname + url.search + url.hash);
      }
    });
  }
})();
