document.addEventListener('DOMContentLoaded',() => {

    //cards
    const cardArray = [
        {
            name: 'heart',
            img: 'images/heart.jpg'
        }, 
        { 
            name: 'heart',
            img: 'images/heart.jpg'
        }
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

    //create game board

    const grid = document.querySelector('.grid')

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/black.jpg')
            card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
            grid.appendChild(card) //this puts all cards within the grid 
        }
    }

    //find match


    }
)