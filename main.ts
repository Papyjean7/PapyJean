input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    servos.P0.run(0)
    servos.P1.run(0)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        `)
    servos.P1.run(-44)
    servos.P0.run(100)
})
function initUltraSon () {
    Sonar = 1023
}
function lireUltraSon () {
    basic.clearScreen()
    Sonar = grove.measureInCentimetersV2(DigitalPin.P8)
    if (Sonar < 5) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        if (Sonar < 12.5) {
            basic.showLeds(`
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                . . # . .
                `)
        } else {
            if (Sonar < 25) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
            } else {
                if (Sonar < 50) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . # . .
                        . . # . .
                        `)
                } else {
                    if (Sonar < 50) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . # . .
                            `)
                    } else {
                        basic.clearScreen()
                    }
                }
            }
        }
    }
}
function servoP0P1 () {
	
}
let Sonar = 0
initUltraSon()
basic.forever(function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.UntilDone)
    lireUltraSon()
})
