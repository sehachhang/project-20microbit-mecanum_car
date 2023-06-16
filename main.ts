function car_back () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speed_LF)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speed_LB)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speed_RF)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed_RB)
}
function car_move_RF () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, speed_LF)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 0)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 0)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speed_RB)
}
function drift_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 0)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speed_LB)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 0)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speed_RB)
}
function car_left () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speed_LF)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speed_LB)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speed_RF)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speed_RB)
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
    connect_flag = 1
    while (connect_flag == 1) {
        ble_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
        serial.writeString(ble_val)
        serial.writeLine("")
        if (ble_val == "a") {
            car_forward()
        } else if (ble_val == "b") {
            car_left()
        } else if (ble_val == "c") {
            car_back()
        } else if (ble_val == "d") {
            car_right()
        } else if (ble_val == "k") {
            car_left_move()
        } else if (ble_val == "h") {
            car_right_move()
        } else if (ble_val == "g") {
            car_move_RF()
        } else if (ble_val == "i") {
            car_move_RB()
        } else if (ble_val == "j") {
            car_move_LB()
        } else if (ble_val == "l") {
            car_move_LF()
        } else if (ble_val == "s") {
            mecanumRobot.state(MotorState.stop)
        } else if (ble_val == "t") {
            mecanumRobot.setLed(LedCount.Left, LedState.ON)
            mecanumRobot.setLed(LedCount.Right, LedState.ON)
        } else if (ble_val == "u") {
            mecanumRobot.setLed(LedCount.Left, LedState.OFF)
            mecanumRobot.setLed(LedCount.Right, LedState.OFF)
        } else if (ble_val == "e") {
            drift_left()
        } else if (ble_val == "f") {
            drift_right()
        } else if (ble_val == "m") {
            if (color_num < 9) {
                color_num = color_num + 1
            }
            showcolor()
        } else if (ble_val == "n") {
            if (color_num > 0) {
                color_num = color_num - 1
            }
            showcolor()
        } else if (ble_val == "o") {
            strip.clear()
            strip.show()
        } else if (ble_val == "v") {
            ble_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
            basic.pause(100)
            speed_LF = parseFloat(ble_val)
            basic.pause(100)
            serial.writeNumber(speed_LF)
            serial.writeLine("")
        } else if (ble_val == "w") {
            ble_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
            basic.pause(100)
            speed_LB = parseFloat(ble_val)
            basic.pause(100)
            serial.writeNumber(speed_LB)
            serial.writeLine("")
        } else if (ble_val == "x") {
            ble_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
            basic.pause(100)
            speed_RF = parseFloat(ble_val)
            basic.pause(100)
            serial.writeNumber(speed_RF)
            serial.writeLine("")
        } else if (ble_val == "y") {
            ble_val = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
            basic.pause(100)
            speed_RB = parseFloat(ble_val)
            basic.pause(100)
            serial.writeNumber(speed_RB)
            serial.writeLine("")
        }
    }
})
function car_move_LB () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speed_LF)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, 0)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, 0)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed_RB)
}
function showcolor () {
    if (color_num == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (color_num == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (color_num == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (color_num == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (color_num == 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (color_num == 5) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (color_num == 6) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (color_num == 7) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (color_num == 8) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    strip.show()
}
function car_move_RB () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 0)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speed_LB)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speed_RF)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, 0)
}
function tracking () {
    if (mecanumRobot.LineTracking(LT.Left) == 1 && mecanumRobot.LineTracking(LT.Right) == 0) {
        car_left()
    } else if (mecanumRobot.LineTracking(LT.Left) == 0 && mecanumRobot.LineTracking(LT.Right) == 1) {
        car_right()
    } else if (mecanumRobot.LineTracking(LT.Left) == 1 && mecanumRobot.LineTracking(LT.Right) == 1) {
        car_forward()
    } else {
        mecanumRobot.state(MotorState.stop)
    }
}
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.SmallHeart)
})
function car_right_move () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, speed_LF)
    mecanumRobot.Motor(LR.Lower_left, MD.Back, speed_LB)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speed_RF)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speed_RB)
}
function drift_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, 0)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speed_LB)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, 0)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed_RB)
}
function follow () {
    mecanumRobot.setServo(90)
    basic.pause(500)
    if (mecanumRobot.ultra() < 10) {
        car_back()
    } else if (mecanumRobot.ultra() < 20) {
        mecanumRobot.state(MotorState.stop)
    } else if (mecanumRobot.ultra() < 40) {
        car_forward()
    } else {
        mecanumRobot.state(MotorState.stop)
    }
}
function car_move_LF () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, 0)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speed_LB)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speed_RF)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, 0)
}
function avoid () {
    distance = mecanumRobot.ultra()
    if (distance < 20) {
        mecanumRobot.state(MotorState.stop)
        basic.pause(500)
        mecanumRobot.setServo(180)
        basic.pause(500)
        distance_l = mecanumRobot.ultra()
        basic.pause(500)
        mecanumRobot.setServo(10)
        basic.pause(500)
        distance_r = mecanumRobot.ultra()
        basic.pause(500)
        if (distance_l > distance_r) {
            car_left()
            basic.pause(300)
        } else {
            car_right()
            basic.pause(300)
        }
    } else {
        basic.pause(500)
        car_forward()
        mecanumRobot.setServo(90)
    }
}
function car_forward () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, speed_LF)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speed_LB)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speed_RF)
    mecanumRobot.Motor(LR.Lower_right, MD.Forward, speed_RB)
}
function car_left_move () {
    mecanumRobot.Motor(LR.Upper_left, MD.Back, speed_LF)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speed_LB)
    mecanumRobot.Motor(LR.Upper_right, MD.Forward, speed_RF)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed_RB)
}
function car_right () {
    mecanumRobot.Motor(LR.Upper_left, MD.Forward, speed_LF)
    mecanumRobot.Motor(LR.Lower_left, MD.Forward, speed_LB)
    mecanumRobot.Motor(LR.Upper_right, MD.Back, speed_RF)
    mecanumRobot.Motor(LR.Lower_right, MD.Back, speed_RB)
}
let distance_r = 0
let distance_l = 0
let distance = 0
let ble_val = ""
let connect_flag = 0
let strip: neopixel.Strip = null
let color_num = 0
let speed_RF = 0
let speed_RB = 0
let speed_LF = 0
let speed_LB = 0
serial.redirectToUSB()
speed_LB = 75
speed_LF = 75
speed_RB = 75
speed_RF = 75
color_num = 0
strip = neopixel.create(DigitalPin.P8, 4, NeoPixelMode.RGB)
basic.showIcon(IconNames.House)
basic.forever(function () {
    if (ble_val == "p") {
        tracking()
    } else if (ble_val == "q") {
        follow()
    } else if (ble_val == "r") {
        avoid()
    } else if (ble_val == "s") {
        mecanumRobot.state(MotorState.stop)
        mecanumRobot.setServo(90)
    }
})
