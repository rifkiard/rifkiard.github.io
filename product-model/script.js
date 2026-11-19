/* =========================================================
   Rifki Ardiansyah — site interactions
   Vanilla JS. No dependencies.
   ========================================================= */
(() => {
  "use strict";

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer year ---------- */
  const year = $("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Header state ---------- */
  const header = $("[data-header]");
  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  updateHeader();

  /* ---------- Navigation active state ---------- */
  const navLinks = $$(".primary-nav .nav-link");
  const navSections = navLinks
    .map((link) => {
      const id = link.getAttribute("href");
      const section = id ? document.querySelector(id) : null;
      return section ? { link, section } : null;
    })
    .filter(Boolean);

  const updateActiveNav = () => {
    if (!navSections.length) return;
    const marker = window.scrollY + window.innerHeight * 0.32;
    let current = null;

    navSections.forEach(({ section }) => {
      if (section.offsetTop <= marker) current = section.id;
    });

    // No active item once the contact / footer area takes over.
    const contact = $("#contact");
    if (contact && window.scrollY + window.innerHeight * 0.5 > contact.offsetTop) {
      current = null;
    }

    navSections.forEach(({ link, section }) => {
      link.classList.toggle("is-active", section.id === current);
    });
  };

  let scrollTicking = false;
  const onScroll = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(() => {
      updateHeader();
      updateActiveNav();
      scrollTicking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  updateActiveNav();

  /* ---------- Mobile menu ---------- */
  const menuToggle = $(".menu-toggle");
  const mobileMenu = $("#mobile-menu");
  const main = $("#main");
  const footer = $(".site-footer");
  const menuLabel = $(".menu-toggle-label");

  const setMenu = (open) => {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (menuLabel) menuLabel.textContent = open ? "Close" : "Menu";
    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.inert = !open;
    mobileMenu.setAttribute("aria-hidden", String(!open));
    document.body.classList.toggle("menu-open", open);
    if (main) main.inert = open;
    if (footer) footer.inert = open;

    if (open) {
      window.setTimeout(() => {
        const firstLink = mobileMenu.querySelector("a");
        if (firstLink && mobileMenu.classList.contains("is-open")) firstLink.focus();
      }, prefersReducedMotion ? 0 : 220);
    }
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    $(".brand")?.addEventListener("click", () => {
      if (mobileMenu.classList.contains("is-open")) setMenu(false);
    });

    $$("a", mobileMenu).forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
        setMenu(false);
        menuToggle.focus();
      }
    });

    const desktopQuery = window.matchMedia("(min-width: 981px)");
    desktopQuery.addEventListener("change", (event) => {
      if (event.matches) setMenu(false);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealItems = $$(".reveal");
  if (revealItems.length) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
      );
      revealItems.forEach((item) => revealObserver.observe(item));
    }
  }

  /* ---------- Comp card: metric / imperial toggle ---------- */
  const unitButtons = $$("[data-unit]");
  const specValues = $$("[data-cm][data-in]");

  const setUnit = (unit) => {
    unitButtons.forEach((button) => {
      const active = button.dataset.unit === unit;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    specValues.forEach((value) => {
      if (value._unitTimer) window.clearTimeout(value._unitTimer);
      value.style.opacity = "0";
      value._unitTimer = window.setTimeout(() => {
        value.textContent = unit === "in" ? value.dataset.in : value.dataset.cm;
        value.style.opacity = "1";
        value._unitTimer = null;
      }, 110);
    });
  };

  unitButtons.forEach((button) => {
    button.addEventListener("click", () => setUnit(button.dataset.unit || "cm"));
  });

  /* ---------- Print comp card ---------- */
  $$("[data-print]").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });

  /* ---------- Jakarta clock ---------- */
  const clockTargets = $$("[data-jakarta-time]");
  if (clockTargets.length) {
    const timeFormatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });

    const updateClock = () => {
      const time = timeFormatter.format(new Date());
      clockTargets.forEach((target) => {
        target.textContent = time;
      });
    };

    updateClock();
    window.setInterval(updateClock, 30000);
  }
})();
