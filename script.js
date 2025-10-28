// 🎵 Referencias a elementos
const btn = document.getElementById("entrarBtn");
const musica = document.getElementById("musica");
const entrada = document.getElementById("entrada");
const contenido = document.getElementById("contenido");

// Configurar el volumen
musica.volume = 0.7;

// 🎵 Función para intentar reproducir música
async function reproducirMusica() {
  try {
    // Cargar y reproducir el audio
    musica.load();
    await musica.play();
    
    console.log("✅ Música reproduciéndose correctamente");
    
  } catch (error) {
    console.error("❌ Error al reproducir música:", error);
    alert("⚠️ No se pudo reproducir la música. Haz clic en el botón de música para activarla.");
  }
}

// 🎯 Evento del botón de entrada
btn.addEventListener("click", async () => {
  console.log("🔘 Botón 'Entrar' presionado");
  
  // Mostrar el contenido
  entrada.style.display = "none";
  contenido.classList.remove("oculto");
  
  // Intentar reproducir la música
  await reproducirMusica();
});

// 🕒 Contador regresivo
const countDownDate = new Date("Nov 16, 2025 13:00:00").getTime();
const countdown = document.getElementById("countdown");

const x = setInterval(function() {
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

// Ajustar canvas al redimensionar ventana
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// 🎧 Detectar errores de carga del audio
musica.addEventListener('loadeddata', () => {
  console.log("✅ Audio cargado correctamente");
});

musica.addEventListener('error', (e) => {
  console.error("❌ Error al cargar el audio:", e);
  console.log("Verifica que el archivo 'apt-rose-bruno.mp3' esté en la raíz del proyecto");
});
```

## 📋 Resumen de cambios en JS:

1. ✅ Eliminé el código duplicado
2. ✅ Mejoré el manejo de errores con `try-catch`
3. ✅ Añadí logs en consola para diagnosticar problemas
4. ✅ Añadí eventos para detectar si el audio se carga correctamente

## 🎯 Estructura final de archivos:
```
tu-repositorio/
├── index.html          ← Actualizado (ruta del audio)
├── style.css           ← Sin cambios
├── script.js           ← Actualizado (mejor manejo de audio)
└── apt-rose-bruno.mp3  ← Tu archivo de música
