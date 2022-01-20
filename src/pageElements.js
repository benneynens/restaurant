export let pageElements = (() => {
    //get main content area
    const contentArea = document.getElementById('content');

    //create empty divs
    const tabsArea = document.createElement('div');
    const displayArea = document.createElement('div');

    //add empty divs to the page
    contentArea.appendChild(tabsArea);
    contentArea.appendChild(displayArea);

    return {tabsArea, displayArea}
})();