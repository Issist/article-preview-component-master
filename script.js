const button = document.querySelector('.btn');
const share = document.querySelector('.pop');

button.addEventListener('click', () => {
    share.classList.toggle('hidden');
});