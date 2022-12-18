let firstCard
let secondCard
let cards
let sum
let isSoft
let hasBlackJack
let isAlive
let message
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function getRandomCard () {
    let x = Math.floor(Math.random() * 13);
    
    switch (x) {
        case 0: let two = {name: "2", value: 2};
                return two;
        break;
        case 1: let three = {name: "3", value: 3};
                return three;
        break;
        case 2: let four = {name: "4", value: 4};
                return four;
        break;
        case 3: let five = {name: "5", value: 5};
                return five;
        break;
        case 4: let six = {name: "6", value: 6};
                return six;
        break;
        case 5: let seven = {name: "7", value: 7};
                return seven;
        break;
        case 6: let eight = {name: "8", value: 8};
                return eight;
        break;
        case 7: let nine = {name: "9", value: 9};
                return nine;
        break;
        case 8: let ten = {name: "10", value: 10};
                return ten;
        break;
        case 9: let jack = {name: "J", value: 10};
                return jack;
        break;
        case 10: let queen = {name: "Q", value: 10};
                return queen;
        break;
        case 11: let king = {name: "K", value: 10};
                return king;
        break;
        default: let ace = {name: "A", value: 1};
                 return ace;                           
    }
}


function startGame() {
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard.name, secondCard.name]
    sum = firstCard.value + secondCard.value   
    hasBlackJack = false
    isAlive = true
    isSoft = false
    message = ""
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    messageEl.textContent = " ";
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum < 21 && cards.includes("A") && !isSoft && sum + 10 <= 21 ) {
        sum += 10;
        isSoft = true;
    } else if (sum > 21 && cards.includes("A") && isSoft) {
        sum -= 10;
        isSoft = false;
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card.value
    cards.push(card.name)
    renderGame()
}};
