import dotenv from 'dotenv';

//Configurar variables de entorno
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DOMAIN = process.env.DOMAIN || "http://localhost";

//Configuracion de MySQL

export const mysqlConfig = {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "app-emails"
}