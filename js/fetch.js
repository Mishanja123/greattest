const outputElement = document.getElementById('output');
const clientsBtns = document.querySelectorAll('.clients-btn');
const productsBtns = document.querySelectorAll('.products-btn');
const feedbackBtns = document.querySelectorAll('.feedback-btn');
const loaderElement = document.getElementById('loader');

const rickandmortyURL = 'https://rickandmortyapi.com/api/character';
const fakestoreURL = 'https://fakestoreapi.com/products?limit=6';
const fakerURL = 'https://fakerapi.it/api/v1/texts?_quantity=6';


clientsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setActiveButton('.clients-btn');
        outputElement.innerHTML = '';
        fetchDataAndRender(rickandmortyURL, 'clients');
    });
});

productsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setActiveButton('.products-btn');
        outputElement.innerHTML = '';

        fetchDataAndRender(fakestoreURL, 'products');
    });
});

feedbackBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setActiveButton('.feedback-btn');
        outputElement.innerHTML = '';

        fetchDataAndRender(fakerURL, 'feedback');
    }); 
});

async function fetchDataAndRender(url, source) {
    try {
        loaderElement.classList.remove('loader-false');
        loaderElement.classList.add('loader-true');
        const data = await fetchData(url);
        loaderElement.classList.remove('loader-true');
        loaderElement.classList.add('loader-false');

        renderData(data, source);
    } catch (error) {
        displayAlertModal(error,_,_)
        console.error(error);
    }
};

async function handleDOMContentLoaded() {
    setActiveButton('.clients-btn');

    await fetchDataAndRender(rickandmortyURL, 'clients');

    document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
};
document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);