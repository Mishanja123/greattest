function displayAlertModal(errorMessage, name, email ) {
    const modal = document.createElement('div');
    modal.classList.add('alert-modal');
    modal.innerHTML = `
        <div class='modal-content'>
            <button class="close" onclick="closeModal()">&times;</button>
            <p>${errorMessage}</p>
            ${name ? `<p>${name}</p>` : ''}
            ${email ? `<p>${email}</p>` : ''}
        </div>
    `;

    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.alert-modal');
    modal.remove();
}