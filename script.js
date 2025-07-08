// Funcionalidad de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navButtons = document.querySelector('.nav-buttons');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Cambio de estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.12)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Navegación suave
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Menú móvil (hamburger)
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Crear menú móvil dinámicamente
            let mobileMenu = document.querySelector('.mobile-menu');
            
            if (!mobileMenu) {
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                
                // Clonar el menú de navegación
                const mobileNavMenu = navMenu.cloneNode(true);
                mobileNavMenu.className = 'mobile-nav-menu';
                
                // Clonar los botones de navegación
                const mobileNavButtons = navButtons.cloneNode(true);
                mobileNavButtons.className = 'mobile-nav-buttons';
                
                mobileMenu.appendChild(mobileNavMenu);
                mobileMenu.appendChild(mobileNavButtons);
                
                // Insertar después del header
                header.insertAdjacentElement('afterend', mobileMenu);
                
                // Añadir event listeners a los enlaces del menú móvil
                const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const targetId = this.getAttribute('href').substring(1);
                        const targetSection = document.getElementById(targetId);
                        
                        if (targetSection) {
                            const headerHeight = header.offsetHeight;
                            const targetPosition = targetSection.offsetTop - headerHeight;
                            
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                        
                        // Cerrar el menú móvil
                        hamburger.classList.remove('active');
                        mobileMenu.classList.remove('active');
                    });
                });
            }
            
            mobileMenu.classList.toggle('active');
        });
    }

    // Formulario de contacto
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(this);
            const formDataObj = {};
            
            for (let [key, value] of formData.entries()) {
                formDataObj[key] = value;
            }
            
            // Validación básica
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const message = this.querySelector('textarea').value.trim();
            
            if (!name || !email || !message) {
                showNotification('Por favor, completa todos los campos obligatorios.', 'error');
                return;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Por favor, ingresa un email válido.', 'error');
                return;
            }
            
            // Simular envío del formulario
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Simular delay de envío
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Mostrar mensaje de éxito
                showNotification('¡Gracias por tu mensaje! Te contactaremos pronto.', 'success');
                
                // Limpiar el formulario
                this.reset();
            }, 2000);
        });
    }

    // Función para mostrar notificaciones
    function showNotification(message, type = 'info') {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Añadir estilos CSS dinámicamente si no existen
        if (!document.querySelector('#notification-styles')) {
            const styles = document.createElement('style');
            styles.id = 'notification-styles';
            styles.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 10000;
                    max-width: 400px;
                    border-radius: 8px;
                    padding: 16px;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
                    animation: slideInRight 0.3s ease;
                }
                
                .notification-success {
                    background: #10b981;
                    color: white;
                }
                
                .notification-error {
                    background: #ef4444;
                    color: white;
                }
                
                .notification-info {
                    background: #3b82f6;
                    color: white;
                }
                
                .notification-content {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .notification-close {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 18px;
                    cursor: pointer;
                    margin-left: auto;
                }
                
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOutRight {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(styles);
        }
        
        // Añadir al DOM
        document.body.appendChild(notification);
        
        // Cerrar notificación
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        // Auto-cerrar después de 5 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }

    // Animación de números en las estadísticas
    function animateNumbers() {
        const numbers = document.querySelectorAll('.impact-number, .stat h3');
        
        numbers.forEach(number => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const originalText = target.textContent.trim();
                        
                        // Extraer los números del texto
                        const numberMatch = originalText.match(/\d+/);
                        if (numberMatch) {
                            const finalNumber = parseInt(numberMatch[0]);
                            const hasPlus = originalText.includes('+');
                            
                            if (finalNumber && !isNaN(finalNumber)) {
                                animateValue(target, 0, finalNumber, 2000, hasPlus);
                            }
                        }
                        
                        observer.unobserve(target);
                    }
                });
            });
            
            observer.observe(number);
        });
    }

    // Función para animar valores numéricos
    function animateValue(element, start, end, duration, hasPlus = false) {
        const startTimestamp = performance.now();
        
        function updateValue(timestamp) {
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            
            const currentValue = Math.floor(start + (end - start) * easeOutQuart(progress));
            
            // Formatear el número con separador de miles
            const formattedValue = formatNumber(currentValue);
            
            element.textContent = formattedValue + (hasPlus ? '+' : '');
            
            if (progress < 1) {
                requestAnimationFrame(updateValue);
            } else {
                element.textContent = formatNumber(end) + (hasPlus ? '+' : '');
            }
        }
        
        requestAnimationFrame(updateValue);
    }

    // Función auxiliar para formatear números
    function formatNumber(num) {
        // Usar toLocaleString con configuración específica para evitar problemas
        try {
            // Usar formato estándar que funciona en todos los navegadores
            return num.toLocaleString('en-US');
        } catch (e) {
            // Fallback manual si hay problemas con toLocaleString
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    // Función de easing para animaciones suaves
    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }

    // Animaciones de aparición al hacer scroll
    function setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.about-card, .program-card, .impact-card, .team-member, .news-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            observer.observe(element);
        });
    }

    // Resaltar enlace activo en la navegación
    function highlightActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const scrollTop = window.pageYOffset + header.offsetHeight + 50;
                
                if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Botones de CTA
    const ctaButtons = document.querySelectorAll('.btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Únete')) {
                e.preventDefault();
                showNotification('¡Gracias por tu interés! Te contactaremos pronto para más información sobre la membresía.', 'success');
            } else if (this.textContent.includes('Conoce Más')) {
                e.preventDefault();
                document.querySelector('#programas').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Inicializar todas las funcionalidades
    setTimeout(() => {
        animateNumbers();
        setupScrollAnimations();
        highlightActiveNavLink();
    }, 100);
    
    // Añadir estilos CSS adicionales para la navegación móvil
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        .mobile-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
            z-index: 999;
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            padding: 20px;
        }
        
        .mobile-menu.active {
            transform: translateY(0);
        }
        
        .mobile-nav-menu {
            display: flex;
            flex-direction: column;
            gap: 20px;
            list-style: none;
            margin-bottom: 20px;
        }
        
        .mobile-nav-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .nav-link.active {
            color: #3b82f6;
            font-weight: 600;
        }
        
        @media (max-width: 768px) {
            .mobile-menu {
                display: block;
            }
        }
    `;
    document.head.appendChild(mobileStyles);
});

// Función para crear un logo placeholder
function createLogoPlaceholder() {
    const logoElements = document.querySelectorAll('.logo, .footer-logo');
    
    logoElements.forEach(logo => {
        // Crear un SVG placeholder para el logo
        const svgLogo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgLogo.setAttribute('viewBox', '0 0 100 100');
        svgLogo.setAttribute('width', '100%');
        svgLogo.setAttribute('height', '100%');
        
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '50');
        circle.setAttribute('cy', '50');
        circle.setAttribute('r', '45');
        circle.setAttribute('fill', 'url(#logoGradient)');
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '50');
        text.setAttribute('y', '58');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-family', 'Inter, sans-serif');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('font-size', '24');
        text.setAttribute('fill', 'white');
        text.textContent = 'JCI';
        
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'logoGradient');
        gradient.setAttribute('x1', '0%');
        gradient.setAttribute('y1', '0%');
        gradient.setAttribute('x2', '100%');
        gradient.setAttribute('y2', '100%');
        
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '0%');
        stop1.setAttribute('stop-color', '#3b82f6');
        
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '100%');
        stop2.setAttribute('stop-color', '#1e40af');
        
        gradient.appendChild(stop1);
        gradient.appendChild(stop2);
        defs.appendChild(gradient);
        
        svgLogo.appendChild(defs);
        svgLogo.appendChild(circle);
        svgLogo.appendChild(text);
        
        // Reemplazar el src del img con el SVG
        logo.style.background = 'transparent';
        logo.innerHTML = '';
        logo.appendChild(svgLogo);
    });
}

// Crear logos placeholder cuando se carga la página
document.addEventListener('DOMContentLoaded', createLogoPlaceholder); 