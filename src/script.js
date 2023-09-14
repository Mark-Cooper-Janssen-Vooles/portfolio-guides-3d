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
  console.log('render desktop');
  resetCanvas();
  desktopAnimation();
};

const renderIpadAnimation = () => {
  console.log('render ipad');
  resetCanvas();
  ipadAnimation();
};

const renderMobileAnimation = () => {
  console.log('render mobile');
  resetCanvas();
  mobileAnimation();
};

let initialWidth = window.innerWidth

// initial render
const minDesktopWidth = 1056
const minIpadWidth = 620
if (initialWidth >= minDesktopWidth) renderDesktopAnimation();
if (initialWidth < minDesktopWidth && initialWidth >= minIpadWidth) renderIpadAnimation();
if (initialWidth < minIpadWidth) renderMobileAnimation();

// event listener for screen size
window.addEventListener(
  "resize",
  (_) => {
    if (window.innerWidth >= minDesktopWidth && initialWidth < minDesktopWidth) { 
			renderDesktopAnimation(); 
			initialWidth = window.innerWidth;
		}
    if (window.innerWidth < minDesktopWidth && window.innerWidth >= minIpadWidth && (initialWidth >= minDesktopWidth || initialWidth < minIpadWidth)) {
      renderIpadAnimation();
			initialWidth = window.innerWidth;
		}
    if (window.innerWidth < minIpadWidth && initialWidth >= minIpadWidth) {
			renderMobileAnimation();
			initialWidth = window.innerWidth;
		}
  },
  true
);
