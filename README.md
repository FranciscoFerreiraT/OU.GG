# OU.GG

OU.GG es una aplicación web,de escritorio y móvil que permite a los usuarios buscar nombres de cuenta en League of Legends y proporciona estadísticas detalladas basadas en su rendimiento y actividades en el juego. El objetivo de esta aplicación es ofrecer a los jugadores una herramienta accesible y fácil de usar para mejorar su juego mediante el análisis de sus propias estadísticas y las de sus oponentes. El proyecto abarca soporte para diversas plataformas incluyendo web, móvil y escritorio.

## Características

- **Búsqueda de Usuario**: Permite a los usuarios buscar cualquier nombre de cuenta en League of Legends.
- **Visualización de Estadísticas**: Muestra estadísticas detalladas como la tasa de victorias, selección de campeones, y más.
- **Multiplataforma**: Disponible como una aplicación web, una aplicación móvil y una aplicación de escritorio.
- **Interfaz de Usuario Responsiva**: Diseñada para funcionar de manera eficiente en múltiples dispositivos y tamaños de pantalla.
- **Actualizaciones Automáticas**: Las estadísticas se actualizan regularmente para reflejar los datos más recientes de los juegos.

## Tecnologías Utilizadas

Este proyecto se construye utilizando una combinación de tecnologías:

- **React**: Un framework de JavaScript para construir interfaces de usuario. Se utiliza para la versión web, aprovechando sus componentes reutilizables y su ecosistema extenso para crear una experiencia de usuario fluida y dinámica.
- **React Native + Expo**: React Native extiende React, permitiendo desarrollar aplicaciones nativas para móviles usando JavaScript y React.
- **Expo**: Expo proporciona un conjunto de herramientas y servicios que simplifican el desarrollo y las pruebas de aplicaciones React Native, facilitando la construcción de la aplicación sin necesidad de configurar entornos nativos.
- **Electron**: Un framework que permite desarrollar aplicaciones de escritorio nativas usando tecnologías web como JavaScript, HTML y CSS, basado en Chromium y Node.js. Esto permite un desarrollo unificado entre la web y el escritorio.
- **API de Riot Games**: Utilizamos esta API para obtener datos en tiempo real y precisos sobre los jugadores y partidas de League of Legends. Esta integración permite a nuestra aplicación mostrar estadísticas actualizadas y detalladas de los jugadores.

## Instalación

Para configurar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

### Requisitos Previos

Asegúrate de tener instalado Node.js y npm (o yarn) en tu computadora como gestor de paquetes.

### Clonar el Repositorio

```bash
git clone https://github.com/FranciscoFerreiraT/OU.GG.git
cd tu-repositorio
```

### Instalar dependecias

```
npm install
```
o si prefieres usar yarn:

```
yarn install
```
### Configuración de la API
Para acceder a la API de Riot Games, necesitarás una clave API que debe ser incluida en tu configuración, esta clave en este caso nos la facilita Riot Games en su [pagina](https://developer.riotgames.com/) de desarrolladores 

## Ejecutar la Aplicación
Para iniciar la aplicación en diferentes plataformas, utiliza los comandos correspondientes:

### Web
Este es nuestro caso en este repositorio
```
npm start
```
### Móvil con Expo
```
expo start
```
### Escritorio con Electron
```
npm run electron-start
```
