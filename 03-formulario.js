const nameTitle = document.querySelector('#edad');
const input = document.querySelector('#input');

const readAge = () => {
    const inputValue = input.value;
    const mensaje = inputValue >=18 ? 'Eres mayor de edad': 'Eres menor de edad';
    edad.textContent = mensaje;
}