const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Caminhos dos ícones (ajuste conforme sua pasta assets/icon)
const sunIcon = "assets/icon/svgs/Sol.svg"; 
const moonIcon = "assets/icon/svgs/Lua.svg";

// Função para aplicar o tema
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.src = moonIcon;
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeIcon.src = sunIcon;
        localStorage.setItem('theme', 'light');
    }
}

// Verifica se o usuário já tem uma preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
}

// Evento de clique
themeToggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    setTheme(isDark ? 'light' : 'dark');
    
    // Animação extra: pequeno pulo ao clicar
    gsap.fromTo(themeIcon, { scale: 0.5, rotate: -45 }, { scale: 1, rotate: 0, duration: 0.5, ease: "back.out(1.7)" });
});