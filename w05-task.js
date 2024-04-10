
const templesElement = document.querySelector('#temples');
let templeList = [];


const getTemples = async () => {
    try {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');    
        templeList = await response.json();
        displayTemples(templeList);
    } catch (error) {
        console.error('Error fetching temple data:', error);
    }
};


const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        article.appendChild(h3);
        
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(img);
        
        templesElement.appendChild(article);
    });
};


const reset = () => {
    templesElement.innerHTML = ''; 
};


const filterTemples = (temples) => {
    reset(); 
    
    const filter = document.querySelector('#filtered').value;
    
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.error('Invalid filter option');
    }
};


const filterElement = document.querySelector('#filtered');
filterElement.addEventListener('change', () => filterTemples(templeList));


getTemples();
