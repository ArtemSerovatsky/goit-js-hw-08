"use strict";

import gallery from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", () => {
  let galleryRef = document.querySelector(".gallery");
  const galleryHtml = gallery.map((img) => {
    return (img = `<li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"/>
    </a>
    </li>`);
  });
  galleryRef.insertAdjacentHTML("beforeEnd", galleryHtml.join(""));

  const lightboxRef = document.querySelector(".lightbox");
  const buttonRef = lightboxRef.querySelector(".lightbox__button");
  const lightboxImg = lightboxRef.querySelector(".lightbox__image");
  const lightboxOverlay = lightboxRef.querySelector(".lightbox__overlay");
  const open = (event) => {
    if (event.target.classList.contains("gallery__image")) {
      event.preventDefault();
      console.log(event.target);
      lightboxRef.classList.add("is-open");
      lightboxOverlay.classList.add("is-open");
      lightboxImg.src = event.target.dataset.source;
    }
  };

  const close = (event) => {
    lightboxRef.classList.remove("is-open");
    lightboxOverlay.classList.remove("is-open");
    lightboxImg.src = "";
  };

  galleryRef.addEventListener("click", open);
  buttonRef.addEventListener("click", close);
  lightboxOverlay.addEventListener("click", close);
});
