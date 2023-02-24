const cardArray = [
    {
        name: 'Taiyaki',
        img: 'Images/taiyaki.jpg',
    },
    {
        name: 'Seaweed rice ball',
        img: 'Images/Seaweed_Rice_Ball.jpg',
    },
    {
        name: 'Ramen',
        img: 'Images/Ramen.jpg',
    },
    {
        name: 'Lucky biscuits',
        img: 'Images/Lucky_biscuits.jpg',
    },
    {
        name: 'Cappuccino',
        img: 'Images/Cappuccino.jpg',
    },
    {
        name: 'Candied hawthorn',
        img: 'Images/Candied_Hawthorn.jpg',
    },
    {
        name: 'Taiyaki',
        img: 'Images/taiyaki.jpg',
    },
    {
        name: 'Seaweed rice ball',
        img: 'Images/Seaweed_Rice_Ball.jpg',
    },
    {
        name: 'Ramen',
        img: 'Images/Ramen.jpg',
    },
    {
        name: 'Lucky biscuits',
        img: 'Images/Lucky_biscuits.jpg',
    },
    {
        name: 'Cappuccino',
        img: 'Images/Cappuccino.jpg',
    },
    {
        name: 'Candied hawthorn',
        img: 'Images/Candied_Hawthorn.jpg',
    }
]
cardArray.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'Images/questionmark.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'Images/questionmark.png');
        cards[optionTwoId].setAttribute('src', 'Images/questionmark.png');
        alert('You have clicked the same image!')
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'Images/kk.webp');
        cards[optionTwoId].setAttribute('src', 'Images/kk.webp');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'Images/questionmark.png');
        cards[optionTwoId].setAttribute('src', 'Images/questionmark.png');
        alert('Sorry! try again.')
    }

    resultDisplay.textContent = cardsWon.length;
    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length == (cardArray.length / 2)){
        resultDisplay.textContent = 'Congratulations! you found them all!!!!';
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log('click', cardId);
    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img)

    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}