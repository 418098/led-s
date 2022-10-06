basic.forever(function () {
    for (let Y = 0; Y <= 4; Y++) {
        for (let X = 0; X <= 4; X++) {
            if (Y % 2 != 0) {
                led.plot(4 - X, Y)
            } else {
                led.plot(0 + X, Y)
            }
            basic.pause(100)
        }
    }
})
