// import {listaEmails} from '..data/mockData.js';

//importo la conexion a mysql
import mysqldb from '../data/mysqldb.js';



export const getAllEmails = async (req, res) => {

    //obtener la lista de correos

    //conectarme a la base de datos y pedir los datos
    const query = 'SELECT * FROM correos';
    const [filas] = await mysqldb.query(query);

    //devolver al usuario sus correos
    res.json({
        msg:"Lista de emails obtenida con exito",
        sucess:"ok",
        data: filas
    });
}