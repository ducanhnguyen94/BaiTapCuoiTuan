const result = document.getElementById('result');
const moNgoac = document.getElementById('moNgoac');
const dongNgoac = document.getElementById('dongNgoac');
const phanTram = document.getElementById('phanTram');
const AC = document.getElementById('AC');
const phepChia = document.getElementById('division');
const phepNhan = document.getElementById('multiply');
const phepTru = document.getElementById('subtract');
const phepCong = document.getElementById('add');
const ketQua = document.getElementById('equal');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');

let phepTinh = [];
let phepTinhThat = []

one.addEventListener('click', () => {
    phepTinh.push(1);
    phepTinhThat.push(1);
    result.innerHTML = phepTinh.join('')
})

two.addEventListener('click', () => {
    phepTinh.push(2);
    phepTinhThat.push(2);
    result.innerHTML = phepTinh.join('')
})

three.addEventListener('click', () => {
    phepTinh.push(3);
    phepTinhThat.push(3);
    result.innerHTML = phepTinh.join('')
})

four.addEventListener('click', () => {
    phepTinh.push(4);
    phepTinhThat.push(4);
    result.innerHTML = phepTinh.join('')
})

five.addEventListener('click', () => {
    phepTinh.push(5);
    phepTinhThat.push(5);
    result.innerHTML = phepTinh.join('')
})

six.addEventListener('click', () => {
    phepTinh.push(6);
    phepTinhThat.push(6);
    result.innerHTML = phepTinh.join('')
})

seven.addEventListener('click', () => {
    phepTinh.push(7);
    phepTinhThat.push(7);
    result.innerHTML = phepTinh.join('')
})

eight.addEventListener('click', () => {
    phepTinh.push(8);
    phepTinhThat.push(8);
    result.innerHTML = phepTinh.join('')
})

nine.addEventListener('click', () => {
    phepTinh.push(9);
    phepTinhThat.push(9);
    result.innerHTML = phepTinh.join('')
})

zero.addEventListener('click', () => {
    if (phepTinh.length === 0) {
        return;
    } else {
        phepTinh.push(0);
        phepTinhThat.push(0);
        result.innerHTML = phepTinh.join('')
    }   
})

moNgoac.addEventListener('click', () => {
    phepTinh.push('(');
    phepTinhThat.push('(');
    result.innerHTML = phepTinh.join('')
})

dongNgoac.addEventListener('click', () => {
    phepTinh.push(')');
    phepTinhThat.push(')');
    result.innerHTML = phepTinh.join('')
})

phepTru.addEventListener('click', () => {
    phepTinh.push('-');
    phepTinhThat.push('-');
    result.innerHTML = phepTinh.join('')
})

phepCong.addEventListener('click', () => {
    phepTinh.push('+');
    phepTinhThat.push('+');
    result.innerHTML = phepTinh.join('')
})

phepNhan.addEventListener('click', () => {
    phepTinh.push('x');
    phepTinhThat.push('*');
    result.innerHTML = phepTinh.join('')
})

phepChia.addEventListener('click', () => {
    phepTinh.push('/');
    phepTinhThat.push('/');
    result.innerHTML = phepTinh.join('')
})

phanTram.addEventListener('click', () => {
    phepTinh.push('%');
    phepTinhThat.push('/100');
    result.innerHTML = phepTinh.join('')
})

dot.addEventListener('click', () => {
    phepTinh.push('.');
    phepTinhThat.push('.');
    result.innerHTML = phepTinh.join('')
})

AC.addEventListener('click', () => {
    result.innerHTML = '0';
    phepTinh = [];
    phepTinhThat = [];
})

equal.addEventListener('click', () => {
    result.innerHTML = eval(phepTinhThat.join(''));
    phepTinh = [];
    phepTinhThat = [];
})