let beat = 0
let tone = 0
basic.forever(function () {
    basic.showNumber(beat)
})
basic.forever(function () {
    tone = Math.map(input.temperature(), -5, 50, 200, 800)
    beat = Math.map(input.temperature(), -5, 50, 1000, 62.5)
    music.playTone(tone, beat)
})
