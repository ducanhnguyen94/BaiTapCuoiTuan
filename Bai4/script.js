const a = document.getElementById('a');
const b = document.getElementById('b');
const btn = document.getElementById('button');
let output = document.getElementById('h1');

btn.addEventListener('click', () => {
    if (a.value === b.value) {
    output.innerHTML = "a bằng b"
} else if (a.value > b.value) {
    output.innerHTML = "a lớn hơn b"
} else {
    output.innerHTML = "a khác b"
}
})

