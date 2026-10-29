(function () {
  "use strict";

  var main = document.getElementById("main");
  var siteName = document.getElementById("site-name");
  siteName.textContent = window.SITE.name;

  // Simple line icons drawn on a 32 x 32 grid. They take the colour of the text around them.
  var gear = '<circle cx="16" cy="16" r="8"/><circle cx="16" cy="16" r="3"/>';
  for (var i = 0; i < 8; i++) {
    var a = i * Math.PI / 4;
    var x1 = (16 + Math.cos(a) * 8.5).toFixed(2), y1 = (16 + Math.sin(a) * 8.5).toFixed(2);
    var x2 = (16 + Math.cos(a) * 13.2).toFixed(2), y2 = (16 + Math.sin(a) * 13.2).toFixed(2);
    gear += '<path d="M' + x1 + ' ' + y1 + 'L' + x2 + ' ' + y2 + '" stroke-width="4.4" stroke-linecap="butt"/>';
  }

  var pixels = "";
  for (var r = 0; r < 3; r++) {
    for (var c = 0; c < 3; c++) {
      var px = 3.5 + c * 9, py = 3.5 + r * 9;
      if ((r + c) % 2 === 0) {
        pixels += '<rect x="' + px + '" y="' + py + '" width="7" height="7" rx="1.2" fill="currentColor" stroke="none"/>';
      } else {
        pixels += '<rect x="' + (px + 0.9) + '" y="' + (py + 0.9) + '" width="5.2" height="5.2" rx="1" stroke-width="1.8"/>';
      }
    }
  }

  var ICONS = {
    maths: '<path d="M9 5v12M3 11h12"/><path d="M19 8h8M19 12.5h8"/><path d="M3 25h12"/><path d="M19.5 20.5l7 7M26.5 20.5l-7 7"/>',
    spelling: '<text x="16" y="23.5" text-anchor="middle" font-size="19" font-weight="800" fill="currentColor" stroke="none" font-family="inherit">Aa</text>',
    computational: '<circle cx="16" cy="7" r="3.5"/><circle cx="7" cy="25" r="3.5"/><circle cx="25" cy="25" r="3.5"/><path d="M14 10l-5 11.5M18 10l5 11.5"/>',
    stem: '<path d="M12.5 4h7M14 4v8L6.5 25.2A2.2 2.2 0 0 0 8.4 28.5h15.2a2.2 2.2 0 0 0 1.9-3.3L18 12V4"/><path d="M10 20h12"/>',
    engineering: gear,
    finance: '<ellipse cx="16" cy="9" rx="9" ry="3.5"/><path d="M7 9v5c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5V9"/><path d="M7 14v5c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-5"/><path d="M7 19v5c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-5"/>',
    art: '<path d="M5 27l1.6-6.6L20.8 6.2a2.6 2.6 0 0 1 3.7 0l1.3 1.3a2.6 2.6 0 0 1 0 3.7L11.6 25.4z"/><path d="M18.5 8.5l5 5"/>',

    music: '<path d="M12 23V7l13-3v16"/><circle cx="8.5" cy="23" r="3.5"/><circle cx="21.5" cy="20" r="3.5"/>',

    // One icon per game
    frisbee: '<g transform="rotate(-14 17 14)"><ellipse cx="17" cy="14" rx="11" ry="4.5"/><ellipse cx="17" cy="14" rx="5" ry="1.8"/></g><path d="M3 22h9M6 26.5h8"/>',
    skateboard: '<path d="M4 11c2.2 0 3 4.5 6 4.5h12c3 0 3.8-4.5 6-4.5"/><path d="M10 15.5v4M22 15.5v4"/><circle cx="10" cy="23" r="2.6"/><circle cx="22" cy="23" r="2.6"/>',
    chip: '<rect x="8" y="8" width="16" height="16" rx="3"/><rect x="13" y="13" width="6" height="6" rx="1"/><path d="M12 4v4M16 4v4M20 4v4M12 24v4M16 24v4M20 24v4M4 12h4M4 16h4M4 20h4M24 12h4M24 16h4M24 20h4"/>',
    car: '<g transform="translate(6.5 3) scale(.8)"><path d="M3.5 21v-3.4c0-.7.4-1.3 1.1-1.5l4.6-1.4 3.3-4.4h8l3.8 4.3 2.1.6c.7.2 1.1.8 1.1 1.5V21z"/><circle cx="10.5" cy="21.5" r="2.8"/><circle cx="23" cy="21.5" r="2.8"/></g><path d="M2.5 14h6M4 18h4.5M2.5 22h4"/>',
    brick: '<rect x="5" y="13" width="22" height="12" rx="2"/><path d="M10 13V9.5h5V13M17 13V9.5h5V13"/>',
    mountain: '<path d="M3 26l9-15 5.5 8.5 3-4.5L29 26z"/><circle cx="24" cy="8" r="2.6"/>',
    lemonade: '<path d="M7 8h15l-2.2 18H9.2z"/><path d="M7.8 14.5h13.4"/><path d="M17.5 3.5l-2 11"/><circle cx="25.5" cy="9" r="3.2"/>',
    pixels: pixels
  };

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (key) {
      if (key === "text") node.textContent = attrs[key];
      else if (key === "class") node.className = attrs[key];
      else node.setAttribute(key, attrs[key]);
    });
    (children || []).forEach(function (child) {
      if (child) node.appendChild(child);
    });
    return node;
  }

  function iconSvg(name) {
    var holder = el("span", { class: "icon-svg", "aria-hidden": "true" });
    holder.innerHTML =
      '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.4" ' +
      'stroke-linecap="round" stroke-linejoin="round" focusable="false">' + (ICONS[name] || "") + "</svg>";
    return holder;
  }

  function badge(name) {
    return el("span", { class: "badge", "aria-hidden": "true" }, [iconSvg(name)]);
  }

  function gamesIn(categoryId) {
    return window.GAMES.filter(function (g) { return g.category === categoryId; });
  }

  var homeFilter = "all"; // which subject the home page is showing

  function renderHome() {
    // Every game on the home page: one even grid of small tiles, coloured by subject
    var tiles = [];
    window.CATEGORIES.forEach(function (cat) {
      if (gamesIn(cat.id).length) {
        tiles.push(el("li", { class: "head", "data-cat": cat.id, style: "--accent:" + cat.colour }, [
          el("h2", { class: "sticker" }, [
            el("span", { class: "sticker-icon", "aria-hidden": "true" }, [iconSvg(cat.icon)]),
            document.createTextNode(cat.name)
          ])
        ]));
      }
      gamesIn(cat.id).forEach(function (game) {
        var parts = [
          el("span", { class: "tile-icon", "aria-hidden": "true" }, [iconSvg(ICONS[game.icon] ? game.icon : cat.icon)]),
          el("span", { class: "tile-text" }, [
            el("span", { class: "tile-sub", text: cat.name }),
            el("span", { class: "tile-title", text: game.title }),
            el("span", { class: "tile-sum", text: game.summary })
          ])
        ];
        var tile = game.url
          ? el("a", {
              class: "tile", href: game.url, target: "_blank", rel: "noopener noreferrer",
              "aria-label": "Play " + game.title + ". Opens in a new tab."
            }, parts)
          : el("div", { class: "tile disabled" }, parts);
        tiles.push(el("li", { "data-cat": cat.id, style: "--accent:" + cat.colour }, [tile]));
      });
    });
    var grid = el("ul", { class: "tiles", role: "list" }, tiles);

    // Filter buttons: All, or one subject at a time (only subjects that have games)
    var filterBar = el("div", { class: "filters", role: "group", "aria-label": "Show games from" });
    function applyFilter(id) {
      homeFilter = id;
      Array.prototype.forEach.call(filterBar.children, function (b) {
        b.setAttribute("aria-pressed", b.getAttribute("data-id") === id ? "true" : "false");
      });
      tiles.forEach(function (li) { li.hidden = id !== "all" && li.getAttribute("data-cat") !== id; });
    }
    [{ id: "all", name: "All games", colour: "#14213d" }].concat(window.CATEGORIES.filter(function (c) {
      return gamesIn(c.id).length > 0;
    })).forEach(function (c) {
      var b = el("button", { class: "chip", type: "button", "data-id": c.id, "aria-pressed": "false", style: "--accent:" + c.colour, text: c.name });
      b.addEventListener("click", function () { applyFilter(c.id); });
      filterBar.appendChild(b);
    });
    if (!filterBar.querySelector('[data-id="' + homeFilter + '"]')) homeFilter = "all";
    applyFilter(homeFilter);

    var hero = el("section", { class: "hero" }, [
      el("img", { class: "hero-logo", src: "logo.png", alt: "", width: "120", height: "120" }),
      el("h1", { id: "page-title", tabindex: "-1", class: "wordmark" }, [
        el("span", { class: "ac", text: "AC" }),
        document.createTextNode(" "),
        el("span", { class: "rest", text: "Edu Engagement" })
      ]),
      el("p", { class: "lead", text: window.SITE.tagline })
    ]);

    return { title: window.SITE.name, page: "home", nodes: [hero, filterBar, grid] };
  }

  function renderCategory(cat) {
    var games = gamesIn(cat.id);
    var list = el("ul", { class: "grid game-grid", role: "list" });

    games.forEach(function (game) {
      var thumb;
      if (game.image) {
        thumb = el("img", { class: "thumb", src: game.image, alt: "", loading: "lazy" });
      } else {
        thumb = el("div", { class: "thumb thumb-icon", "aria-hidden": "true" }, [iconSvg(ICONS[game.icon] ? game.icon : cat.icon)]);
      }

      var body = [
        thumb,
        el("h2", { class: "card-title", text: game.title }),
        el("p", { class: "card-blurb", text: game.summary })
      ];

      var card;
      if (game.url) {
        body.push(el("span", { class: "play", "aria-hidden": "true", text: "Play" }));
        card = el("a", {
          class: "game-card",
          href: game.url,
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "Play " + game.title + ". Opens in a new tab."
        }, body);
      } else {
        body.push(el("span", { class: "soon", text: "Coming soon" }));
        card = el("div", { class: "game-card disabled" }, body);
      }
      list.appendChild(el("li", {}, [card]));
    });

    var content = games.length
      ? list
      : el("p", { class: "lead", text: "New games are coming to this subject soon." });

    return {
      title: cat.name + " | " + window.SITE.name,
      page: "category",
      accent: cat.colour,
      nodes: [
        el("a", { class: "back", href: "#" }, [
          el("span", { "aria-hidden": "true", text: "← " }),
          document.createTextNode("All subjects")
        ]),
        el("h1", { id: "page-title", tabindex: "-1" }, [
          badge(cat.icon),
          document.createTextNode(" " + cat.name)
        ]),
        el("p", { class: "lead", text: cat.blurb }),
        content
      ]
    };
  }

  var firstRender = true;

  function render() {
    var id = decodeURIComponent(location.hash.replace("#", ""));
    var cat = window.CATEGORIES.filter(function (c) { return c.id === id; })[0];
    var page = cat ? renderCategory(cat) : renderHome();

    main.innerHTML = "";
    page.nodes.forEach(function (n) { main.appendChild(n); });
    document.title = page.title;
    document.body.setAttribute("data-page", page.page);
    document.documentElement.style.setProperty("--page-accent", page.accent || "#2b4acb");
    if (cat) { main.style.setProperty("--accent", cat.colour); } else { main.style.removeProperty("--accent"); }

    // Move focus to the heading on navigation so screen reader and keyboard users know the page changed.
    if (!firstRender) {
      var heading = document.getElementById("page-title");
      if (heading) heading.focus({ preventScroll: true });
      window.scrollTo(0, 0);
    }
    firstRender = false;
  }

  // ---- Click sound: a short synthesised pop, no audio file needed ----
  var AudioCtx = window.AudioContext || window.webkitAudioContext;
  var audio = null;
  var soundOn = true;
  try { soundOn = localStorage.getItem("ac-sound") !== "off"; } catch (e) {}

  function prime() {
    if (!AudioCtx) return;
    try {
      if (!audio) audio = new AudioCtx();
      if (audio.state === "suspended") audio.resume();
    } catch (e) {}
  }

  function playClick() {
    if (!soundOn || !AudioCtx) return;
    try {
      prime();
      var t = audio.currentTime;
      var osc = audio.createOscillator();
      var gain = audio.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(900, t);
      osc.frequency.exponentialRampToValueAtTime(450, t + 0.07);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.25, t + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.11);
      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start(t);
      osc.stop(t + 0.12);
    } catch (e) {}
  }

  var CLICKABLE = ".category-card:not(.disabled), .game-card:not(.disabled), .tile:not(.disabled), .chip, .back, header.site a";
  function isClickable(target) { return target && target.closest && target.closest(CLICKABLE); }

  // Mouse: sound on press. Touch: sound on release, so scrolling stays silent.
  document.addEventListener("pointerdown", function (e) {
    if (!isClickable(e.target)) return;
    if (e.pointerType === "touch") { prime(); } else { playClick(); }
  });
  document.addEventListener("pointerup", function (e) {
    if (e.pointerType === "touch" && isClickable(e.target)) playClick();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && isClickable(e.target)) playClick();
  });

  var toggle = document.getElementById("sound-toggle");
  function showSound() {
    toggle.setAttribute("aria-pressed", soundOn ? "true" : "false");
    toggle.setAttribute("aria-label", soundOn ? "Sound effects on. Press to turn off." : "Sound effects off. Press to turn on.");
  }
  if (toggle) {
    showSound();
    toggle.addEventListener("click", function () {
      soundOn = !soundOn;
      try { localStorage.setItem("ac-sound", soundOn ? "on" : "off"); } catch (e) {}
      showSound();
      if (soundOn) playClick();
    });
  }

  // ---- Theme cog: pick the page colours (subject colours stay the same) ----
  var THEMES = [
    { id: "default", name: "Cream", swatch: "#fbf8f3" },
    { id: "sky", name: "Sky", swatch: "#e8f4ff" },
    { id: "sunny", name: "Sunny", swatch: "#fff6cf" },
    { id: "candy", name: "Candy", swatch: "#fff0f5" },
    { id: "mint", name: "Mint", swatch: "#eafaf1" },
    { id: "night", name: "Night", swatch: "#101a33" }
  ];
  var themeCog = document.getElementById("theme-cog");
  var themePanel = document.getElementById("theme-panel");
  var swatchBox = document.getElementById("swatches");
  function currentTheme() { return document.documentElement.getAttribute("data-theme") || "default"; }
  function setTheme(id) {
    document.documentElement.setAttribute("data-theme", id);
    try { localStorage.setItem("ac-hub-theme", id); } catch (e) {}
    Array.prototype.forEach.call(swatchBox.children, function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-id") === id ? "true" : "false");
    });
  }
  function setThemePanel(open) {
    themePanel.hidden = !open;
    themeCog.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (themeCog && themePanel && swatchBox) {
    THEMES.forEach(function (t) {
      var b = el("button", { class: "swatch", type: "button", "data-id": t.id, "aria-pressed": "false" }, [
        el("i", { style: "background:" + t.swatch, "aria-hidden": "true" }),
        document.createTextNode(t.name)
      ]);
      b.addEventListener("click", function () { setTheme(t.id); });
      swatchBox.appendChild(b);
    });
    setTheme(currentTheme());
    themeCog.addEventListener("click", function () { setThemePanel(themePanel.hidden); });
    document.addEventListener("click", function (e) {
      if (!themePanel.hidden && !themePanel.contains(e.target) && !themeCog.contains(e.target)) setThemePanel(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !themePanel.hidden) { setThemePanel(false); themeCog.focus(); }
    });
  }

  window.addEventListener("hashchange", render);
  render();
})();
