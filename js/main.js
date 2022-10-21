const listKey = document.querySelectorAll('section .tecla');

for(let i = 0; i < listKey.length; i++){

    const key = listKey[i];
    const classSound = key.classList[1];
    const idAudio = `#som_${classSound}`;

    key.onclick = function (){
        playAudio(idAudio)
        console.log('to tocando')
    }
    key.onkeydown = function (event){
        if (event.code === 'Space' || event.code === 'Enter'){ key.classList.add('ativa')}
        
    }
    key.onkeyup = function (){
        key.classList.remove('ativa')
    }
}

function playAudio(selectorAudio){
    const elementAudio = document.querySelector(selectorAudio);

    if(elementAudio === null){
        console.log('Elemento não encontrado');
    }
    if(elementAudio && elementAudio.localName === 'audio'){
        elementAudio.play();
    }else{
        console.log('Tag não é um audio')
    }
}
