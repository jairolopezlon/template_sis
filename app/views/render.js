/* jshint esversion:8 */
import { getRoute } from '../routes/routes.js';

const viewsImport = async () => {    
    try {
        let { dataHTML } = await import(getRoute());
        return dataHTML; 
    } catch (error) {
        let { dataHTML } = await import('./paginaSinConfigurar.js');
        return dataHTML;        
    }    
};

const importHTML = (path) => async (idTarget) => {
    const { dataHTML } = await import(path);
    document.querySelector(`#${idTarget}`).innerHTML = dataHTML;
}

const renderMain = async ()=>{
    const dataHTML = await viewsImport();
    document.querySelector('#main').innerHTML = dataHTML();
};
const renderMenu = importHTML('./nav.js');

// const renderHeader = async ()=>{
//     const dataHTML = await 
// }


const render = async ()=>{
    renderMenu('nav_main');    
    renderMain();
}

export {
    render,
}