import {pageElements} from './pageElements';
import {pagesArray} from './pagesArray.js';

console.log(pagesArray);

const createTabElement = function (title) {
    const element = document.createElement('div');
    element.innerHTML = title;
    element.id = title;
    element.classList.add('tab');
    element.addEventListener('click', () => loadPage (title) );

    return element;
}

const displayTabElements = function () {
    //get titles
    let tabTitles = pagesArray.getArray().map(x => x.title);

    for (let i = 0; i < tabTitles.length; i++) {
        let tabElement = createTabElement( tabTitles[i] );
        pageElements.tabsArea.appendChild( tabElement );
    }
}

function loadPage (page) {
    let targetPage;
    pageElements.displayArea.innerHTML = '';
    //if first load, then...
    if (page == null) {
        displayTabElements();
        targetPage = pagesArray.getArray()[0];
    } else {
        targetPage = pagesArray.getArray().filter( function (x) {
            return x.title == page;
           } )[0];
    }

    //display the content below the tabs
    pageElements.displayArea.appendChild( targetPage.content );
}

export default loadPage;