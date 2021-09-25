const nameTitle = document.querySelector('#name');
const input = document.querySelector('#input');

const writeName = () => {
    const inputValue = input.ariaValueMax;
    nameTitle.textContent = inputValue;
}