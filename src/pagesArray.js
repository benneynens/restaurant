import menuPage from './pages/menu.js';
import mainPage from './pages/main.js';

const pagesArray = (() => {

    let pagesArray = [];

    const addNew = (newPage) => pagesArray.push(newPage)

    const getArray = () => pagesArray;

    return {getArray, addNew};
})();

//add new pages here...
pagesArray.addNew(mainPage);
pagesArray.addNew(menuPage);


export {pagesArray};