// 🎵 Iniciar música y mostrar contenido con fade
const btn = document.getElementById("entrarBtn");
const musica = document.getElementById("musica");
const entrada = document.getElementById("entrada");
const contenido = document.getElementById("contenido");

btn.addEventListener("click", () => {
  // Intentar reproducir la música
  musica.play().catch(err => {
    console.log("Autoplay bloqueado:", err);
  });

  // Fade out de entrada
  entrada.style.transition = "opacity 1s ease";
  entrada.style.opacity = 0;

  // Mostrar contenido después del fade
  setTimeout(() => {
    entrada.style.display = "none";
    contenido.classList.remove("oculto");
  }, 1000);
});

// 🕒 Contador regresivo
const countDownDate = new Date("Nov 16, 2025 13:00:00").getTime();
const countdown = document.getElementById("countdown");

const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    countdown.innerHTML = "¡Es el gran día! 🎉";
  }
}, 1000);

// 💡 Fondo animado (efecto luces de escenario)
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let lights = [];

for (let i = 0; i < 80; i++) {
  lights.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    speed: Math.random() * 0.5 + 0.2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lights.forEach(l => {
    ctx.beginPath();
    ctx.arc(l.x, l.y, l.radius, 0, Math.PI * 2);
    ctx.fillStyle = l.color;
    ctx.fill();
    l.y += l.speed;
    if (l.y > canvas.height) l.y = 0;
  });
  requestAnimationFrame(animate);
}
animate();
