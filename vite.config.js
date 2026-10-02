//Importando configurador de Vite
import {defineConfig} from 'vite';
//Importando un admin de rutas 
import {resolve} from 'node:path';

export default defineConfig({
    //Directorio raíz de los archivos fuente del frontend
    root: 'src',
    //Configurando un servidor de desarrollo 
    server: {
        //Puerto de escucha
        port: 5173,
        //Rigidez del puerto
        strict: true,
    },
    //Configurando el Build 
    build:{
        //Directorio de salida del js para producción
        outDir: '../dist',
        //Asegurando limpieza del folder de producción 
        emptyOutDir: true,
        //Generar manifiesto para el servidor
        manifest: true,
        //Opciones de Empaquetado
        rollupOptions: {
            input:{
                main: resolve(__dirname, 'src/main.js')
            }
        }
    },
    //Configuración para el desarrollo
    publicDir: false
})