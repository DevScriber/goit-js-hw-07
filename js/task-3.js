const input = document.querySelector('#name-input');
input.addEventListener('input', parseInOutput)

function parseInOutput() {
    const output = document.querySelector('#name-output');
    
    if (input.value.trim() !== '') {
        return output.textContent = input.value.trim();
    } else {
        return output.textContent = 'Anonymous';
    }
}

input.style.marginBottom = '16px'