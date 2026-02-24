document.addEventListener("DOMContentLoaded", () => {
    // 1. Configuração inicial: Esconder elementos para evitar "piscada" antes da animação
    gsap.set(".section-perfil, .portfolio-link, .divisor-projetos, .projeto, .divisor-conectse, .card-contato, .footer", { 
        opacity: 0, 
        y: 30 
    });

    // 2. Timeline principal - Animação em sequência
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    tl.to(".section-perfil", { opacity: 1, y: 0, delay: 0.2 })
      .to(".portfolio-link", { opacity: 1, y: 0 }, "-=0.4")
      .to(".divisor-projetos", { opacity: 1, y: 0 }, "-=0.6")
      .to(".projeto", { 
          opacity: 1, 
          y: 0, 
          stagger: 0.15 // Faz um projeto aparecer depois do outro
      }, "-=0.4")
      .to(".divisor-conectse", { opacity: 1, y: 0 }, "-=0.6")
      .to(".card-contato", { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1 
      }, "-=0.4")
      .to(".footer", { opacity: 1, y: 0 }, "-=0.6");

    // 3. Efeitos de Hover (Passar o mouse) nos Cards
    const interativos = document.querySelectorAll('.portfolio-link, .projeto, .card-contato, .theme-btn');

    interativos.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { 
                scale: 1.03, 
                duration: 0.3, 
                ease: "power2.out",
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" 
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                scale: 1, 
                duration: 0.3, 
                ease: "power2.inOut",
                boxShadow: "0px 0px 0px rgba(0,0,0,0)" 
            });
        });

        // Efeito de clique (feedback visual)
        card.addEventListener('mousedown', () => {
            gsap.to(card, { scale: 0.97, duration: 0.1 });
        });
        card.addEventListener('mouseup', () => {
            gsap.to(card, { scale: 1.03, duration: 0.1 });
        });
    });

    // 4. Animação contínua e sutil no ícone de perfil
    gsap.to(".foto-perfil", {
        y: 8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});
5