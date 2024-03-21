let string = "";

let buttons = document.querySelectorAll('.button');

document.addEventListener('keydown', (event) => {
    if(event.key==='Enter'){
        evaluateString();
    }
});

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string+=e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

document.addEventListener('keyup', (event) => {
    // Check if the pressed key is a digit or a mathematical operator
    if (/[\d\+\-\*\/%]/.test(event.key)) {
        string += event.key;
        document.querySelector('input').value = string;
    }
    // Check if Enter key is pressed
    else if (event.key === 'Enter') {
        evaluateString();
    }
});

// Function to evaluate the string
function evaluateString() {
if (string !== "") {
    try {
        let result = eval(string);
        document.querySelector('input').value = result;
        console.log(result);
    } catch (error) {
        console.error("Error evaluating string:", error);
    }
}
}