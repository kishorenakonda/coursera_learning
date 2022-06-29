// With Individual Methods
function makeBodyColorViolet() {
    document.body.style.background = 'violet';
}

function makeBodyColorIndigo() {
    document.body.style.background = 'indigo';
}

function makeBodyColorBlue() {
    document.body.style.background = 'blue';
}

document.getElementById("violet").addEventListener('click', makeBodyColorViolet);
document.getElementById("indigo").addEventListener('click', makeBodyColorIndigo);
document.getElementById("blue").addEventListener('click', makeBodyColorBlue);

// With Common Method
function changeColor(color) {
    document.body.style.background = color;
}

document.getElementById("green").addEventListener('click', () => changeColor("green"));
document.getElementById("yellow").addEventListener('click', () => changeColor("yellow"));
document.getElementById("orange").addEventListener('click', () => changeColor("orange"));