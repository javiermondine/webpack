# Webpack Practice - The Odin Project

Proyecto de práctica para aprender **npm** y **Webpack** siguiendo las lecciones de The Odin Project.

## 📋 Descripción

Este proyecto demuestra el uso de:
- **npm** para gestión de paquetes
- **Webpack** para bundling de JavaScript, CSS e imágenes
- **Webpack Dev Server** para desarrollo en tiempo real
- **Loaders** para procesar diferentes tipos de archivos
- **Plugins** para generar HTML automáticamente

## 🏗️ Estructura del Proyecto

```
webpack-practice/
├── dist/                      # Archivos generados por Webpack (no subir a git)
│   ├── index.html            # HTML generado automáticamente
│   ├── main.js               # JavaScript bundle
│   └── [hash].png            # Imagen procesada
├── src/                       # Código fuente
│   ├── index.js              # Punto de entrada principal
│   ├── greeting.js           # Módulo con funciones exportadas
│   ├── styles.css            # Estilos CSS
│   ├── template.html         # Template HTML
│   └── odin.png              # Imagen de ejemplo
├── node_modules/              # Dependencias (no subir a git)
├── package.json               # Configuración de npm
├── webpack.config.js          # Configuración de Webpack
└── README.md                  # Este archivo
```

## 🚀 Instalación

### 1. Clonar o crear el proyecto
```bash
mkdir webpack-practice
cd webpack-practice
```

### 2. Inicializar npm
```bash
npm init -y
```

### 3. Instalar dependencias
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev html-loader
```

O simplemente si ya existe `package.json`:
```bash
npm install
```

## 📦 Dependencias vs DevDependencies

### **dependencies** (no usadas en este proyecto)
Paquetes necesarios para que la aplicación funcione en **producción**.
```bash
npm install nombre-paquete
```

### **devDependencies** ✅ (usadas en este proyecto)
Paquetes necesarios solo para **desarrollo** (bundlers, loaders, testing, etc.).
```bash
npm install --save-dev nombre-paquete
```

En este proyecto, Webpack y todos los loaders son **devDependencies** porque solo se necesitan para construir el bundle, no para ejecutar la aplicación final.

## 🛠️ Scripts Disponibles

### Build (construir bundle)
```bash
npm run build
```
o directamente:
```bash
npx webpack
```

Esto genera los archivos en `dist/`:
- `dist/index.html` - HTML con script inyectado
- `dist/main.js` - JavaScript bundle
- `dist/[hash].png` - Imágenes procesadas

### Dev Server (desarrollo en vivo)
```bash
npm run dev
```
o directamente:
```bash
npx webpack serve
```

Esto:
- Abre automáticamente el navegador
- Recarga la página cuando hay cambios
- Sirve los archivos en `http://localhost:8080`
- No escribe archivos en `dist/` (usa memoria)

## ⚙️ Configuración de Webpack

### webpack.config.js explicado

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',              // Modo desarrollo (sin minificar)
  entry: './src/index.js',          // Punto de entrada
  output: {
    filename: 'main.js',            // Nombre del bundle
    path: path.resolve(__dirname, 'dist'),  // Carpeta de salida
    clean: true,                    // Limpia dist/ antes de cada build
  },
  devtool: 'eval-source-map',       // Source maps para debugging
  devServer: {
    watchFiles: ['./src/template.html'],  // Recargar si cambia el HTML
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',  // Template HTML base
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,            // Archivos CSS
        use: ['style-loader', 'css-loader'],  // style-loader inyecta CSS en DOM
      },
      {
        test: /\.html$/i,           // Archivos HTML
        loader: 'html-loader',      // Procesa imágenes en HTML
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Imágenes
        type: 'asset/resource',     // Copia imágenes a dist/
      },
    ],
  },
};
```

## 🔧 Loaders y Plugins

### **Loaders** (transforman archivos)

| Loader | Propósito | Uso |
|--------|-----------|-----|
| `css-loader` | Interpreta `@import` y `url()` en CSS | Procesa CSS |
| `style-loader` | Inyecta CSS en el DOM con `<style>` | Aplica CSS |
| `html-loader` | Procesa imágenes en HTML con `require()` | Bundlea assets en HTML |

### **Plugins** (extienden funcionalidad)

| Plugin | Propósito |
|--------|-----------|
| `HtmlWebpackPlugin` | Genera `index.html` automáticamente con scripts inyectados |

### **Asset Modules** (Webpack 5+)

| Tipo | Propósito |
|------|-----------|
| `asset/resource` | Emite archivo separado (como file-loader) |
| `asset/inline` | Inline como Data URI (como url-loader) |
| `asset/source` | Exporta código fuente (como raw-loader) |
| `asset` | Automático según tamaño |

## 📝 Características Implementadas

### ✅ 1. Inicialización con npm
- [x] `npm init -y` genera `package.json`
- [x] Instalación de Webpack como devDependency
- [x] Scripts personalizados en `package.json`

### ✅ 2. Configuración básica de Webpack
- [x] Estructura `src/` y `dist/`
- [x] Módulos ES6 con `import`/`export`
- [x] `webpack.config.js` con entry, output, mode

### ✅ 3. HtmlWebpackPlugin
- [x] Template HTML personalizado
- [x] Inyección automática de scripts
- [x] Generación de `dist/index.html`

### ✅ 4. CSS con loaders
- [x] Import de CSS en JavaScript
- [x] `style-loader` + `css-loader`
- [x] Estilos aplicados automáticamente

### ✅ 5. Imágenes y assets
- [x] `html-loader` para imágenes en HTML
- [x] `asset/resource` para imágenes en JS
- [x] Import dinámico: `import OdinLogo from './odin.png'`

### ✅ 6. Webpack Dev Server
- [x] Hot reload automático
- [x] Source maps con `eval-source-map`
- [x] Watch de archivos HTML
- [x] Servidor local en puerto 8080

### ✅ 7. Documentación
- [x] README completo
- [x] Explicación de comandos
- [x] Estructura del proyecto documentada

## 🎯 Conceptos Clave Aprendidos

### 1. **npm**
- `package.json` es el archivo de configuración
- `npm install` lee `package.json` y descarga dependencias
- `node_modules/` nunca se sube a git (usar `.gitignore`)
- Scripts npm: shortcuts para comandos largos

### 2. **Webpack**
- **Bundler**: combina múltiples archivos en uno solo
- **Entry point**: dónde comienza a buscar dependencias
- **Output**: dónde guarda el bundle final
- **Loaders**: transforman archivos (CSS, imágenes, etc.)
- **Plugins**: extienden funcionalidad de Webpack

### 3. **ES6 Modules**
```javascript
// greeting.js
export function greet(name) { ... }

// index.js
import { greet } from './greeting.js';
```

### 4. **Dev vs Production**
- **Development**: source maps, sin minificar, hot reload
- **Production**: minificado, optimizado, sin source maps

## 🌐 Cómo Usar el Proyecto

### Desarrollo (recomendado)
```bash
npm run dev
```
Se abre automáticamente en `http://localhost:8080`. Los cambios se aplican en vivo.

### Build para producción
```bash
npm run build
```
Luego abre `dist/index.html` en el navegador.

### Ver cambios en el código
1. Edita archivos en `src/`
2. Si usas dev server, los cambios aparecen automáticamente
3. Si hiciste build manual, ejecuta `npm run build` de nuevo

## 📚 Recursos

- [The Odin Project - npm](https://www.theodinproject.com/lessons/node-path-javascript-npm)
- [The Odin Project - Webpack](https://www.theodinproject.com/lessons/javascript-webpack)
- [Webpack Documentation](https://webpack.js.org/)
- [npm Documentation](https://docs.npmjs.com/)

## 🎉 Resultado Final

Al ejecutar el proyecto verás:
- ✅ Fondo degradado morado
- ✅ Mensaje de bienvenida generado por JS
- ✅ Logo de The Odin Project
- ✅ Estilos aplicados desde CSS importado
- ✅ Todo bundled por Webpack

---

**¡Proyecto completado! 🚀** Ahora sabes cómo usar npm y Webpack para gestionar proyectos JavaScript modernos.
