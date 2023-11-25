function renderData(data, source) {
    const outputElement = document.getElementById('output');

    switch (source) {
        case 'clients':
            const clientsHTML = data.results.map(client => `
                <div class='client portfolio-content'>
                    <img class='client-img portfolio-img' src='${client.image}' alt='Photo'>
                    <p class='client-name'>${client.name}</p>
                </div>
            `);

            outputElement.innerHTML = clientsHTML.join('');
            break;
        
        case 'products':
             const productsHTML = data.map(product => `
                <div class='product portfolio-content'>
                    <img class='product-img portfolio-img' src='${product.image}' alt='Photo'>
                    <p class='product-name'>${product.title}</p>
                </div>
            `);

            outputElement.innerHTML = productsHTML.join('');
            break;
        
        case 'feedback':
            console.log(data.data)
             const feedbackHTML = data.data.map(feedback => `
                <div class='feedback portfolio-content'>
                    <p class='feedback-title'>${feedback.title}</p>
                    <p class='feedback-content'>${feedback.content}</p>
                    <p class='feedback-author'>${feedback.author}</p>
                </div>
            `);

            outputElement.innerHTML = feedbackHTML.join('');
            break;
        default:
            console.error('Unknown data source:', source);
    }
};