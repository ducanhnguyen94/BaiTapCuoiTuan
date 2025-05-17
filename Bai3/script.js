const input = document.getElementById('input');
const btn = document.getElementById('button');
const h1 = document.getElementById('h1');

function showName() {
    alert(input.value)
    console.log(input.value);
    h1.innerHTML = input.value;
}