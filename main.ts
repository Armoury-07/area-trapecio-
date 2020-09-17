input.onButtonPressed(Button.AB, function () {
    basic.showString("Base mayor")
    basic.showString("=")
    basic.showNumber(base_mayor)
    basic.showString("base menor ")
    basic.showString("=")
    basic.showNumber(base_menor)
    basic.showString("Altura")
    basic.showString("=")
    basic.showNumber(altura)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio =")
    basic.showNumber(Area_Formula)
})
let Area_Formula = 0
let altura = 0
let base_menor = 0
let base_mayor = 0
basic.showString("Adrian")
base_mayor = 20
base_menor = 12
altura = randint(1, 200)
Area_Formula = (base_mayor + base_menor) / 2 * altura
