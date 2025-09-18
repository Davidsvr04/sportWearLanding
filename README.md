# 🏃‍♂️ Sportswear Landing Page

Una landing page moderna y dinámica para una marca de ropa deportiva, construida con las últimas tecnologías web para ofrecer una experiencia de usuario excepcional.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz elegante y responsive con gradientes y efectos visuales
- 🚀 **Animaciones Fluidas**: Implementadas con Framer Motion para una experiencia interactiva
- 📱 **Totalmente Responsive**: Optimizada para dispositivos móviles, tablets y desktop
- ⚡ **Rendimiento Optimizado**: Construida con Vite para tiempos de carga ultrarrápidos
- 🎯 **Intersection Observer**: Animaciones activadas por scroll para mejor UX
- 🔍 **SEO Friendly**: Estructura semántica y optimizada para motores de búsqueda
- ♿ **Accesible**: Cumple con estándares de accesibilidad web

## 🛠️ Tecnologías

### Frontend Core
- **React 19.1.1** - Biblioteca de UI con las últimas características
- **TypeScript 5.8.3** - Tipado estático para mayor robustez
- **Vite 7.1.2** - Build tool ultrarrápido

### Styling & UI
- **TailwindCSS 3.4.17** - Framework CSS utility-first
- **PostCSS 8.5.6** - Procesamiento de CSS
- **Autoprefixer 10.4.21** - Prefijos CSS automáticos

### Animaciones & Interacciones
- **Framer Motion 12.23.13** - Biblioteca de animaciones
- **React Intersection Observer 9.16.0** - Detección de elementos en viewport
- **React Icons 5.5.0** - Iconos SVG optimizados

### Desarrollo & Calidad
- **ESLint 9.33.0** - Linting de código
- **TypeScript ESLint 8.39.1** - Reglas específicas para TS

## 🏗️ Estructura del Proyecto

```
sportswear-landing/
├── public/                 # Archivos estáticos
│   └── vite.svg
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.tsx      # Navegación principal
│   │   ├── Hero.tsx        # Sección hero
│   │   ├── About.tsx       # Sección sobre nosotros
│   │   ├── Products.tsx    # Catálogo de productos
│   │   ├── Testimonials.tsx # Testimonios de clientes
│   │   └── Footer.tsx      # Pie de página
│   ├── assets/             # Recursos multimedia
│   │   ├── images/         # Imágenes del proyecto
│   │   └── react.svg
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   ├── index.css          # Estilos globales
│   └── vite-env.d.ts      # Definiciones de tipos
├── eslint.config.js       # Configuración ESLint
├── tailwind.config.js     # Configuración Tailwind
├── tsconfig.json          # Configuración TypeScript
├── vite.config.ts         # Configuración Vite
└── package.json           # Dependencias y scripts
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/Davidsvr04/sportWearLanding.git
   cd sportswear-landing
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

## 📋 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Vista previa de la build de producción |
| `npm run lint` | Ejecuta el linter para revisar el código |

## 🎨 Características de Diseño

### Paleta de Colores
- **Primarios**: Gradientes de azul, púrpura y rosa
- **Neutros**: Grises y blancos para balance
- **Acentos**: Colores vibrantes para CTAs

### Tipografía
- Fuentes modernas y legibles
- Jerarquía visual clara
- Responsive typography

### Animaciones
- **Hover Effects**: Transiciones suaves en elementos interactivos
- **Scroll Animations**: Elementos que aparecen al hacer scroll
- **Loading States**: Indicadores visuales de carga

## 🌐 Secciones

1. **Hero**: Presentación principal con call-to-action
2. **About**: Información sobre la marca y valores
3. **Products**: Showcase de productos deportivos
4. **Testimonials**: Reseñas y testimonios de clientes
5. **Footer**: Enlaces, contacto y redes sociales

## 🔧 Configuración de Desarrollo

### ESLint
El proyecto incluye configuración de ESLint para mantener la calidad del código:

```javascript
// eslint.config.js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

### TailwindCSS
Configuración personalizada para el tema del proyecto.

## 📱 Responsive Design

- **Mobile First**: Diseñado primero para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Elementos optimizados para touch

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta dist a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Pages para usar la carpeta dist
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Davidsvr04**
- GitHub: [@Davidsvr04](https://github.com/Davidsvr04)

## 🙏 Agradecimientos

- [React](https://reactjs.org/) por la increíble biblioteca
- [Vite](https://vitejs.dev/) por la herramienta de build ultrarrápida
- [TailwindCSS](https://tailwindcss.com/) por el framework CSS
- [Framer Motion](https://www.framer.com/motion/) por las animaciones
