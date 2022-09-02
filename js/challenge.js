ocument.addEventListener('DOMContentLoaded', () => {
        setInterval(incrementCounter, 1000)
        plusButton.addEventListener('click', incrementCounter)
        minusButton.addEventListener('click', decrementCounter)
        likeButton.addEventListener('click', addLike)
    })
    
    
    const plusButton = document.getElementById('plus')
    const minusButton = document.getElementById('minus')
    const likeButton = document.getElementById('heart')
    
    const counter = document.getElementById('counter')
    let counterNumber = Number.parseInt(counter.innerText)
    
    
    
    const incrementCounter = () => {
        counterNumber += 1
        counter.innerText = counterNumber
    }
    
    const decrementCounter = () => {
        counterNumber -=1
        counter.innerText = counterNumber
    }
    
    const addLike = () => {
        let likeCount = 0
        if (likeCount = 0){
            const li = document.createElement('li')
            document.querySelector('ul.likes').appendChild(li)
        }
        
    
    }
    