var btn = document.querySelector('#show-or-hide');
var conteiner = document.querySelector('.conteiner');

btn.addEventListener('click', function(){
    if(conteiner.style.display === 'block'){
        conteiner.style.display = 'none';

    } else {
        conteiner.style.display = 'block';
    }
    
});