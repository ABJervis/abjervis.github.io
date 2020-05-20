document.addEventListener('DOMContentLoaded',() => {

    //this is the array where the cards live. Establish name an assign the image from image folder
    const cardArray = [
        {
            name: 'heart',
            img: 'images/heart.jpg'
        }, 
        { 
            name: 'heart',
            img: 'images/heart.jpg'
        },
        {
            name: 'flower',  
            img: 'images/flower.png'
        }, 
        { 
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'rainbow',
            img: 'images/rainbow.png'
        }, 
        { 
            name: 'rainbow',
            img: 'images/rainbow.png'
        },
        {
            name: 'skates',
            img: 'images/skates.png'
        }, 
        { 
            name: 'skates',
            img: 'images/skates.png'
        },
        {
            name: 'unicorn',
            img: 'images/unicorn.png'
        }, 
        { 
            name: 'unicorn',
            img: 'images/unicorn.png'
        },
        {
            name: 'sunglasses',
            img: 'images/sunglasses.jpg'
        }, 
        { 
            name: 'sunglasses',
            img: 'images/sunglasses.jpg'
        }
    ]

    // set random selection so board resets when game is won.

    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    
    //show score
    const resultDisplay = document.querySelector('#result')
   
    //set empty arrays to hold cards, chosen the card ID and the cards won
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

 //create game board. This sets and assigns the space for the cards. Back of cards are face up. 

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/back.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card) //this puts all cards within the grid 
        }
    }

    //check for match

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert("You're so awesome!")
            cards[optionOneId].setAttribute('src', 'images/black.jpg')
            cards[optionTwoId].setAttribute('src', 'images/black.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/back.jpg')
            cards[optionTwoId].setAttribute('src', 'images/back.jpg')
            alert("Try again, Nut!")
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = "Yay, Nut! You've found them all!"
        }
        
    }

    //flip the card
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    //check for match

    createBoard(); 
})
