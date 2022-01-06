'use strict';

// selectez elementele
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
let current0El = document.getElementById('current--0')
let current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


const schimba = () => {
    document.getElementById(`current--${activ}`).textContent = 0
    scorulCurent = 0
    activ = activ === 0 ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}
    let scorul = [0, 0];
    let scorulCurent = 0;
    let activ = 0;
    let seMaiJoaca = true;

const init = () => {
     score0El.textContent = 0
     score1El.textContent = 0
     current0El.textContent = 0
     current1El.textContent = 0
     player1El.classList.remove('player--winner')
     player0El.classList.remove('player--winner')
     player1El.classList.remove('player--active')
     player0El.classList.add('player--active')
     score0El.textContent = 0;
     score1El.textContent = 0;

    diceEl.classList.add('hidden')
    scorulCurent = 0;
    activ = 0;
    seMaiJoaca = true;
    scorul = [0, 0]
}
init();
// da cu zarul

btnRoll.addEventListener('click', function(){
    if(seMaiJoaca){
    //1. Generez un numar random 1-6
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    // console.log(diceRoll);
    //2. Arati ce ai dat
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${diceRoll}.png`
    //3.Daca e 1 schimbi jucatorul
     if(diceRoll !== 1) {
         scorulCurent += diceRoll;
        document.getElementById(`current--${activ}`).textContent = scorulCurent
     } else {
      schimba()
 }  
} 
})


btnHold.addEventListener('click', function(){
    if(seMaiJoaca){
    //1. adauga scorulcurent la playerul activ
        scorul[activ] += scorulCurent
        document.getElementById(`score--${activ}`).textContent = scorul[activ]
    //2. verifica scorul >= 100?
    //gata jocul
    if(scorul[activ] >= 100) {
        seMaiJoaca = false;
        document.querySelector(`.player--${activ}`).classList.add('player--winner')
        document.querySelector(`.player--${activ}`).classList.remove('player--active')
        document.querySelector('.dice').classList.add('hidden')
        // diceEl.classList.add('hidden')
        // document.querySelector('name').textContent = `current--${activ}`
    } else {
    //schimba jucatorul
    schimba()
    }
}
})

btnNew.addEventListener('click', init)