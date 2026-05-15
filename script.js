const btn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const particles = document.getElementById("particles");

btn.addEventListener("click", () => {

    envelope.classList.add("open");

    // Permite que la imagen salga del sobre
    setTimeout(() => {
        envelope.style.overflow = "visible";
    }, 500);

    createParticles();

    // Oculta el botón después de abrir
    btn.style.display = "none";
});

function createParticles(){

    setInterval(() => {

        const particle = document.createElement("div");

        particle.classList.add("heart");

        // Corazón o confeti
        particle.innerHTML = Math.random() > 0.5 ? "❤️" : "🎉";

        particle.style.left = Math.random() * window.innerWidth + "px";

        particle.style.top = "-20px";

        particle.style.fontSize =
            (Math.random() * 25 + 20) + "px";

        particle.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        particles.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 5000);

    }, 150);
}