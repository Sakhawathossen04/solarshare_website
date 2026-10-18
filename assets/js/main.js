/* SolarShare BD — shared front-end behaviour */
(function () {
  "use strict";

  var LANG_KEY = "ssbd_lang";

  /* ---------- Language (bn/en) ---------- */
  var dict = {
    bn: {
      brandSub: "কমিউনিটি এনার্জি",
      navHome: "হোম",
      navHow: "যেভাবে কাজ করে",
      navApp: "অ্যাপ",
      navPricing: "ট্যারিফ",
      navFaq: "প্রশ্নোত্তর",
      navContact: "যোগাযোগ",
      heroEyebrow: "সোলার শেয়ারিং, বাংলাদেশি স্টাইলে",
      heroTitle: "সবাই মিলে এনার্জি শেয়ার করুন।",
      heroLead:
        "রুফটপ সোলারের অতিরিক্ত বিদ্যুৎ কমিউনিটিতে শেয়ার করুন, ট্রান্সপারেন্ট সেটেলমেন্টে আয় করুন। মিটার থেকে বিল পর্যন্ত সবকিছু এক অ্যাপে।",
      heroCta1: "সাশ্রয় হিসাব করুন",
      heroCta2: "অ্যাপ ডাউনলোড করুন",
      pt1: "৳৯/kWh উৎপাদক রেট",
      pt2: "ট্রান্সপারেন্ট সেটেলমেন্ট",
      pt3: "২৪/৭ মিটার ইনসাইট",
      liveNow: "এখনকার গ্রিড ভাইব",
      liveNote: "ডেমো ডেটা — প্রতি ৫ সেকেন্ডে রিফ্রেশ হয়",
      sec1Eyebrow: "দেখুন, প্ল্যান করুন, সাশ্রয় করুন",
      sec1Title: "কমিউনিটি সোলার শেয়ারিং, একদম সহজ",
      sec1Lead:
        "পাঁচটি ধাপে আপনার সোলার অতিরিক্ত বিদ্যুৎ প্রতিবেশীর প্রয়োজনে পৌঁছে যায় — হিসাব কম্পিউটার করে, বিশ্বাস আপনার থাকে।",
      step1T: "মিটার রিডিং আসে",
      step1D: "আপনার সোলার জেনারেশন ও গ্রিড ইমপোর্ট/এক্সপোর্ট ১ ঘণ্টায় ১ বার, অটো।",
      step2T: "ভ্যালিডেশন",
      step2D: "টাইমস্ট্যাম্প, ডুপ্লিকেট, টيم্পার — সব চেক হয়, অডিট লগে থাকে।",
      step3T: "মিলান (Matching)",
      step3D: "একই এলাকায় একই সময়ের surplus আর চাহিদা মিলিয়ে eligible energy বের হয়।",
      step4T: "সেটেলমেন্ট ক্যালকুলেশন",
      step4D: "গ্রাহক ৳১১/kWh, উৎপাদক ৳৯/kWh, অন্যান্য খরচ ৳১/kWh — স্পষ্ট ব্রেকডাউন।",
      step5T: "অ্যাপে কনফার্মেশন",
      step5D: "আয়, সাশ্রয় আর মাসিক স্টেটমেন্ট অ্যাপেই, এক নজরে।",
      cardsEyebrow: "কেন SolarShare",
      cardsTitle: "যে কারণে কমিউনিটি আমাদের বেছে নেয়",
      c1T: "স্পষ্ট দাম",
      c1D: "৳৯ উৎপাদক, ৳১১ গ্রাহক। মাঝখানে কোনো লুকানো মার্জিন নেই, সব খরচ আলাদা করে দেখানো হয়।",
      c1Tag: "ট্যারিফ দেখুন →",
      c2T: "স্মার্ট মিটার ডেটা গেটওয়ে",
      c2D: "রিডিং ভ্যালিডেশন, অফলাইন ডিটেকশন, ডুপ্লিকেট ব্লক — ভুল হিসাবের জায়গা নেই।",
      c2Tag: "যেভাবে কাজ করে →",
      c3T: "এলাকাভিত্তিক মিলান",
      c3D: "একই feeder/এলাকার চাহিদার সাথে সোলার surplus সময়গতভাবে মিলিয়ে সেটেল করা হয়।",
      c3Tag: "কমিউনিটি মডেল →",
      c4T: "ফোরকাস্টিং",
      c4D: "৭ দিনের সোলার পূর্বাভাস আর ডিমান্ড প্যাটার্ন দেখে প্ল্যান করুন — মেঘলা দিন আগেই জানা।",
      c4Tag: "অ্যাপে দেখুন →",
      c5T: "অ্যাডমিন ড্যাশবোর্ড",
      c5D: "উটিলিটি/অ্যাডমিন দেখবেন মিটার ভ্যালিডেশন, সেটেলমেন্ট রিপোর্ট, এলার্ট আর অডিট ট্রেইল।",
      c5Tag: "ড্যাশবোর্ড →",
      c6T: "নিরাপদ বাই ডিজাইন",
      c6D: "কোনো মিটার বাইপাস নেই, অননুমোদিত কানেকশন নেই। নিয়ম মেনে simulated/অনুমোদিত ডেটায় কাজ।",
      c6Tag: "নিরাপত্তা →",
      appEyebrow: "SOLARSHARE APP",
      appTitle: "আপনার পকেটেই এনার্জি কোচ",
      appLead: "হোম ড্যাশবোর্ড, মার্কেটপ্লেস, ওয়ালেট আর ইনসাইট — সব এক অ্যাপে, বাংলা + English দুই ভাষাতেই।",
      appF1T: "এক নজরে এনার্জি",
      appF1D: "আজকের উৎপাদন, ব্যবহার, গ্রিডে পাঠানো/নেওয়া — সব হোম ড্যাশবোর্ডে।",
      appF2T: "মার্কেটপ্লেস",
      appF2D: "surplus অফার করুন বা কাছের উৎপাদক থেকে কিনুন, মিলান রেশিওসহ।",
      appF3T: "ওয়ালেট ও বিল",
      appF3D: "ব্যালেন্স, সেটেলমেন্ট ক্যালকুলেটর, পেমেন্ট হিস্টরি — ক্লিয়ার হিসাব।",
      appNote: "ইউজার বানানোর দরকার নেই — ডেমো লগইন সাথে সাথে।",
      reviewEyebrow: "কমিউনিটি ভয়েস",
      reviewTitle: "কমিউনিটি কী বলছে",
      pct1: "৬২%",
      pcts1: "সেটেল হওয়া surplus স্থানীয় চাহিদায় মেলে",
      pct2: "৳৯",
      pcts2: "উৎপাদকদের নিশ্চিত ৳/kWh",
      pct3: "১০ জন",
      pcts3: "পাইলট কমিউনিটিতে producer",
      pct4: "২৪/৭",
      pcts4: "মিটার ডেটা মনিটরিং",
      ctaTitle: "আপনার ছাদের সূর্য কাজে লাগান আজই",
      ctaSub: "আপনি producer হন বা consumer — সবার জন্যই ফ্রি ডেমো।",
      ctaBtn: "ডাউনলোড পেজে",
      ctaAlt: "যোগাযোগ করুন",
      recentsFoot: "SolarShare BD — বাংলাদেশের কমিউনিটি সোলার ট্রেডিং নেটওয়ার্ক (prototype)।"
    },
    en: {
      brandSub: "Community Energy",
      navHome: "Home",
      navHow: "How it works",
      navApp: "App",
      navPricing: "Pricing",
      navFaq: "FAQ",
      navContact: "Contact",
      heroEyebrow: "Solar sharing, the BD way",
      heroTitle: "Share energy. Together.",
      heroLead:
        "Share your rooftop-solar surplus with your community and earn through transparent settlement. From meter data to bills — all in one app.",
      heroCta1: "Calculate savings",
      heroCta2: "Download the app",
      pt1: "৳9/kWh producer rate",
      pt2: "Transparent settlement",
      pt3: "24/7 meter insight",
      liveNow: "Grid vibe right now",
      liveNote: "Demo data — refreshes every 5s",
      sec1Eyebrow: "WATCH, PLAN, SAVE",
      sec1Title: "Community solar sharing, made simple",
      sec1Lead:
        "In five steps your solar surplus reaches your neighbours' homes — computers do the math, you stay in control.",
      step1T: "Meter readings",
      step1D: "Solar generation and grid import/export captured hourly, automatically.",
      step2T: "Validation",
      step2D: "Timestamps, duplicates, tamper flags — all checked and audit-logged.",
      step3T: "Matching",
      step3D: "Same-area, same-time surplus is matched against local demand.",
      step4T: "Settlement",
      step4D: "Consumer ৳11/kWh, producer ৳9/kWh, other costs ৳1/kWh — clear breakdown.",
      step5T: "Confirmation",
      step5D: "Earnings, savings and monthly statements — one glance in the app.",
      cardsEyebrow: "WHY SOLARSHARE",
      cardsTitle: "Why the community chooses us",
      c1T: "Clear pricing",
      c1D: "৳9 → producer, ৳11 → consumer. No hidden margins — every cost is itemised.",
      c1Tag: "See tariffs →",
      c2T: "Smart meter data gateway",
      c2D: "Validation, offline detection, duplicate blocking — no room for wrong bills.",
      c2Tag: "How it works →",
      c3T: "Local matching",
      c3D: "Surplus is settled against demand in the same area, at the same hour.",
      c3Tag: "Community model →",
      c4T: "Forecasting",
      c4D: "A 7-day solar forecast and demand patterns help you plan — clouds included.",
      c4Tag: "See it in the app →",
      c5T: "Admin dashboard",
      c5D: "Utilities and admins see validation, settlement reports, alerts and audit trails.",
      c5Tag: "Dashboard →",
      c6T: "Safe by design",
      c6D: "No meter bypass, no unauthorised connections. Rules first, simulated/approved data always.",
      c6Tag: "Safety →",
      appEyebrow: "THE SOLARSHARE APP",
      appTitle: "An energy coach in your pocket",
      appLead:
        "Home dashboard, marketplace, wallet and insights — all in one app, in Bangla and English.",
      appF1T: "Energy at a glance",
      appF1D: "Today's generation, consumption, import/export — on one dashboard.",
      appF2T: "Marketplace",
      appF2D: "Offer your surplus or buy from nearby producers — match ratio included.",
      appF3T: "Wallet & bills",
      appF3D: "Balance, settlement calculator, payment history — numbers that make sense.",
      appNote: "No signup hassle — demo logins are built in.",
      reviewEyebrow: "COMMUNITY VOICE",
      reviewTitle: "What the community says",
      pct1: "62%",
      pcts1: "of settled surplus meeting local demand",
      pct2: "৳9",
      pcts2: "guaranteed rate for producers",
      pct3: "10 pilots",
      pcts3: "producers in the pilot community",
      pct4: "24/7",
      pcts4: "meter data monitoring",
      ctaTitle: "Put your rooftop sun to work, today",
      ctaSub: "Producer or consumer — the demo is free for everyone.",
      ctaBtn: "Go to downloads",
      ctaAlt: "Contact us",
      recentsFoot: "SolarShare BD — community solar trading network for Bangladesh (prototype)."
    }
  };

  function applyLang(lang) {
    var d = dict[lang] || dict.bn;
    document.documentElement.setAttribute("lang", lang === "bn" ? "bn" : "en");
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (d[k]) el.textContent = d[k];
    });
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
    window.__ssbdLang = lang;
    document.dispatchEvent(new CustomEvent("ssbd:lang", { detail: lang }));
  }

  window.ssbdApplyLang = applyLang;

  function initLang() {
    var saved = "bn";
    try { saved = localStorage.getItem(LANG_KEY) || "bn"; } catch (e) {}
    applyLang(saved);
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });
  }

  /* ---------- Mobile nav ---------- */
  function initNav() {
    var t = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    if (t && nav) {
      t.addEventListener("click", function () { nav.classList.toggle("open"); });
    }
  }

  /* ---------- Live price panel (demo data) ---------- */
  function seedRandom(seed) {
    var s = seed;
    return function () {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
  }

  function refreshPanel() {
    var el = document.getElementById("live-panel");
    if (!el) return;
    var lang = window.__ssbdLang || "bn";
    var rnd = seedRandom(Math.floor(Date.now() / 5000) + 7);
    var base = 9 + rnd() * 4; // ট /kWh demo wholesale-ish
    var cells = [];
    for (var i = 0; i < 4; i++) {
      var v = base + (rnd() - 0.5) * 3.5;
      cells.push(v);
    }
    var fmt = function (x) { return "৳" + x.toFixed(1); };
    var times = ["09", "12", "15", "18"];
    var min = Math.min.apply(null, cells);
    var max = Math.max.apply(null, cells);
    var rows = document.querySelectorAll("#live-panel .price-cell");
    for (var j = 0; j < rows.length; j++) {
      if (j < 4) {
        rows[j].querySelector(".v").textContent = fmt(cells[j]);
        rows[j].querySelector(".t").textContent = times[j] + ":00";
        rows[j].classList.toggle("cheap", Math.abs(cells[j] - min) < 0.001 && max - min > 0.1);
        rows[j].classList.toggle("dear", Math.abs(cells[j] - max) < 0.001 && max - min > 0.1);
      }
    }
    el.querySelector(".price-now").innerHTML = "<small>৳</small><span>" + base.toFixed(2) + "</span><small>/kWh</small>";
  }

  function initPanel() {
    refreshPanel();
    setInterval(refreshPanel, 5000);
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll("details.faq-item").forEach(function (d) {
      d.addEventListener("toggle", function () { /* native behaviour */ });
    });
  }

  /* ---------- Demo contact form ---------- */
  function initContact() {
    var f = document.getElementById("contact-form");
    if (!f) return;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = document.getElementById("contact-ok");
      if (ok) ok.style.display = "block";
      f.reset();
    });
  }

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    initLang();
    initNav();
    initPanel();
    initFaq();
    initContact();
  });
})();
