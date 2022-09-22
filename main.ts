let tone = 0
let beat = 0
basic.forever(function () {
    tone = Math.map(input.temperature(), -5, 50, 200, 800)
    beat = Math.map(input.temperature(), -5, 50, 1000, 62.5)
    music.playTone(tone, beat)
})
