// const squareWrapper = document.createElement('div');

// squareWrapper.className = 'flex-wrap d-flex  justify-content-between  align-content-center '
// squareWrapper.setAttribute('id','boxes');

// let numBox = 100;
// let tmpHTml = '';
// for (let i = 0; i < numBox; i++ ){
//     tmpHTml += <div class="box">${i + 1}</div>;
// }


// squareWrapper.innerHTML = tmpHTml;
// const container = document.querySelector('.container')
// container.append (squareWrapper)

// *Consegna:*
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e
//  per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// *Prima di partire a scrivere codice poniamoci qualche domanda:*
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?
// *Consigli del giorno:*
// 1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro 
// programma così come lo faremmo "a mano"
// *BONUS 1:*
// Crea un container nel DOM , aggiungendo (attraverso la funzione append())
//  un elemento html con il numero o la stringa corretta da mostrare.
// *BONUS 2:*
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, 
// a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
// Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot 
// fornito in consegna.


const last = 100;
let temp = '';
let multipli

for ( let i=1;  i <= last; i++){
    if ((i %3 === 0) && (i %5 === 0)){
        multipli = 'fizzbuzz'
    }else if (i %3 === 0){
        multipli = 'fizz'
    }else if (i %5 === 0){
        multipli = 'buzz'
    }else {
        multipli = i
    }
    temp += `<div class="box ${multipli}">${multipli}</div>`
    
}


const wrapper = document.createElement('div')
wrapper.className = 'flex-wrap d-flex justify-content-between align-content-center'
wrapper.setAttribute('id','boxes');
wrapper.innerHTML = temp
const beta = document.getElementById('app')
beta.append(wrapper)



