import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    site: 'https://alexivennegas.github.io', // Cambia 'alexivennegas' por tu nombre de usuario en GitHub

    // Ruta relativa a la raíz del repositorio donde se encuentra desplegado tu sitio
    base: '/tatuajes-astro/',
});
