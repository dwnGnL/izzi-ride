const loader = document.querySelector('#loader')

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.remove()
    }, 100)
})
