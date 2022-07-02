let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let num = document.querySelector('.num')

btn.addEventListener('click', function () {
    let inputValue = input.value
    input.value = ''
    let timeleft = inputValue
    let downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer)
            num.style.opacity = '0'
            num.style.display = 'none'
        } else {
            document.getElementById('countdown').innerHTML = timeleft
            num.style.opacity = '1'
            num.style.display = 'block'
        }
        timeleft -= 1
    }, 1000)
})
