function mostrarCampoOutro(selectElement, targetId) {
    var outroOption = selectElement.options[selectElement.selectedIndex].value;
    var targetInput = document.getElementById(targetId);
    if (outroOption === 'outra') {
        targetInput.style.display = 'block';
        targetInput.setAttribute('required', 'true');
    } else {
        targetInput.style.display = 'none';
        targetInput.removeAttribute('required');
        targetInput.value = '';
    }
}
