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
// --- CÓDIGO NUEVO PARA REDIRECCIÓN CONDICIONAL ---

// 1. Espera a que todo el contenido de la página cargue
document.addEventListener("DOMContentLoaded", function() {
  
  // 2. Busca el formulario y el menú <select> por sus IDs
  const formRsvp = document.getElementById("rsvp-form");
  const selectAsistencia = document.getElementById("asistencia-select");

  // 3. Esto solo se ejecuta si el formulario existe en la página
  if (formRsvp && selectAsistencia) {
    
    // 4. Añade un "oyente" que se activa JUSTO ANTES de enviar el formulario
    formRsvp.addEventListener("submit", function() {
      
      // 5. Decide a qué página redirigir
      let paginaRedireccion = "";
      
      if (selectAsistencia.value === "Sí asistiré") {
        paginaRedireccion = "confirmado.html";
      } else {
        paginaRedireccion = "rechazado.html";
      }

      // 6. Crea la URL completa (esto es importante para GitHub Pages)
      // Combina la URL base de tu sitio con el nombre de la página
      // Esto encuentra la URL base, ej: "https://usuario.github.io/repo/"
      let baseUrl = window.location.href.split("index.html")[0];
      if (!baseUrl.endsWith('/')) {
         // Asegura que la URL base termine con /
         let path = window.location.pathname.split("index.html")[0];
         baseUrl = window.location.origin + path;
      }

      const urlCompleta = baseUrl + paginaRedireccion;

      // 7. Busca si ya existe un campo _next
      let nextInput = formRsvp.querySelector("input[name='_next']");
      
      // 8. Si no existe, lo crea
      if (!nextInput) {
        nextInput = document.createElement("input");
        nextInput.type = "hidden";
        nextInput.name = "_next";
        formRsvp.appendChild(nextInput);
      }
      
      // 9. Le pone la URL correcta al campo _next antes de enviar
      nextInput.value = urlCompleta;
      
    });
  }
});
