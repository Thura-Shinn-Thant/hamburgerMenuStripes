/**codes related with css transition and transformation codes */
/* const transformButtonTag = document.querySelector(".transformButton")
const transformDivTag = document.querySelector(".transform")

transformButtonTag.addEventListener("click", ()=>{
    transformDivTag.classList.add("startTransform")
     
})*/

const humburgerMenuContainerTag = document.querySelector(
  ".humburgerMenuContainer"
);

const overlayMenuTag = document.querySelector(".overlayMenu");

const humburgerLine1Tag = document.querySelector(".line1");
const humburgerLine2Tag = document.querySelector(".line2");
const humburgerLine3Tag = document.querySelector(".line3");
const liTag = document.getElementsByTagName("li");

humburgerMenuContainerTag.addEventListener("click", () => {
  if (humburgerMenuContainerTag.classList.contains("isOpened")) {
    humburgerLine2Tag.classList.remove("hideline");
    humburgerLine1Tag.classList.remove("rotateUp");
    humburgerLine3Tag.classList.remove("rotateDown");
    humburgerMenuContainerTag.classList.remove("isOpened");
    overlayMenuTag.classList.remove("showOverlayMenu");
    for (let i = 0; i < liTag.length; i++) {
      liTag[i].classList.remove("moveLiTagUp");
    }
  } else {
    overlayMenuTag.classList.add("showOverlayMenu");
    humburgerLine2Tag.classList.add("hideline");
    humburgerLine1Tag.classList.add("rotateUp");
    humburgerLine3Tag.classList.add("rotateDown");
    humburgerMenuContainerTag.classList.add("isOpened");
    for (let i = 0; i < liTag.length; i++) {
      liTag[i].classList.add("moveLiTagUp");
    }
  }
});
