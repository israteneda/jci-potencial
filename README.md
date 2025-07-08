# JCI Potencial Mitad del Mundo - Página Web

Una página web moderna y completa para JCI Potencial Mitad del Mundo, diseñada para promover el liderazgo juvenil y el impacto comunitario en Ecuador.

## 🌟 Características Principales

### Diseño Moderno
- **Responsive Design**: Adaptable a todos los dispositivos (desktop, tablet, móvil)
- **Gradientes Atractivos**: Paleta de colores profesional con azules y morados
- **Animaciones Suaves**: Efectos de transición y animaciones al hacer scroll
- **Tipografía Profesional**: Fuente Inter para una lectura óptima

### Funcionalidades Interactivas
- **Navegación Suave**: Scroll suave entre secciones
- **Menú Móvil**: Hamburger menu para dispositivos móviles
- **Formulario de Contacto**: Validación completa con notificaciones
- **Animaciones Numéricas**: Contadores animados en las estadísticas
- **Notificaciones**: Sistema de alertas para acciones del usuario

### Secciones Incluidas
1. **Header** - Navegación principal con logo y menú
2. **Hero Section** - Introducción impactante con estadísticas
3. **About** - Información sobre JCI y sus valores
4. **Programas** - Cuatro programas principales de la organización
5. **Impacto** - Métricas de impacto social
6. **Equipo** - Presentación del equipo directivo
7. **Noticias** - Últimas noticias y eventos
8. **Call to Action** - Invitación a unirse
9. **Contacto** - Formulario de contacto e información
10. **Footer** - Enlaces adicionales y redes sociales

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidades interactivas
- **Font Awesome**: Iconos profesionales
- **Google Fonts**: Tipografía Inter

## 📁 Estructura del Proyecto

```
JCI-Mitad-del-Mundo/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── README.md           # Documentación del proyecto
└── assets/            # Recursos adicionales (imágenes, logos, etc.)
```

## 🎨 Paleta de Colores

- **Primario**: #667eea (Azul)
- **Secundario**: #764ba2 (Morado)
- **Texto Principal**: #2d3748 (Gris oscuro)
- **Texto Secundario**: #718096 (Gris medio)
- **Fondo**: #f8fafc (Gris claro)
- **Blanco**: #ffffff

## 📱 Breakpoints Responsivos

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

## 🛠️ Instalación y Uso

1. **Clonar o descargar** los archivos del proyecto
2. **Abrir** `index.html` en un navegador web
3. **Personalizar** el contenido según las necesidades de tu organización

### Personalización Básica

#### Cambiar Información de Contacto
```html
<!-- En la sección de contacto -->
<p>info@jcipotencialmitaddelmundo.org</p>
<p>+593 2 XXX-XXXX</p>
```

#### Actualizar Estadísticas
```html
<!-- En la sección hero y de impacto -->
<div class="stat">
    <h3>200+</h3>
    <p>Miembros Activos</p>
</div>
```

#### Modificar Colores
```css
/* En styles.css */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-color: #2d3748;
}
```

## 🌐 Funcionalidades Destacadas

### Navegación Inteligente
- Resalta automáticamente la sección activa
- Scroll suave entre secciones
- Menú móvil adaptativo

### Formulario de Contacto
- Validación en tiempo real
- Notificaciones de éxito/error
- Campos obligatorios marcados

### Animaciones
- Contadores numéricos animados
- Efectos de aparición al hacer scroll
- Transiciones suaves en botones y tarjetas

## 🔧 Personalización Avanzada

### Agregar Nuevas Secciones
1. Crear la estructura HTML
2. Añadir estilos CSS correspondientes
3. Agregar al menú de navegación
4. Implementar animaciones si es necesario

### Integrar con Backend
```javascript
// Ejemplo de integración con API
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
    });
    
    if (response.ok) {
        showNotification('¡Mensaje enviado exitosamente!', 'success');
    }
});
```

## 🎯 Mejores Prácticas Implementadas

### Accesibilidad
- Etiquetas ARIA para elementos interactivos
- Contraste adecuado de colores
- Navegación por teclado
- Textos descriptivos para imágenes

### SEO
- Estructura HTML semántica
- Meta tags optimizados
- Títulos jerárquicos apropiados
- URLs amigables preparadas

### Performance
- Imágenes optimizadas
- CSS y JS minificados (listo para producción)
- Lazy loading preparado
- Animaciones optimizadas

## 🚀 Despliegue

### Hosting Estático
La página puede ser desplegada en cualquier servicio de hosting estático como:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3**

### Configuración de Dominio
1. Registrar el dominio deseado
2. Configurar los DNS
3. Subir los archivos al hosting
4. Configurar HTTPS

## 📞 Soporte y Contacto

Para soporte técnico o consultas sobre la página web:
- **Email**: info@jcipotencialmitaddelmundo.org
- **Teléfono**: +593 2 XXX-XXXX

## 🤝 Contribuciones

Si deseas contribuir al proyecto:
1. Haz un fork del repositorio
2. Crea una rama para tu feature
3. Realiza los cambios necesarios
4. Envía un pull request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usar, modificar y distribuir el código libremente.

## 🎉 Agradecimientos

- **JCI Mundial** - Por la inspiración y los valores organizacionales
- **Comunidad JCI Ecuador** - Por el apoyo y feedback
- **Desarrolladores** - Por las herramientas y recursos utilizados

---

**Desarrollado con ❤️ para JCI Potencial Mitad del Mundo**

*Construyendo líderes comprometidos con el desarrollo sostenible y el cambio positivo.* 