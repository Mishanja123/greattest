function setActiveButton(btnClass) {
    document.querySelectorAll('.clients-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.products-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll(btnClass).forEach(btn => {
        btn.classList.add('active');
    });
}