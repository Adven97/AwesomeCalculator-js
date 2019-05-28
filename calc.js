const disp = document.querySelector('.inp');
let listOfSigns = [];
let listOfNums = [];

let listOfNumButtons = []

let isDot = false;
let isMin = false;

function addNumAndSign(sign) {
    listOfNums.push(parseFloat(disp.value));
    listOfSigns.push(sign);
    isDot = false;
}

function performCalc() {
    let licz = listOfNums[0];

    for (let i = 0; i < listOfSigns.length; i++) {
        switch (listOfSigns[i]) {
            case "+":
                licz += listOfNums[i + 1];
                break;
            case "-":
                licz -= listOfNums[i + 1];
                break;
            case "*":
                licz *= listOfNums[i + 1];
                break;
            case "/":
                if (listOfNums[i + 1] !== 0) {
                    licz /= listOfNums[i + 1];
                    break;
                }
        }
    }
    return licz.toFixed(4);
}

listOfNumButtons.push(document.querySelector('#sig0'));
listOfNumButtons.push(document.querySelector('#sig1'));
listOfNumButtons.push(document.querySelector('#sig2'));
listOfNumButtons.push(document.querySelector('#sig3'));
listOfNumButtons.push(document.querySelector('#sig4'));
listOfNumButtons.push(document.querySelector('#sig5'));
listOfNumButtons.push(document.querySelector('#sig6'));
listOfNumButtons.push(document.querySelector('#sig7'));
listOfNumButtons.push(document.querySelector('#sig8'));
listOfNumButtons.push(document.querySelector('#sig9'));

function appendNumber(num) {
    disp.value += num;
}

listOfNumButtons.forEach(butt => butt.addEventListener('click', () => {
    appendNumber(butt.textContent)
}))

// other buttons
const plus = document.querySelector('#plus');
const minus = document.querySelector('#min');
const multi = document.querySelector('#multi');
const divide = document.querySelector('#divide');
const eq = document.querySelector('#eq');
const dot = document.querySelector('#dot');
const percent = document.querySelector('#percent');
const c = document.querySelector('#c');
const plusmin = document.querySelector('#plusmin');
const bksp = document.querySelector('#bksp');


/////////////////////////////////////////////////////// action buttons

c.addEventListener('click', function () {
    disp.value = '';
});

bksp.addEventListener('click', function () {
    let tmp = disp.value;
    tmp = tmp.substring(0, tmp.length - 1);
    disp.value = tmp;
});

plusmin.addEventListener('click', function () {
    if (disp.value.length > 0) {
        let tmp = disp.value;

        if (!isMin) {
            tmp = "-" + tmp;
        } else {
            tmp = tmp.substring(1, tmp.length);
        }

        isMin = !isMin
        disp.value = tmp;
    }
});


plus.addEventListener('click', function () {
    if (disp.value.length > 0) {
        addNumAndSign("+");
        disp.value = '';
    }
});

minus.addEventListener('click', function () {
    if (disp.value.length > 0) {
        addNumAndSign("-");
        disp.value = '';
    }
});

multi.addEventListener('click', function () {
    if (disp.value.length > 0) {
        addNumAndSign("*");
        disp.value = '';
    }
});

divide.addEventListener('click', function () {
    if (disp.value.length > 0) {
        addNumAndSign("/");
        disp.value = '';
    }
});

eq.addEventListener('click', function () {
    if (listOfNums.length >= 1) {
        listOfNums.push(parseFloat(disp.value));
        disp.value = performCalc();
        listOfNums = [];
        listOfSigns = [];
    }
});

dot.addEventListener('click', function () {
    if (!isDot) {
        disp.value += '.';
        isDot = true;
    }
});

// percent.addEventListener('click', function () {
//     disp.value += '%';
// });