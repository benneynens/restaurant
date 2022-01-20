import menuPage from './pages/menu.js';
import mainPage from './pages/main.js';

const pagesArray = (() => {

    let pagesArray = [];

    pagesArray = [...pagesArray,mainPage, menuPage];

    return pagesArray;

})();

export {pagesArray};