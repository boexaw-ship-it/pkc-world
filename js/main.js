/* =========================
   NAV MENU TOGGLE
========================= */
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("open");
}

/* =========================
   NAV AUTO CLOSE (mobile)
========================= */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    nav.classList.remove("open");
  });
});

/* =========================
   PAGE NAVIGATION
========================= */
function goHome() {
  window.location.href = "index.html";
}

function goLive() {
  window.location.href = "live.html";
}

function goMatch(id = 1) {
  window.location.href = "match.html?id=" + id;
}

function goMembers() {
  window.location.href = "members.html";
}

function goLogin() {
  window.location.href = "members/login.html";
}

/* =========================
   ACTIVE NAV LINK AUTO
========================= */
(function setActiveNav() {
  const current = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");

    if (href === current) {
      link.classList.add("active");
    }
  });
})();

/* =========================
   SCROLL TO TOP BUTTON
========================= */
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.display = "none";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.background = "#F0A500";
scrollBtn.style.border = "none";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.borderRadius = "5px";

/* show/hide */
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

/* scroll action */
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* =========================
   SIMPLE ALERT HELPER
========================= */
function showAlert(msg) {
  alert(msg);
}

/* =========================
   LOADING EFFECT (optional)
========================= */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
