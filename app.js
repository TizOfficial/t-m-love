const envelope = document.querySelector(".envelope");
const envelopeStage = document.querySelector(".envelope-stage");
const letterArea = document.querySelector(".letter-area");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

envelope.addEventListener("click", () => {
  if (envelope.classList.contains("is-open")) return;
  envelope.classList.add("is-open");
  envelope.setAttribute("aria-expanded", "true");

  window.setTimeout(() => envelope.classList.add("is-pulling"), reducedMotion ? 0 : 300);
  window.setTimeout(() => envelope.classList.add("is-unfolded"), reducedMotion ? 0 : 1050);
  window.setTimeout(() => envelope.classList.add("is-dissolving"), reducedMotion ? 0 : 1950);
  window.setTimeout(() => {
    envelopeStage.classList.add("is-cleared");
    letterArea.classList.add("is-visible");
  }, reducedMotion ? 30 : 3050);
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");

for (const photo of document.querySelectorAll(".photo-open")) {
  photo.addEventListener("click", () => {
    const image = photo.querySelector("img");
    lightboxImage.src = photo.dataset.photo;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = photo.dataset.caption;
    lightbox.showModal();
  });
}

document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("close", () => {
  lightboxImage.src = "";
});
