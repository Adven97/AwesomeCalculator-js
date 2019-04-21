const disp = document.querySelector('.inp');
let listOfSigns = [];
let listOfNums = [];

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
    return licz;
}

// digit buttons
const zero = document.querySelector('#sig0');
const one = document.querySelector('#sig1');
const two = document.querySelector('#sig2');
const three = document.querySelector('#sig3');
const four = document.querySelector('#sig4');
const five = document.querySelector('#sig5');
const six = document.querySelector('#sig6');
const seven = document.querySelector('#sig7');
const eight = document.querySelector('#sig8');
const nine = document.querySelector('#sig9');


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

zero.addEventListener('click', function () {
    disp.value += '0';
});

one.addEventListener('click', function () {
    disp.value += '1';
});

two.addEventListener('click', function () {
    disp.value += '2';
});

three.addEventListener('click', function () {
    disp.value += '3';
});

four.addEventListener('click', function () {
    disp.value += '4';
});

five.addEventListener('click', function () {
    disp.value += '5';
});

six.addEventListener('click', function () {
    disp.value += '6';
});

seven.addEventListener('click', function () {
    disp.value += '7';
});

eight.addEventListener('click', function () {
    disp.value += '8';
});

nine.addEventListener('click', function () {
    disp.value += '9';
});

/////////////////////////////////////////////////////// action buttons

c.addEventListener('click', function () {
    disp.value = '';
});

bksp.addEventListener('click', function () {
    //remove last sign
});

plusmin.addEventListener('click', function () {
    if (disp.value.length > 0) {
        let tmp = disp.value;
        
        if (!isMin) {
            tmp = "-" + tmp;
        } 
        else {
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