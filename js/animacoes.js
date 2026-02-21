// Animação de entrada usando o GSAP que você já importou no HTML
gsap.from(".projeto-link-animado", {
    duration: 0.8,
    opacity: 0,
    y: 20,
    stagger: 0.2, // Faz um aparecer depois do outro
    ease: "power2.out"
});