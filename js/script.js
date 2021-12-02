const sekund = document.querySelector('.s'),
    minut = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes')

function clock() {
    const time = new Date(),
        sek = time.getSeconds() * 6,
        min = time.getMinutes() * 6,
        hours = time.getHours() * 30
    sekund.style.transform = `rotate(${sek}deg)`
    // sekund.style.transition = '1s linear'
    minut.style.transform = `rotate(${min}deg)`
    hour.style.transform = `rotate(${hours}deg)`
    setTimeout(() => {
        clock()
    }, 1000);

    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem ')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', () => {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}