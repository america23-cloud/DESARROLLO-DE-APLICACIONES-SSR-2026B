import path from 'node:path';
import {fileURLToPath} from 'node:url';
import { create as createHbsEngine } from 'express-handlebars';

import{ registerViteHelper } from './vite.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Exportar la función de configuración 
export default function configureHandlebars(app) {
  //Estableciendo la extensión de las vistas en .hbs
  //Y establaciendo el layout principal en main.hbs
  const exphbs= createHbsEngine({
    extname: '.hbs',
    defaultLayout: 'main',
  });
  
  //Registrando el helper de vite 
  registerViteHelper(exphbs.handlebars);

  //Registrando Handlebars en la App de Express
  //1. Registro el engine y su nombre
  app.engine('hbs', exphbs.engine)
  //Registro el engine previamente dado de alta
  app.set("view engine", 'hbs')
  //3. Establecemos el directorio de vistas
  app.set("views", path.join(__dirname, "..", "views"));
}
