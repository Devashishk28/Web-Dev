var btn = document.querySelector('button')
var main = document.querySelector('main')

btn.addEventListener('click', function () {

    var bubble = document.createElement('div')
    bubble.classList.add('bubble')

    var x = Math.random() * 90
    bubble.style.left = x + '%'

    main.appendChild(bubble)

    // Auto remove after animation
    setTimeout(function () {
        bubble.remove()
    }, 4000)

    // Burst on click
    bubble.addEventListener('click', function () {
        bubble.classList.add('burst')
        setTimeout(function () {
            bubble.remove()
        }, 300)
    })

})
