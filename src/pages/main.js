const mainPageContent = (() => {
    const title="Main";
    let content = document.createElement('div')
    content.innerHTML = "This is the main page content. ".repeat(20);
    return {title, content};
})();

export default mainPageContent;