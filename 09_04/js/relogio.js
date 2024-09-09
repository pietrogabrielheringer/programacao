'use strict';

function atualizarRelogio() {
    const relogio = document.getElementById('relogio');
    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');


    const horarioFormatado = `${horas}:${minutos}:${segundos}`;


    relogio.textContent = horarioFormatado;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();