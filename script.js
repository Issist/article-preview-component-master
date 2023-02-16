const button = document.querySelector('.btn');
const share = document.querySelector('.pop');
const image = document.querySelector('.image');

button.addEventListener('click', () => {
    if (share.classList.contains('hidden')){
        image.style.backgroundColor = 'hsl(214, 17%, 51%)';
        image.src = './images/icon-share-active.svg';
    }else{        
        image.style.backgroundColor = 'hsl(210, 46%, 95%)';
        image.src = './images/icon-share.svg'
    }
    share.classList.toggle('hidden');
        

});