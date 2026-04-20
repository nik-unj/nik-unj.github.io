(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (window.location.hash === "#top") {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  var typeEl = document.getElementById("typewriter-name");
  if (typeEl) {
    var fullName = "Nikunj Agrawal";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      typeEl.textContent = fullName;
    } else {
      typeEl.textContent = "";
      var i = 0;
      var stepMs = 72;
      var tick = function () {
        i += 1;
        typeEl.textContent = fullName.slice(0, i);
        if (i >= fullName.length) {
          clearInterval(iv);
        }
      };
      var iv = setInterval(tick, stepMs);
      tick();
    }
  }

  /* In-page links: scroll to target; URL stays path + query only (no hash, including #top). */
  document.querySelectorAll("a.js-scroll-clean").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) !== "#" || href.length < 2) return;
      var id = href.slice(1);
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      var path = window.location.pathname + window.location.search;
      history.replaceState(null, "", path);
    });
  });

  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var reveals = document.querySelectorAll("[data-reveal]");
  if (!reveals.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
})();
