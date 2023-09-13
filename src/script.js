import { desktopAnimation } from "./animations/desktop-animation";
import { ipadAnimation } from "./animations/ipad-animation";

const resetCanvas = () => {
	const newCanvas = document.createElement("canvas")
	newCanvas.className = "webgl";
	newCanvas.style.zIndex = "-1";
	const canvas = document.querySelector("canvas.webgl");
	canvas.remove();
	document.querySelector("body").appendChild(newCanvas);
}

const renderDesktopAnimation = () => {
  console.log("render for desktop");
	resetCanvas()
	desktopAnimation();  
}

const renderIpadAnimation = () => {
	console.log("render for ipad");  
	resetCanvas()
	ipadAnimation()
}

const renderMobileAnimation = () => {
  console.log("render for mobile");  
	resetCanvas()
}


// initial render 
if (window.innerWidth >= 1280) 
  renderDesktopAnimation()
if (window.innerWidth < 1280 && window.innerWidth >= 820)
	renderIpadAnimation()
if (window.innerWidth < 820)
	renderMobileAnimation()

// event listener for screen size
window.addEventListener("resize", (event) => {
  if (window.innerWidth >= 1280) 
		renderDesktopAnimation()
	if (window.innerWidth < 1280 && window.innerWidth >= 820)
		renderIpadAnimation()
	if (window.innerWidth < 820)
		renderMobileAnimation()
}, true);
