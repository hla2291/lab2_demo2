let beat = 0
let tone = 0
basic.forever(function () {
    beat = Math.map(input.temperature(), -5, 50, music.beat(BeatFraction.Breve), music.beat(BeatFraction.Sixteenth))
    tone = Math.map(input.temperature(), -5, 50, 100, 1000)
    music.playTone(tone, beat)
})
