basic.forever(function () {
    if (zoombit.isLineDetectedOn(LinePosition.Center)) {
        zoombit.move(MotorDirection.Forward, 100)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (zoombit.isLineDetectedOn(LinePosition.Left1)) {
        zoombit.setMotorsSpeed(50, 100)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    } else if (zoombit.isLineDetectedOn(LinePosition.Right1)) {
        zoombit.setMotorsSpeed(100, 50)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
    } else if (zoombit.isLineDetectedOn(LinePosition.Left2)) {
        zoombit.setMotorsSpeed(0, 100)
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # # #
            . . # # .
            . . # . .
            `)
    } else if (zoombit.isLineDetectedOn(LinePosition.Right2)) {
        zoombit.setMotorsSpeed(100, 0)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    } else if (zoombit.isLineDetectedOn(LinePosition.None)) {
        zoombit.move(MotorDirection.Backward, 70)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        zoombit.setMotorsSpeed(0, 0)
    }
})
