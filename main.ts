basic.forever(function () {
	
})
basic.forever(function () {
    if (true) {
        basic.clearScreen()
        basic.showString("t=")
        basic.showNumber(input.temperature())
        basic.showString("DEGRES")
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
