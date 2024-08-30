//'use strict';

let nome = 'Pietro';

let sobrenome = 'Heringer';

console.log(sobrenome);

const instrutor = 'PIETRA LOPES DE MEDEIROS'; 
// split separa uma string em um aray de strings com o separados escolhido
const pieces = instrutor.split(' '); 

// pop remove e retorna o último elemento
console.log(pieces[0], pieces[pieces.length-1]);

let array = [1,2,3,4,5,6]; 
console.log(array); 
console.log(array.pop());
console.log(array); 

//push empura ao final do array 
array.push(7); 
console.log(array);

// shift remove e retorna o primeiro 
console.log(array.shift());
console.log(array);

// unshift adiciona a primeira posição  
array.unshift(0); 
console.log(array); 

let cores = ['verde', 'azul', 'roxo', 'vermelho', 'rosa']; 

for(let i = 0; i < cores.lenght; i++){
    console.log('For simplificado');
}

for (let cor of cores){
    console.log(cor); 

}

