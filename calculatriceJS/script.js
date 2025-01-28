document.addEventListener("DOMContentLoaded", function() {
    const result = document.querySelector('.result');
    const buttons = document.querySelectorAll('.buttons button');

    let currentInput = '';
    let previousInput = '';
    let operation = '';

    // Fonction pour mettre à jour l'écran
    function updateScreen() {
        result.textContent = currentInput;
    }

    // Fonction pour effectuer une opération
    function calculate() {
        let result = 0;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                return;
        }
        
        currentInput = result.toString();
        previousInput = '';
        operation = '';
        updateScreen();
    }

    // Gestion des clics sur les boutons numériques et opérateurs
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.textContent;
            if (!isNaN(value) || value === '.') {
                // Si le bouton cliqué est un chiffre ou un point, l'ajouter à l'entrée actuelle
                currentInput += value;
                updateScreen();
            } else if (value === 'C') {
                // Si le bouton cliqué est "C", effacer l'écran
                currentInput = '';
                updateScreen();
            } else if (value === '=') {
                // Si le bouton cliqué est "=", effectuer le calcul
                calculate();
            } else {
                // Si le bouton cliqué est un opérateur, enregistrer l'opération
                previousInput = currentInput;
                currentInput = '';
                operation = value;
            }
        });
    });
});