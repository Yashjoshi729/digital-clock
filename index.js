const header = document.querySelector('h1')
const hour = document.querySelector('.hour p')
const minute = document.querySelector('.minute p')
const second = document.querySelector('.second p')

let d 
console.log(d)
    setInterval(() => {
        d= new Date()
        hour.innerText=d.getHours()
        minute.innerText=d.getMinutes()
        second.innerText=d.getSeconds()

    }, 1000);

