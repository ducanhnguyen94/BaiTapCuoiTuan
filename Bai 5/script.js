const a = document.getElementById('a');
const b = document.getElementById('b');
const btn = document.getElementById('button');
let cv = document.getElementById('cv');
let dt = document.getElementById('dt');

btn.addEventListener('click', () => {
    cv.innerHTML = (Number(a.value) + Number(b.value)) * 2;
    dt.innerHTML = a.value * b.value;
})

