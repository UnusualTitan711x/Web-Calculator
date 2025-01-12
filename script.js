const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')

var bracketOpen = false

buttons.forEach((item)=>{
    item.onclick = ()=>{

        if (item.id == 'clear'){
            display.innerText = ''
        }
        else if (item.id == 'backspace'){
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length-1)
        }
        else if (display.innerText != '' && item.id == 'equal'){
            var answer = eval(display.innerText)
            let string = String(answer)
            display.innerText = string.substr(0, 13)
        }
        else if (display.innerText == '' && item.id == 'equal'){
            display.innerText == ''
        }
        else if (item.id == 'brackets'){
            if (bracketOpen == false){
                display.innerText += '('
                bracketOpen = true
            }
            else {
                display.innerText += ')'
                bracketOpen = false
            }
        }
        else{
            display.innerText += item.id
        }
    }
})