// Este es el archivo es el que vamos a conectar con la base de datos

//importamos la libreria de mysql con promesas
import mysql from 'mysql2/promise';

//importamos la variable que hemos creado con los datos de la tabla
import { mysqlConfig } from '../config.js';

// con esta variable vamos a meter la variable que creamos en el archivo config con la base de datos
const mysqldb = await mysql.createConnection(mysqlConfig);

//exportamos la conexion a la base de datos
export default mysqldb;

