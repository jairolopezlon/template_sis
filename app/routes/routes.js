/* jshint esversion:8 */

const VIEWS_ROUTES = {
    "/":`./index.js`,
    "/seccion/pendientes-diarios/":`./seccion/pendientesDiarios.js`,
    "/seccion/vademecum/":'./seccion/vademecum.js',
}

const getRoute = ()=>{
    return VIEWS_ROUTES[location.pathname.replace(/index.html/g,'')];
}

export {
    getRoute,
}