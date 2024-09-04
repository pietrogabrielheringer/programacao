'use strict';

function instrutor(){
    for (let i = 0; i < instrutores.length; i++) {
    
        const partes = instrutores[i].split(' ');
        
        
        const primeiroNome = partes[0];
        
        
        const ultimoNome = partes[partes.length - 1];
        
     
        console.log(primeiroNome + ' ' + ultimoNome);
    }
    
}




const instrutor = [
'DEIVID LEMOS',
'FABRICIO PLASTER', 
'ADEMIR PIN',
'ALVIMAR VENTUROTI',
'CAMILA SOARES',
'DOUGLAS LIMA',
'EDUARDO SILVA',
'GREGORY SILVA',
'HEINTHEN SCARPARO', 
'JOAO JULIATTI',
'LUIZ CASTELO',
'MASCOS ALVES',
'PIETRA MEDEIROS', 
'RAMON NASCIMENTO',
'SAMUEL MADEIRA',
'SANDRO SILVA',
 
];

for (let i = 0; i < instrutores.length; i++) {

    const partes = instrutores[i].split(' ');


    const primeiroNome = partes[0];


    const ultimoNome = partes[partes.length - 1];


    console.log(primeiroNome + ' ' + ultimoNome);
}
