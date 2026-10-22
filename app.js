(function () {
  "use strict";

  var main = document.getElementById("main");
  var siteName = document.getElementById("site-name");
  siteName.textContent = window.SITE.name;

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

  function icon(symbol) {
    return el("span", { class: "icon", "aria-hidden": "true", text: symbol });
  }

  function gamesIn(categoryId) {
    return window.GAMES.filter(function (g) { return g.category === categoryId; });
  }

  function renderHome() {
    var grid = el("ul", { class: "grid category-grid", role: "list" });
    window.CATEGORIES.forEach(function (cat) {
      var count = gamesIn(cat.id).length;
      var countText = count === 1 ? "1 game" : count + " games";
      var link = el("a", {
        class: "category-card",
        href: "#" + cat.id,
        style: "--accent:" + cat.colour,
        "aria-label": cat.name + ", " + countText
      }, [
        icon(cat.icon),
        el("span", { class: "card-title", text: cat.name }),
        el("span", { class: "card-blurb", text: cat.blurb }),
        el("span", { class: "pill", text: countText })
      ]);
      grid.appendChild(el("li", {}, [link]));
    });

    var hero = el("section", { class: "hero" }, [
      el("img", { class: "hero-logo", src: "images/logo.png", alt: "", width: "120", height: "120" }),
      el("h1", { id: "page-title", tabindex: "-1", class: "wordmark" }, [
        el("span", { class: "ac", text: "AC" }),
        document.createTextNode(" "),
        el("span", { class: "rest", text: "Edu Engagement" })
      ]),
      el("p", { class: "lead", text: window.SITE.tagline })
    ]);

    return {
      title: window.SITE.name,
      page: "home",
      nodes: [hero, grid]
    };
  }

  function renderCategory(cat) {
    var games = gamesIn(cat.id);
    var list = el("ul", { class: "grid game-grid", role: "list" });

    games.forEach(function (game) {
      var thumb;
      if (game.image) {
        thumb = el("img", { class: "thumb", src: game.image, alt: "", loading: "lazy" });
      } else {
        thumb = el("div", { class: "thumb thumb-icon", "aria-hidden": "true" }, [
          el("span", { text: game.icon || cat.icon })
        ]);
      }

      var body = [
        thumb,
        el("h2", { class: "card-title", text: game.title }),
        el("p", { class: "card-blurb", text: game.summary })
      ];

      var card;
      if (game.url) {
        body.push(el("span", { class: "play", "aria-hidden": "true", text: "Play ▶" }));
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
          icon(cat.icon),
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
    document.documentElement.style.setProperty("--page-accent", page.accent || "#a78bfa");

    // Move focus to the heading on navigation so screen reader and keyboard users know the page changed.
    if (!firstRender) {
      var heading = document.getElementById("page-title");
      if (heading) heading.focus({ preventScroll: true });
      window.scrollTo(0, 0);
    }
    firstRender = false;
  }

  window.addEventListener("hashchange", render);
  render();
})();
