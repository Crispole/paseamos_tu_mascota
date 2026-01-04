document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const registrationForm = document.getElementById('registrationForm');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });

    // Service Data
    const serviceData = {
        explorador: {
            title: "Paseo Explorador (Grupal)",
            price: "$8.000",
            period: "/ paseo",
            features: [
                "60 minutos de aventura",
                "Grupos pequeños (máx 2 perros)",
                "Socialización controlada",
                "Reporte fotográfico",
                "Refuerzo de comandos básicos"
            ]
        },
        vip: {
            title: "Paseo VIP (Individual)",
            price: "$12.000",
            period: " desde (30 min)",
            features: [
                "Atención exclusiva 1-a-1",
                "Especial para cachorros o senior",
                "Rutas personalizadas",
                "Ideal para perros nerviosos",
                "Reporte detallado de comportamiento en paseo",
                "Opción 45 min por $15.000"
            ]
        },
        visitas: {
            title: "Visitas a Domicilio",
            price: "$10.000",
            period: "/ visita",
            features: [
                "Alimentación y agua fresca",
                "Limpieza de arenero/espacio",
                "30 minutos de juegos y mimos",
                "Administración de medicamentos",
                "Actualizaciones vía WhatsApp",
                "Ideal para gatos y climas extremos"
            ]
        }
    };

    // Service Modal Elements
    const serviceModalOverlay = document.getElementById('serviceModalOverlay');
    const closeServiceModalBtn = document.getElementById('closeServiceModal');
    const serviceModalContent = document.getElementById('serviceModalContent');
    const serviceCards = document.querySelectorAll('.service-card');
    const bookSmallBtn = document.getElementById('bookSmall');

    // Open Service Modal
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceKey = card.getAttribute('data-service');
            const data = serviceData[serviceKey];
            
            if (data) {
                serviceModalContent.innerHTML = `
                    <div class="service-details">
                        <h2>${data.title}</h2>
                        <div class="price-tag">${data.price}<span>${data.period}</span></div>
                        <ul class="service-features">
                            ${data.features.map(f => `<li>${f}</li>`).join('')}
                        </ul>
                    </div>
                `;
                serviceModalOverlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeServiceModal = () => {
        serviceModalOverlay.style.display = 'none';
        if (modalOverlay.style.display !== 'flex') {
            document.body.style.overflow = 'auto';
        }
    };

    closeServiceModalBtn.addEventListener('click', closeServiceModal);
    serviceModalOverlay.addEventListener('click', (e) => {
        if (e.target === serviceModalOverlay) closeServiceModal();
    });

    // Book from service modal
    bookSmallBtn.addEventListener('click', () => {
        closeServiceModal();
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    // Open Main Modal
    openModalBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close Modal
    const closeModal = () => {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeModalBtn.addEventListener('click', closeModal);

    // Close on outside click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Form Submission
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simple success message
        alert('¡Gracias! Hemos recibido la inscripción de tu mascota. Nos pondremos en contacto pronto.');
        
        registrationForm.reset();
        closeModal();
    });
});
