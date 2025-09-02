// Função para mostrar um alerta de boas-vindas quando o site carregar
window.onload = () => {
    alert("Bem-vindo ao site em homenagem ao Mc Kevin!");
};

// Função para ativar o scroll suave entre as seções
const scrollLinks = document.querySelectorAll('nav ul li a');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Scroll suave até a seção
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Para ajustar o cabeçalho
            behavior: 'smooth'
        });
    });
});

// Função para destacar a seção atual no menu ao rolar a página
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Efeito visual ao passar o mouse sobre as músicas
const musicItems = document.querySelectorAll('#musicas ul li');

musicItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = '#d4af37'; // Dourado
        item.style.fontWeight = 'bold';
    });

    item.addEventListener('mouseleave', () => {
        item.style.color = '#fff'; // Cor padrão
        item.style.fontWeight = 'normal';
    });
});
