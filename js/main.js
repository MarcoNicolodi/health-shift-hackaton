$(document).ready(() => {
    document.querySelectorAll('.sintoma').forEach(elt => {
        elt.addEventListener('click', ev => {
            elt.classList.toggle("escolhido");
        })
    })

    document.querySelectorAll('.grau-dor').forEach(elt => {
        elt.addEventListener('click', ev => {
            document.querySelectorAll(".grau-dor.escolhido").forEach(anteriormenteEscolhido => {
                anteriormenteEscolhido.classList.toggle("escolhido");
            })
            elt.classList.toggle("escolhido");

        })
    })

    document.querySelectorAll('.duracao.dor').forEach(elt => {
        elt.addEventListener('click', ev => {
            document.querySelectorAll(".duracao.dor.escolhido").forEach(anteriormenteEscolhido => {
                anteriormenteEscolhido.classList.toggle("escolhido");
            })
            elt.classList.toggle("escolhido");
        })
    })

    document.querySelectorAll('.duracao.febre').forEach(elt => {
        elt.addEventListener('click', ev => {
            document.querySelectorAll(".duracao.febre.escolhido").forEach(anteriormenteEscolhido => {
                anteriormenteEscolhido.classList.toggle("escolhido");
            })
            elt.classList.toggle("escolhido");
        })
    })

    var sliderFebre = document.getElementById('slider-febre');
    var indicadorFebre = document.getElementById('valor-febre');
    
    sliderFebre.value = 36.5;
    indicadorFebre.innerHTML = 36.5
    
    sliderFebre.addEventListener('input', ev => { 
        indicadorFebre.innerHTML = ev.target.value;
    });

    document.querySelectorAll('.botao-navegacao').forEach(elt => {
        elt.addEventListener('click', ev => {
            var irPara = elt.getAttribute('data-go-to');
            $(`#navegacao-auto-atendimento a[href=\"#${irPara}\"]`).tab('show');
        })
    })
})