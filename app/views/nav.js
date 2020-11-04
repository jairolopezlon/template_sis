/* jshint esversion:8 */

import { mainMenu } from '../template/Components.js';

const dataMenu = [
    // {
    //     'visible':true,
    //     'label':'nombre opcion menu',
    //     'target':'direccion target',
    // },
    {
        'visible':true,
        'label':'Inicio',
        'target':'/',
    },
    {
        'visible':true,
        'label':'Vademecum',
        'target':'/seccion/vademecum/',
    },
    {
        'visible':true,
        'label':'Pendientes Diarios',
        'target':'/seccion/pendientes-diarios/',
    },
]



const dataHTML = mainMenu({data:dataMenu})

export {
    dataHTML,
}