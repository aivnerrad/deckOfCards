const suits = ["♦", "♥", "♣", "♠"];
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let deckOfCards = [];
const buildDeck = () => {
  for(let i = 0; i < suits.length; i++){
    for(let j = 0; j < cardValues.length; j++){
      deckOfCards.push([cardValues[j], suits[i]])
    }
  }
  return deckOfCards;
}

const newDeck = buildDeck();
let myCard;

let cardElement = document.querySelector(".played-card");
cardElement.innerHTML = "Empty Pile";
cardElement.dataset.value = "";

let cardCounter = document.querySelector(".cards-remaining");
cardCounter.innerHTML = deckOfCards.length;

let pileSizeElement = document.querySelector(".pile-size");
let pileSize = 0;
pileSizeElement.innerHTML = pileSize;

const drawCard = (deck) => {
  if(deck.length){
    console.log("CARD DRAWN");
    let cardIndex = Math.ceil(Math.random() * deck.length - 1);
    myCard = deck[cardIndex];
    deck.splice(cardIndex, 1)
    flipCard(myCard, cardElement);
  }else{
    shuffleCards();
  }
}
const flipCard = (card, cardElement) => {
  cardElement.dataset.value = card[0] + " " + card[1];
  cardElement.innerHTML = card[1]
  cardElement.innerHTML === "♦" || cardElement.innerHTML === "♥" ? cardElement.style.color = "red" : cardElement.style.color = "black";
  cardCounter.innerHTML = deckOfCards.length
  pileSize++;
  pileSizeElement.innerHTML = pileSize;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Javascript loaded")
})


let pileOfCards = document.querySelector(".pile-of-cards");
pileOfCards.addEventListener("click", () =>  drawCard(newDeck));
