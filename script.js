const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");
const emptyState = document.querySelector(".empty-state");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const selected = button.dataset.filter;
    let visibleCount = 0;
    cards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const visible = selected === "all" || categories.includes(selected);
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    emptyState.hidden = visibleCount > 0;
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const canvas = document.querySelector("#signal-canvas");
const context = canvas.getContext("2d");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let points = [];
let animationFrame;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const bounds = canvas.getBoundingClientRect();
  canvas.width = Math.floor(bounds.width * ratio);
  canvas.height = Math.floor(bounds.height * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  points = Array.from({ length: Math.max(24, Math.floor(bounds.width / 34)) }, (_, index) => ({
    x: (index * 97) % bounds.width,
    y: (index * 61) % bounds.height,
    vx: ((index % 5) - 2) * 0.045,
    vy: ((index % 7) - 3) * 0.035,
    radius: index % 6 === 0 ? 2.8 : 1.6,
  }));
}

function drawSignal() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  context.clearRect(0, 0, width, height);

  points.forEach((point, index) => {
    if (!reducedMotion) {
      point.x = (point.x + point.vx + width) % width;
      point.y = (point.y + point.vy + height) % height;
    }
    context.beginPath();
    context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
    context.fillStyle = index % 6 === 0 ? "rgba(240,201,90,.85)" : "rgba(185,215,196,.45)";
    context.fill();

    points.slice(index + 1).forEach((other) => {
      const dx = point.x - other.x;
      const dy = point.y - other.y;
      const distance = Math.hypot(dx, dy);
      if (distance < 115) {
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(other.x, other.y);
        context.strokeStyle = `rgba(185,215,196,${0.18 * (1 - distance / 115)})`;
        context.stroke();
      }
    });
  });

  if (!reducedMotion) animationFrame = requestAnimationFrame(drawSignal);
}

window.addEventListener("resize", () => {
  cancelAnimationFrame(animationFrame);
  resizeCanvas();
  drawSignal();
});

resizeCanvas();
drawSignal();
