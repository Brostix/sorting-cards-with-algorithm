//window.onload = function () {
//     draw();
// };

 document.querySelector("#botondeprueba").addEventListener("click", () => {
    console.log("generateRandomCard");
    //createNode();
  });

// const draw = () => {
//     let button = document.querySelector("#cardGenerator")
//     button.addEventListener("click", event => {
//         event.preventDefault();
//         let = numberofCards = document.querySelector("#fname").value;
//         for (let index = 0; index < numberofCards; index++) {
//             getRandomcard();
            
//         }
//     });
// };


const CARDS = [
 "A",
 "2",
 "3",
 "4",
 "5",
 "6",
 "7",
 "8",
 "9",
 "10",
 "J",
 "Q",
 "K"
];
const SYMBOLS = ["♠", "♣", "♥", "♦"];

let randomSymbol = Math.floor(Math.random() * SYMBOLS.length);

const draw = () => {
    let button = document.querySelector("#cardGenerator")
    button.addEventListener("click", event => {
        event.preventDefault();
        let numberofCards = document.querySelector("#numberOfCards").value;
        for (let index = 0; index < numberofCards; index++) {
            newCard1();
            newSymbol1();
            console.log(newCard1)
            console.log(newSymbol1)
        }
    });
};

let newCard1 = () => {
  let randomCard = Math.floor(Math.random() * CARDS.length);
  let printedCard = CARDS[randomCard];
  const NUMBER1 = document.querySelector("#number1");
  NUMBER1.innerHTML = printedCard;
};

let newSymbol1 = () => {
  let randomSymbol = Math.floor(Math.random() * SYMBOLS.length);
  let printedSymbol = SYMBOLS[randomSymbol];
  const SYMBOLUP1 = document.querySelector("#symbolUp1");
  const SYMBOLDOWN1 = document.querySelector("#symbolDown1");
  if (printedSymbol == "♥" || printedSymbol == "♦") {
    SYMBOLUP1.style.color = "red";
    SYMBOLDOWN1.style.color = "red";
  }
  SYMBOLUP1.innerHTML = printedSymbol;
  SYMBOLDOWN1.innerHTML = printedSymbol;
};



// ---------------eventButton----------------
 

// let inputcard = document.querySelector("#fname".value);

// for (let i = 0; i < inputcard.length; index++) {
//     const element = inputcard[i];
    
// }

const createNode = () => {
    let selectHtml = document.querySelector("#repTest");
    let mainLi = document.createElement("li");
    mainLi.innerHTML = "Hello WOrld";
    //let firstsymbol = document.createTextNode();
    //mainDiv.appendChild(firstsymbol);
    selectHtml.appendChild(mainLi);
}
 




