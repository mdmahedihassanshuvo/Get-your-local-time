const displayClock = setInterval(clock, 1000)

function clock() {
    let date = new Date().toLocaleTimeString()
    document.getElementById('show-time').innerText = date
}
// console.log(displayClock)
document.getElementById('start-btn').addEventListener('click', function () {
    const displayClock = setInterval(clock, 1000)

    function clock() {
        let date = new Date().toLocaleTimeString()
        document.getElementById('show-time').innerText = date
    }
})

