const display = document.getElementById('display')
const buttons = document.querySelectorAll('.btn')


let expression = "";

buttons.forEach(
    button => {
        button.addEventListener('click',() =>{
            const value =button.getAttribute('data-value')

            if(value === 'AC'){
                expression = ''
                display.value = ''
            }else if (value === 'DEL') {
                expression = expression.slice(0, -1)
                display.value = expression
            }else if (value === '='){
                try{
                    expression = eval(expression).toString()
                    display.value = expression
                }catch (error){
                    display.value = 'error'
                    expression = ''
                }
            }
            else{
                expression+= value
                display.value = expression
            }
        })
    }
)
