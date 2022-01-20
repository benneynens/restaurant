import MenuImage from '../images/OIP.jpeg';

const menuPageContent = (() => {
    const title="Menu";
    let content = document.createElement('div')
    content.innerHTML = "This is the menu content. ".repeat(20);
    const myIcon = new Image();
    myIcon.src = MenuImage;  
    content.appendChild(myIcon);

    return {title, content};
})();

export default menuPageContent;