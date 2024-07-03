"use strict"

/*
#1 Черепашке нужно забраться на вершину холма.
Расстояние от подножия холма до его вершины - 100м.
Черепашка за день залезает вверх по холму на 50м.
Ночью она спит и скатывается на 30м вниз.
На какие сутки черепашка залезет на столб?
Требуется написать код на JS для решения задачи и дать ответ
*/

const DISTANCE = 100
const SPEED_PER_DAY = 50
const LOSS_PER_DAY = 30

const calculateTurtleDay = (): number => Math.ceil(DISTANCE / (SPEED_PER_DAY - LOSS_PER_DAY))
const calculated = calculateTurtleDay()
console.log(`Черепашке потребуется ${calculated} дней (на ${calculated + 1} сутки залезет на холм)`)

/*
#2 В комнате находится человек.
Через какое-то время в комнату заходит еще один человек и здоровается с первым.
Людей в комнате становится 2, а счетчик рукопожатий становится равен 1.
Через какое-то время заходит еще один человек и здоровается с другими людьми в комнате.
Людей в комнате - 3 и счетчик рукопожатий - 3. И т.д.
Требуется написать код на JS для подсчета кол-ва рукопожатий для 10 человек и дать ответ.
*/

// для n человек при инкременте t рукопожатий становится:
// t = t + n
// n = n + 1

const HUMAN_NUMBER = 10

const calculateHandshakes = () => {
    let handshakes = 0
    let people = 0

    for (let i = 0; i < HUMAN_NUMBER; i++) {
        handshakes = handshakes + people
        people += 1
    }
    return handshakes
}

//Или

const calculateHandshakesMath = () => ((HUMAN_NUMBER - 1) * HUMAN_NUMBER) / 2

console.log(`Для ${HUMAN_NUMBER} людей количество рукопожатий: ${calculateHandshakes()}`)
console.log(`Для ${HUMAN_NUMBER} людей количество рукопожатий: ${calculateHandshakesMath()}`)

/*
Есть строка с большим кол-вом слов через запятую (например: "кошка,собака,лошадь,корова,кошка...").
Известно, что в строке встречаются повторяющиеся слова.
Нужно написать функцию на JS.
На вход передаются строка с дублями, а на выходе мы получаем строку без дублей.
Помимо кода на 1и 2задачу нужно предоставить числовой ответ.
*/

const inputString: string = "кошка,собака,бык,собака,лошадь,корова,кошка"

const makeSetString = (input: string): string => {
    const wordsArray = input.split(",")
    const noDuplicatesArray = Array.from(new Set(wordsArray))
    return noDuplicatesArray.join(",")
}

console.log(makeSetString(inputString))