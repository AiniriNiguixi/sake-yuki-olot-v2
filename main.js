/* ==========================================================================
   SAKE YUKI · main.js — entry point (IIFE, no imports, works on file://)
   ========================================================================== */
(function () {
  "use strict";

  var data = window.__BRAND__ || {};
  var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  var $ = function (sel, scope) { return (scope || document).querySelector(sel); };
  var $$ = function (sel, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(sel)); };
  var escHTML = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  function safe(fn, name) { try { fn(); } catch (e) { console.warn("[" + name + "]", e); } }

  function waLink(phone, message) {
    return "https://wa.me/" + phone + "?text=" + encodeURIComponent(message || "");
  }

  /* ---------------------------------------------------------------------
     MOUNTS — idempotent, hydrate from window.__BRAND__
     --------------------------------------------------------------------- */

  function mountLinks() {
    if (!data.phoneWhatsapp) return;
    var link = waLink(data.phoneWhatsapp, data.whatsappMessage);
    ["navCta", "mobileCta", "heroReservaBtn", "reservaWhatsapp", "contactPhone", "footerWhatsapp"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.setAttribute("href", link);
    });
    var yearEl = document.getElementById("year");
    if (yearEl && data.established) { /* keep static year text, no override needed */ }
  }

  function mountMenu() {
    var mount = $("[data-menu-mount]");
    var tabsMount = $("#cartaTabs");
    if (!mount || !data.menu || mount.children.length > 0) return;

    var tabsHtml = data.menu.map(function (cat, i) {
      return '<button type="button" class="carta-tab' + (i === 0 ? " is-active" : "") + '" id="tab-' + cat.id + '" role="tab" aria-selected="' + (i === 0) + '" aria-controls="cat-' + cat.id + '" tabindex="' + (i === 0 ? "0" : "-1") + '" data-tab="' + cat.id + '">' + escHTML(cat.label) + "</button>";
    }).join("");
    if (tabsMount && tabsMount.children.length === 0) tabsMount.innerHTML = tabsHtml;

    mount.innerHTML = data.menu.map(function (cat, i) {
      var items = (cat.items || []).map(function (it) {
        var priceHtml = (it.price === null || it.price === undefined)
          ? '<span class="menu-item-price is-pending">Consulta preu</span>'
          : '<span class="menu-item-price">' + Number(it.price).toFixed(2).replace(".", ",") + " €</span>";
        return '<article class="menu-item">' +
          '<div><div class="menu-item-name">' + escHTML(it.name) + '</div>' +
          (it.desc ? '<div class="menu-item-desc">' + escHTML(it.desc) + '</div>' : '') +
          '</div>' + priceHtml + '</article>';
      }).join("");
      return '<div class="menu-category reveal' + (i === 0 ? " is-visible" : "") + '" id="cat-' + cat.id + '" role="tabpanel" aria-labelledby="tab-' + cat.id + '" tabindex="0" data-category="' + cat.id + '"' + (i === 0 ? "" : " hidden") + '>' +
        '<div class="menu-category-head">' +
        '<span class="icon-badge"><svg class="icon" aria-hidden="true"><use href="#i-' + (cat.icon || "bowl") + '"/></svg></span>' +
        '<h3>' + escHTML(cat.label) + '</h3>' +
        '<span class="count">' + (cat.items ? cat.items.length : 0) + ' plats</span>' +
        '</div><div class="menu-grid">' + items + '</div></div>';
    }).join("");
  }

  function mountGallery() {
    if (!data.gallery) return;
    var rows = [$("#galRow1"), $("#galRow2"), $("#galRow3")];
    rows.forEach(function (row, idx) {
      if (!row || row.children.length > 0) return;
      var set = data.gallery.slice(idx * 2, idx * 2 + 6);
      if (!set.length) set = data.gallery;
      var doubled = set.concat(set).concat(set);
      row.innerHTML = doubled.map(function (g) {
        return '<div class="gallery-card"><svg class="icon" aria-hidden="true"><use href="#i-' + g.icon + '"/></svg><span>' + escHTML(g.label) + '</span></div>';
      }).join("");
    });
  }

  function mountHours() {
    var table = $("#hoursTable");
    if (!table || !data.hours || table.children.length > 0) return;
    var todayIdx = (new Date().getDay() + 6) % 7; // Monday = 0
    table.innerHTML = data.hours.map(function (h, i) {
      return '<tr class="' + (i === todayIdx ? "is-today" : "") + '"><td>' + escHTML(h.day) + '</td><td>' + escHTML(h.time) + '</td></tr>';
    }).join("");
  }

  function initSideBadge() {
    var badge = $("#sideBadge");
    var status = $("#sideBadgeStatus");
    if (!badge || !status || !data.hours) return;

    var weekdays = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };
    var formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Madrid", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    });

    function updateStatus() {
      var parts = formatter.formatToParts(new Date());
      var values = {};
      parts.forEach(function (part) { values[part.type] = part.value; });

      var schedule = data.hours[weekdays[values.weekday]];
      var currentMinutes = Number(values.hour) * 60 + Number(values.minute);
      var isOpen = false;

      if (schedule) {
        var periods = /([0-9]{1,2}):([0-9]{2})\s*[-–]\s*([0-9]{1,2}):([0-9]{2})/g;
        var period;
        while ((period = periods.exec(schedule.time))) {
          var start = Number(period[1]) * 60 + Number(period[2]);
          var end = Number(period[3]) * 60 + Number(period[4]);
          if (end > start ? currentMinutes >= start && currentMinutes < end : currentMinutes >= start || currentMinutes < end) {
            isOpen = true;
            break;
          }
        }
      }

      badge.classList.toggle("is-open", isOpen);
      badge.classList.toggle("is-closed", !isOpen);
      status.textContent = (isOpen ? "Obert" : "Tancat") + " · " + (data.hoursShort || "Dimarts a diumenge");
    }

    updateStatus();
    window.setInterval(updateStatus, 60000);
  }

  /* ---------------------------------------------------------------------
     CARTA TABS — switch visible category
     --------------------------------------------------------------------- */
  function initCartaTabs() {
    var tabs = $("#cartaTabs");
    if (!tabs) return;

    function activateTab(btn) {
      var activeId = btn.dataset.tab;
      $$(".carta-tab", tabs).forEach(function (tab) {
        var isActive = tab === btn;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
        tab.setAttribute("tabindex", isActive ? "0" : "-1");
      });
      $$(".menu-category", $("#menuMount")).forEach(function (panel) {
        var isActive = panel.dataset.category === activeId;
        panel.hidden = !isActive;
        panel.classList.toggle("is-visible", isActive);
      });
    }

    tabs.addEventListener("click", function (e) {
      var btn = e.target.closest(".carta-tab");
      if (!btn) return;
      activateTab(btn);
    });

    tabs.addEventListener("keydown", function (e) {
      var btn = e.target.closest(".carta-tab");
      if (!btn) return;
      var buttons = $$(".carta-tab", tabs);
      var index = buttons.indexOf(btn);
      var nextIndex;
      if (e.key === "ArrowRight") nextIndex = (index + 1) % buttons.length;
      else if (e.key === "ArrowLeft") nextIndex = (index - 1 + buttons.length) % buttons.length;
      else if (e.key === "Home") nextIndex = 0;
      else if (e.key === "End") nextIndex = buttons.length - 1;
      else return;
      e.preventDefault();
      buttons[nextIndex].focus();
      activateTab(buttons[nextIndex]);
    });
  }

  /* ---------------------------------------------------------------------
     SPLASH — double safety net (CSS 4.5s handles most of it)
     --------------------------------------------------------------------- */
  function initSplash() {
    var splash = $("#splash");
    if (!splash) return;
    var hide = function () {
      splash.style.opacity = "0";
      splash.style.visibility = "hidden";
      setTimeout(function () { if (splash.parentNode) splash.parentNode.removeChild(splash); }, 400);
    };
    setTimeout(hide, reduced ? 900 : 4600);
  }

  /* ---------------------------------------------------------------------
     NAV — scrolled state, burger, anchor smooth-scroll
     --------------------------------------------------------------------- */
  function initNav() {
    var nav = $("#nav");
    var burger = $("#burger");
    var mobileMenu = $("#mobileMenu");
    if (nav) {
      var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 12); };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
    if (burger && mobileMenu) {
      burger.addEventListener("click", function () {
        var open = !mobileMenu.classList.contains("is-open");
        mobileMenu.classList.toggle("is-open", open);
        burger.classList.toggle("is-open", open);
        burger.setAttribute("aria-expanded", String(open));
      });
      $$("a", mobileMenu).forEach(function (a) {
        a.addEventListener("click", function () {
          mobileMenu.classList.remove("is-open");
          burger.classList.remove("is-open");
          burger.setAttribute("aria-expanded", "false");
        });
      });
    }
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var top = el.getBoundingClientRect().top + window.scrollY - (id === "#inici" ? 0 : 76);
      window.scrollTo({ top: top, behavior: reduced ? "auto" : "smooth" });
    });
  }

  /* ---------------------------------------------------------------------
     CURSOR — custom ring, hidden until first mousemove (gotcha A.3)
     --------------------------------------------------------------------- */
  function initCursor() {
    if (!fineHover) return;
    var cursor = $(".cursor");
    var ring = $("#cursorRing");
    var label = $("#cursorLabel");
    if (!cursor || !ring) return;
    var firstMove = false;
    var labels = {
      reservar: "Reservar", whatsapp: "WhatsApp", carta: "Veure", veure: "Veure", inici: "Inici"
    };
    var lastX = window.innerWidth / 2;
    var lastY = window.innerHeight / 2;
    var dotX = 0;
    var dotY = 0;

    function updateCursorPosition(x, y) {
      var dx = x - lastX;
      var dy = y - lastY;
      var targetX = Math.max(-44, Math.min(44, dx * 1.2));
      var targetY = Math.max(-44, Math.min(44, dy * 1.2));
      var smoothing = 0.18;

      dotX += (targetX - dotX) * smoothing;
      dotY += (targetY - dotY) * smoothing;

      ring.style.setProperty("--cursor-dot-x", dotX + "px");
      ring.style.setProperty("--cursor-dot-y", dotY + "px");
      ring.style.transform = "translate3d(" + x + "px," + y + "px,0)";
      ring.style.left = "0";
      ring.style.top = "0";

      lastX = x;
      lastY = y;
    }

    window.addEventListener("mousemove", function (e) {
      updateCursorPosition(e.clientX, e.clientY);
      if (!firstMove) { firstMove = true; cursor.classList.add("is-ready"); }
    });
    $$("[data-cursor], a, button").forEach(function (el) {
      el.addEventListener("mouseover", function (e) {
        if (el.contains(e.relatedTarget)) return;
        var key = el.dataset.cursor;
        ring.classList.toggle("is-active", !!key);
        if (label) label.textContent = labels[key] || "";
      });
      el.addEventListener("mouseout", function (e) {
        if (el.contains(e.relatedTarget)) return;
        ring.classList.remove("is-active");
      });
    });
  }

  /* ---------------------------------------------------------------------
     REVEALS — IntersectionObserver, threshold <=0.05, 6s safety net
     --------------------------------------------------------------------- */
  function initReveals() {
    var targets = $$(".reveal");
    if (!targets.length) return;
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(function (t) { io.observe(t); });
    setTimeout(function () { targets.forEach(function (t) { t.classList.add("is-visible"); }); }, 6000);
  }

  /* ---------------------------------------------------------------------
     TILT — subtle card tilt, gated by hover capability only (not reduced-motion)
     --------------------------------------------------------------------- */
  function initTilt() {
    if (!fineHover) return;
    $$(".menu-item, .contact-row").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var rx = ((e.clientY - r.top) / r.height - 0.5) * -3;
        var ry = ((e.clientX - r.left) / r.width - 0.5) * 3;
        card.style.transform = "perspective(600px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) translateY(-2px)";
      });
      card.addEventListener("mouseout", function (e) {
        if (card.contains(e.relatedTarget)) return;
        card.style.transform = "";
      });
    });
  }

  /* ---------------------------------------------------------------------
     BOOT
     --------------------------------------------------------------------- */
  function boot() {
    safe(mountLinks, "mountLinks");
    safe(mountMenu, "mountMenu");
    safe(mountGallery, "mountGallery");
    safe(mountHours, "mountHours");
    safe(initSideBadge, "initSideBadge");

    safe(initSplash, "initSplash");
    safe(initNav, "initNav");
    safe(initCartaTabs, "initCartaTabs");
    safe(initCursor, "initCursor");
    safe(initReveals, "initReveals");
    safe(initTilt, "initTilt");

    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
