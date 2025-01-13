// Get access to the calculator display, buttons and explosions
const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')
const explosions = document.querySelectorAll('#explosion')

var bracketOpen = false

// Perform actions depending on which button is pressed
buttons.forEach((item)=>{
    item.onclick = ()=>{

        // Clear display if 'clear' button is pressed
        if (item.id == 'clear'){
            display.innerText = ''
        }

        // Delete the last character in the calculatr display when 'backspace' is pressed
        else if (item.id == 'backspace'){
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length-1)
        }

        // Check if the calculator has something in the display, calculate and show result
        else if (display.innerText != '' && item.id == 'equal'){
            var answer = eval(display.innerText)
            let string = String(answer)
            display.innerText = string

            // Display fireworks if the result is 2025
            if (display.innerText == 2025){
                ActivateExplosions()
            }
                
        }

        // Leave the display as it is if the equal button is pressed when nothing shows
        else if (display.innerText == '' && item.id == 'equal'){
            display.innerText == ''
        }

        // Manage the brackets 
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

        // If no other operator is pressed, then just add the value of the button to the display string
        else{
            display.innerText += item.id
        }
    }
})

// Functions to activate the fireworks
function ActivateExplosions()
{
    explosions.forEach((item) => {
        item.classList.add("active-explosion")
    })
}