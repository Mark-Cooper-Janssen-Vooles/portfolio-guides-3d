import { desktopAnimation } from "./animations/desktop-animation";
import { ipadAnimation } from "./animations/ipad-animation";
import { mobileAnimation } from "./animations/mobile-animation";

const resetCanvas = () => {
  const newCanvas = document.createElement("canvas");
  newCanvas.className = "webgl";
  newCanvas.style.zIndex = "-1";
  const canvas = document.querySelector("canvas.webgl");
  canvas.remove();
  document.querySelector("body").appendChild(newCanvas);
};

const renderDesktopAnimation = () => {
  resetCanvas();
  desktopAnimation();
};

const renderIpadAnimation = () => {
  resetCanvas();
  ipadAnimation();
};

const renderMobileAnimation = () => {
  resetCanvas();
  mobileAnimation();
};

// initial render
if (window.innerWidth >= 1280) renderDesktopAnimation();
if (window.innerWidth < 1280 && window.innerWidth >= 820) renderIpadAnimation();
if (window.innerWidth < 820) renderMobileAnimation();

// event listener for screen size
window.addEventListener(
  "resize",
  (_) => {
    if (window.innerWidth >= 1280) renderDesktopAnimation();
    if (window.innerWidth < 1280 && window.innerWidth >= 820)
      renderIpadAnimation();
    if (window.innerWidth < 820) renderMobileAnimation();
  },
  true
);
