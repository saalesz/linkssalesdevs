const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// Caminhos dos ícones
const sunIcon = "assets/icon/svgs/Sol.svg"; 
const moonIcon = "assets/icon/svgs/Lua.svg";

function setTheme(theme) {
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        themeIcon.src = moonIcon; 
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.src = sunIcon;
        localStorage.setItem('theme', 'light');
    }
}

// Verifica preferência salva ou define LIGHT como padrão
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = (currentTheme === 'light') ? 'dark' : 'light';
    
    setTheme(newTheme);
    
    // Animação GSAP
    if (typeof gsap !== 'undefined') {
        gsap.fromTo(themeIcon, 
            { scale: 0.5, rotate: -90, opacity: 0 }, 
            { scale: 1, rotate: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
        );
    }
});