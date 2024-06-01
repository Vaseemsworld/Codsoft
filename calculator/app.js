const inputField = document.querySelector('input');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    btn.addEventListener('click', ({ target }) => {
        const buttonText = target.innerText;
        const currentInput = inputField.value;
        const lastChar = currentInput.slice(-1);

        switch (buttonText) {
            case 'C':
                inputField.value = '';
                break;
            case 'X':
                inputField.value = currentInput.slice(0, -1);
                break;
            case '=':
                if (currentInput) {
                    try {
                        inputField.value = eval(currentInput);
                    } catch {
                        inputField.value = '';
                    }
                }
                break;
            default:
                handleDefault(buttonText, currentInput, lastChar);
                break;
        }
    });
});

const isOperator = (char) => ['%', '*', '/', '+', '-'].includes(char);

const handleDefault = (buttonText, currentInput, lastChar) => {
    if (isOperator(buttonText)) {
        if (!currentInput) {
            if (buttonText === '-') {
                inputField.value += buttonText;
            }
        } else if (isOperator(lastChar)) {
            inputField.value = currentInput.slice(0, -1) + buttonText;
        } else {
            inputField.value += buttonText;
        }
    } else {
        inputField.value += buttonText;
    }
};
