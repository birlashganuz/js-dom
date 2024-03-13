let item = document.querySelectorAll('.item')
item.forEach(item => {
    item.addEventListener('click', () => {

        if (item.style.background == '' || item.style.background == 'green') {
            item.style.background = 'red'
            item.innerHTML = item.style.background
            item.innerHTML = item.innerHTML.toUpperCase()
        } else if (item.style.background == 'red') {
            item.style.background = 'yellow'
            item.innerHTML = item.style.background
            item.innerHTML = item.innerHTML.toUpperCase()

        } else {
            item.style.background = 'green'
            item.innerHTML = item.style.background
            item.innerHTML = item.innerHTML.toUpperCase()
        }


    })
})

