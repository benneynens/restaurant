// import {restaurantDetails, restaurantMenu} from './restaurant-summary.js';
// import {createTabElement} from './tab-creator.js';
// import {displayDetails} from './displayDetails.js';
import {pageElements} from './onPageElements';
// import './style.css'


/**
 * create a content area for the headers
 * create content area fo rthe main content
 * create 2 docs to generate the content
 * import those docs using import * as main / menu
 * create an array to hold the tabs
 * display the tabs on the page
 * get the page content to change when the tabs are clicked
 */


//test initial content
pageElements.tabsArea.innerHTML = 'Tabs Area';
pageElements.displayArea.innerHTML = 'Display Area';

// //add content
//     //tabs
//     const allTabs = [ 'Home', 'Menu' ];
//     allTabs.forEach(function(tab){
//         pageVals.tabsArea.appendChild( createTabElement(tab) );
//     });


// //initial page load
//     displayDetails( allTabs[0] )