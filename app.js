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

    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!');
        cards[cardsChosenIds[0]].setAttribute('src', 'Images/kk.webp');
        cards[cardsChosenIds[1]].setAttribute('src', 'Images/kk.webp');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    }

    cardsChosen = []
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