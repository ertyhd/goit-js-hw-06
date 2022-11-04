const refs = {
    inputEll: document.querySelector('#name-input'),
    outputEll: document.querySelector('#name-output'),
};

refs.inputEll.addEventListener('input', (event) => {
    refs.outputEll.textContent = event.currentTarget.value.trim();
    if(refs.outputEll.textContent.length === 0) {refs.outputEll.textContent = "Anonymous"};
});
