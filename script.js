// Esperar a que TODO el DOM esté listo
window.addEventListener('load', function() {
  console.log("🚀 Página cargada completamente");
  
  // 🎵 Referencias a elementos
  const btn = document.getElementById("entrarBtn");
  const musica = document.getElementById("musica");
  const entrada = document.getElementById("entrada");
  const contenido = document.getElementById("contenido");
  
  // Verificar que TODO existe
  console.log("Botón:", btn);
  console.log("Música:", musica);
  console.log("Entrada:", entrada);
  console.log("Contenido:", contenido);
  
  // Si el botón no existe, salir
  if (!btn) {
    console.error("❌ ERROR: No se encontró el botón 'entrarBtn'");
    return;
  }
  
  // 🎯 Evento del botón
  btn.onclick = function() {
    console.log("🔘 ¡BOTÓN CLICKEADO!");
    
    // Ocultar pantalla de entrada
    entrada.style.display = "none";
    console.log("✅ Entrada ocultada");
    
    // Mostrar contenido principal
    contenido.style.display = "block";
    contenido.classList.remove("oculto");
    console.log("✅ Contenido mostrado");
    
    // Reproducir música
    if (musica) {
      musica.play()
        .then(function() {
          console.log("✅ Música reproduciéndose");
        })
        .catch(function(error) {
          console.error("❌ Error al reproducir música:", error);
          alert("Haz clic en cualquier parte para activar la música");
        });
    }
  };
  
  console.log("✅ Event listener agregado al botón");
  
  // 🕒 Contador regresivo
  const countdown = document.getElementById("countdown");
  if (countdown) {
    const countDownDate = new Date("Nov 16, 2025 13:00:00").getTime();
    
    setInterval(function() {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      if (distance < 0) {
        countdown.innerHTML = "¡Es el gran día! 🎉";
      } else {
        countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
      }
    }, 1000);
  }
  
  // 💡 Fondo animado
  const canvas = document.getElementById("background");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let lights = [];
    for (let i = 0; i < 80; i++) {
      lights.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        color: "hsl(" + (Math.random() * 360) + ", 100%, 70%)",
        speed: Math.random() * 0.5 + 0.2
      });
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < lights.length; i++) {
        let l = lights[i];
        ctx.beginPath();
        ctx.arc(l.x, l.y, l.radius, 0, Math.PI * 2);
        ctx.fillStyle = l.color;
        ctx.fill();
        l.y += l.speed;
        if (l.y > canvas.height) l.y = 0;
      }
      
      requestAnimationFrame(animate);
    }
    animate();
    
    window.addEventListener('resize', function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
});
