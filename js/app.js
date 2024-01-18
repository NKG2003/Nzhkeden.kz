document.getElementById('openModalBtn').addEventListener('click', openModal);

function openModal() {
    document.getElementById('modalContainer').classList.remove('hidden');
}

function closeModal(redirect) {
    document.getElementById('modalContainer').classList.add('hidden');
    if (redirect) {
        window.location.href = 'https://www.enbek.kz/ru/search/vacancy?pou=961633&except[subsidized]=subsidized';
    }
}

function linkAndScrollTop(anchor) {
    // Your scroll logic here
    // ...

    // Simulate link click
    document.getElementById('vacancyLink').click();
}