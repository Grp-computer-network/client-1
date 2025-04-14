const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
const clientImage = document.getElementById("clientImage");
    const modalOverlay = document.getElementById("modalOverlay");

    clientImage.addEventListener("click", () => {
      modalOverlay.classList.remove("hidden");
    });

    modalOverlay.addEventListener("click", () => {
      modalOverlay.classList.add("hidden");
    });
    const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", () => {
    navMenu.classList.add("translate-x-full");
    overlay.classList.add("hidden");
  });