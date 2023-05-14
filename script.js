
let input1 = document.getElementById('input1')
let check1 = document.getElementById('check1')
let btn1Listen = document.getElementById('btn1Listen')
let btn1Translate = document.getElementById('btn1Translate')
let score = document.getElementById('score')
let value = score.innerHTML
let audioSword = document.getElementById('audioSword')
let translation = document.getElementById('translation')

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'are') {
        audioSword.play()
        input1.textContent = 'are'
        input1.style.color = 'lime'
        check1.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input1.disabled = true
        document.getElementById('input2').focus()
    }
})  

input1.addEventListener('keyup', (e) => {
    if (input1.value != 'are') {
        input1.style.color = 'red'
    } 
}) 

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'a') {
        input1.style.color = 'lime'
    } 
}) 

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'ar') {
        input1.style.color = 'lime'
    } 
}) 

btn1Listen.addEventListener('click', function() {
    let audio = document.getElementById('sarah1')
    audio.play()
    let audio2 = document.getElementById('click')
    audio2.play()
})

btn1Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translation.innerHTML = 'Oi, George. Como está?'
    setTimeout(() => {
        translation.innerHTML = ''
    }, 2000);
})

//Second Line

let input2 = document.getElementById('input2')
let check2 = document.getElementById('check2')
let btn2Listen = document.getElementById('btn2Listen')
let btn2Translate = document.getElementById('btn2Translate')

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'about') {
        audioSword.play()
        input2.textContent = 'about'
        input2.style.color = 'lime'
        check2.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input2.disabled = true
        document.getElementById('input3').focus()
    }
})  

input2.addEventListener('keyup', (e) => {
    if (input2.value != 'about') {
        input2.style.color = 'red'
    } 
}) 

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'a') {
        input2.style.color = 'lime'
    } 
}) 

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'ab') {
        input2.style.color = 'lime'
    } 
}) 

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'abo') {
        input2.style.color = 'lime'
    } 
}) 

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'abou') {
        input2.style.color = 'lime'
    } 
}) 

btn2Listen.addEventListener('click', function() {
    let audio = document.getElementById('george2')
    audio.play()
    let audio2 = document.getElementById('click')
    audio2.play()
})

btn2Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translation.innerHTML = 'Oi, Sarah. Estou bem e você?'
    setTimeout(() => {
        translation.innerHTML = ''
    }, 2500);
})

//Third Line

let input3 = document.getElementById('input3')
let check3 = document.getElementById('check3')
let btn3Listen = document.getElementById('btn3Listen')
let btn3Translate = document.getElementById('btn3Translate')

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'am') {
        audioSword.play()
        input3.textContent = 'am'
        input3.style.color = 'lime'
        check3.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input3.disabled = true
        document.getElementById('input4').focus()
    }
})  

input3.addEventListener('keyup', (e) => {
    if (input3.value != 'am') {
        input3.style.color = 'red'
    } 
}) 

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'a') {
        input3.style.color = 'lime'
    } 
}) 

btn3Listen.addEventListener('click', function() {
    let audio = document.getElementById('sarah3')
    audio.play()
    let audio2 = document.getElementById('click')
    audio2.play()
})

btn3Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translation.innerHTML = 'Estou ótima, obrigada! Escuta só - você tá livre neste sábado?'
    setTimeout(() => {
        translation.innerHTML = ''
    }, 3500);
})

//Fourth Line

let input4 = document.getElementById('input4')
let check4 = document.getElementById('check4')
let btn4Listen = document.getElementById('btn4Listen')
let btn4Translate = document.getElementById('btn4Translate')

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'are') {
        audioSword.play()
        input4.textContent = 'are'
        input4.style.color = 'lime'
        check4.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input4.disabled = true
        document.getElementById('input5').focus()
    }
})  

input4.addEventListener('keyup', (e) => {
    if (input4.value != 'are') {
        input4.style.color = 'red'
    } 
}) 

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'a') {
        input4.style.color = 'lime'
    } 
}) 

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'ar') {
        input4.style.color = 'lime'
    } 
}) 

btn4Listen.addEventListener('click', function() {
    let audio = document.getElementById('george4')
    audio.play()
    let audio2 = document.getElementById('click')
    audio2.play()
})

btn4Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translation.innerHTML = 'Sim. O que você está planejando?'
    setTimeout(() => {
        translation.innerHTML = ''
    }, 2000);
})

//Fifth Line

let input5 = document.getElementById('input5')
let check5 = document.getElementById('check5')
let btn5Listen = document.getElementById('btn5Listen')
let btn5Translate = document.getElementById('btn5Translate')

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'are') {
        audioSword.play()
        input5.textContent = 'are'
        input5.style.color = 'lime'
        check5.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input5.disabled = true
        document.getElementById('input6').focus()
    }
})  

input5.addEventListener('keyup', (e) => {
    if (input5.value != 'are') {
        input5.style.color = 'red'
    } 
}) 

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'a') {
        input5.style.color = 'lime'
    } 
}) 

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'ar') {
        input5.style.color = 'lime'
    } 
}) 

btn5Listen.addEventListener('click', function() {
    let audio = document.getElementById('sarah5')
    audio.play()
    let audio2 = document.getElementById('click')
    audio2.play()
})

btn5Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translation.innerHTML = 'Vou dar uma festa e você está convidado.'
    setTimeout(() => {
        translation.innerHTML = ''
    }, 2500);
})

//Sixth Line

let input6 = document.getElementById('input6')
let check6 = document.getElementById('check6')
let btn6Listen = document.getElementById('btn6Listen')
let btn6Translate = document.getElementById('btn6Translate')

input6.addEventListener('keyup', (e) => {
    if (input6.value === 'Am') {
        audioSword.play()
        input6.textContent = 'Am'
        input6.style.color = 'lime'
        check6.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input6.disabled = true
        document.getElementById('input7').focus()
    }
})  

input6.addEventListener('keyup', (e) => {
    if (input6.value != 'Am') {
        input6.style.color = 'red'
    } 
}) 

input6.addEventListener('keyup', (e) => {
    if (input6.value === 'A') {
        input6.style.color = 'lime'
    } 
}) 

btn6Listen.addEventListener('click', function() {
    let audio = document.getElementById('george6')
    audio.play()
    let audio2 = document.getElementById('click')
    audio2.play()
})

btn6Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translation.innerHTML = 'Legal! Devo levar alguma coisa?'
    setTimeout(() => {
        translation.innerHTML = ''
    }, 2500);
})

//Seventh Line

let input7 = document.getElementById('input7')
let check7 = document.getElementById('check7')
let btn7Listen = document.getElementById('btn7Listen')
let btn7Translate = document.getElementById('btn7Translate')

input7.addEventListener('keyup', (e) => {
    if (input7.value === 'is') {
        audioSword.play()
        input7.textContent = 'is'
        input7.style.color = 'lime'
        check7.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input7.disabled = true
        document.getElementById('input8').focus()
    }
})  

input7.addEventListener('keyup', (e) => {
    if (input7.value != 'is') {
        input7.style.color = 'red'
    } 
}) 

input7.addEventListener('keyup', (e) => {
    if (input7.value === 'i') {
        input7.style.color = 'lime'
    } 
}) 

btn7Listen.addEventListener('click', function() {
    let audio = document.getElementById('sarah7')
    audio.play()
    let audio2 = document.getElementById('click')
    audio2.play()
})

btn7Translate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    translation.innerHTML = 'Não se preocupe com nada. Tudo está pronto pra festa. A gente se vê!'
    setTimeout(() => {
        translation.innerHTML = ''
    }, 3500);
})


