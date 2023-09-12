function rain() {
  const cloud = document.querySelector(".cloud");

  const left = Math.floor(Math.random() * 300);
  const width = Math.random() * 5;
  const height = Math.random() * 50;
  const duration = Math.random() * 0.5;

  const drop = document.createElement("div");
  drop.classList.add("drop");
  cloud.appendChild(drop);

  drop.style.left = left + "px";
  drop.style.width = 0.5 + width + "px";
  drop.style.height = 0.5 + height + "px";
  drop.style.animationDuration = 1 + duration + "s";

  setTimeout(() => {
    cloud.removeChild(drop);
  }, 2000);
}

setInterval(() => {
  rain();
}, 20);
