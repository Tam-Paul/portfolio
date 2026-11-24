// Mobile menu, light/dark theme toggle and footer year.
(function () {
  // ---------- Mobile menu ----------
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---------- Light/dark theme ----------
  // The visitor's choice is saved in the browser. Until they choose,
  // the site follows their device setting and updates if it changes.
  var root = document.documentElement;
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function savedTheme() {
    try {
      var t = localStorage.getItem('theme');
      return (t === 'light' || t === 'dark') ? t : null;
    } catch (e) { return null; }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);

    // Switch the light/dark logo. Each <picture> has a <source> that normally
    // follows the device setting; point it at the chosen theme instead.
    var sources = document.querySelectorAll('picture source[media*="prefers-color-scheme"], picture source[data-theme-source]');
    for (var i = 0; i < sources.length; i++) {
      sources[i].setAttribute('data-theme-source', '');
      sources[i].media = (theme === 'dark') ? 'all' : 'not all';
    }

    var button = document.querySelector('.theme-toggle');
    if (button) {
      var label = (theme === 'dark') ? 'Switch to light mode' : 'Switch to dark mode';
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
    }
  }

  applyTheme(savedTheme() || (systemDark.matches ? 'dark' : 'light'));

  var themeButton = document.querySelector('.theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', function () {
      var next = (root.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
      try { localStorage.setItem('theme', next); } catch (e) {}
      applyTheme(next);
    });
  }

  // Follow device changes only while the visitor hasn't chosen a theme.
  var onSystemChange = function (e) {
    if (!savedTheme()) { applyTheme(e.matches ? 'dark' : 'light'); }
  };
  if (systemDark.addEventListener) { systemDark.addEventListener('change', onSystemChange); }
  else if (systemDark.addListener) { systemDark.addListener(onSystemChange); }

  // ---------- Footer year ----------
  var year = document.getElementById('year');
  if (year) { year.textContent = new Date().getFullYear(); }
})();
