const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const toggleBtn = document.getElementById("toggleTheme");

let expression = "";
const operators = ['+', '-', '*', '/', '%'];

// Kalkulator
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'AC') {
            expression = '';
            display.value = '';
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            display.value = expression;
        } else if (value === '=') {
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch (error) {
                display.value = 'error';
                expression = '';
            }
        } else {
            if (operators.includes(value) && operators.includes(expression.slice(-1))) {
                expression = expression.slice(0,-1)+ value
                display.value = expression
                return; 
            }

            expression += value;
            display.value = expression;
        }
    });
});

// Toggle tema
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
        toggleBtn.textContent = "Dark Mode";
    } else {
        toggleBtn.textContent = "White Mode";
    }
});
