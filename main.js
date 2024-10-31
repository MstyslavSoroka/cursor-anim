const dot = document.querySelector(".cursor-dot");
const outline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

  const posY = e.clientY;
  const posX = e.clientX;

  dot.style.left = `${posX}px`;
  dot.style.top = `${posY}px`;

  outline.style.left = `${posX}px`;
  outline.style.top = `${posY}px`;



  outline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards" }

  )


});
