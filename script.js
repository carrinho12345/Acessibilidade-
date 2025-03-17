document.addEventlistener(DOMcontentLoaded', function() {
    const aumentaFonteBotao = documentById('aumentar-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fonteSize = `${tamanhoAtualFonte}rem`
    })


})                          
