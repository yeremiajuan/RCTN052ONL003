const kalkulator = {
    layar: '0',
    store: [],
    currentNumber: null,
    nextNumber: null,
    operatorIsClicked: false,
    afterHitung: false,
    pointToggle: false,
    temp: ''
};

function tampilkan() {
    document.querySelector("#layar").innerText = kalkulator.layar;
}

function clearEntry() {
    if (kalkulator.afterHitung) {
        kalkulator.layar = '0'
        kalkulator.store = []
        kalkulator.currentNumber = null
        kalkulator.nextNumber = null
        kalkulator.operatorIsClicked = false
        kalkulator.afterHitung = false
        kalkulator.pointToggle = false
        kalkulator.temp = ''

    }
    else if (kalkulator.store.length < 2) {
        kalkulator.layar = '0'
        kalkulator.store = []
        kalkulator.currentNumber = null
        kalkulator.nextNumber = null
        kalkulator.operatorIsClicked = false
        kalkulator.afterHitung = false
        kalkulator.pointToggle = false
        kalkulator.temp = ''
    }
    else {
        kalkulator.temp = '';
        kalkulator.layar = kalkulator.store.join("");
    }


}

function NaNHandler() {
    alert("Undefined atau hasil is not a number :)");

    kalkulator.layar = '0'
    kalkulator.store = []
    kalkulator.currentNumber = null
    kalkulator.nextNumber = null
    kalkulator.operatorIsClicked = false
    kalkulator.afterHitung = false
    kalkulator.pointToggle = false
    kalkulator.temp = ''
}

function clearAll() {
    kalkulator.layar = '0'
    kalkulator.store = []
    kalkulator.currentNumber = null
    kalkulator.nextNumber = null
    kalkulator.operatorIsClicked = false
    kalkulator.afterHitung = false
    kalkulator.pointToggle = false
    kalkulator.temp = ''
}

function inputDigit(digit) {

    if (kalkulator.afterHitung) {
        kalkulator.layar = '0';
        kalkulator.temp = '';
        kalkulator.store = [];
    }
    console.log(digit);
    if (digit === '.' && kalkulator.pointToggle == false) {
        if (kalkulator.layar === '0') {
            kalkulator.layar = digit;
            kalkulator.temp = digit;
            kalkulator.pointToggle = true;
            kalkulator.operatorIsClicked = false;
            kalkulator.afterHitung = false;
        } else {
            kalkulator.layar += digit;
            kalkulator.temp += digit;
            kalkulator.pointToggle = true;
            kalkulator.operatorIsClicked = false;
            kalkulator.afterHitung = false;
        }
    }
    else if (digit === '.' && kalkulator.pointToggle == true) {
        //do nothing
        alert("sudah menerapkan koma")
    }
    else {
        if (kalkulator.layar === '0') {
            kalkulator.layar = digit;
            kalkulator.temp += digit;
            kalkulator.operatorIsClicked = false;
            kalkulator.afterHitung = false;
        } else {
            kalkulator.layar += digit;
            kalkulator.temp += digit;
            kalkulator.operatorIsClicked = false;
            kalkulator.afterHitung = false;
        }
    }

}

const buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener('click', function (event) {

        // mendapatkan objek elemen yang diklik
        const target = event.target;
        if (target.className.includes('ce')) {
            clearEntry();
            tampilkan();
            return;
        }

        if (target.className.includes('ac')) {
            clearAll();
            tampilkan();
            return;
        }

        if (target.className.includes('hasil')) {
            hitung();
            tampilkan();
            return;
        }

        if (target.className == 'operator') {
            handleOperator(target.textContent);
            tampilkan();
            return;
        }


        inputDigit(target.textContent);
        tampilkan()

    });


}

function handleOperator(operator) {

    if (!kalkulator.operatorIsClicked) {
        kalkulator.afterHitung = false;
        if (kalkulator.layar == '0' && kalkulator.temp == '') {
            kalkulator.store.push('0');
        }
        kalkulator.layar += operator;
        if (kalkulator.temp != '') {
            kalkulator.store.push(kalkulator.temp);
        }
        kalkulator.store.push(operator);
        kalkulator.temp = '';
        kalkulator.operatorIsClicked = true;
        kalkulator.pointToggle = false;
    }

    console.log(kalkulator.store);

}
function hitung() {

    let result = 0;

    if (kalkulator.temp != "") {
        kalkulator.store.push(kalkulator.temp);
        console.log(kalkulator.store)
        let hitungin = kalkulator.store;

        if (hitungin.includes('*') || hitungin.includes('/')) {
            while (hitungin.includes('*') || hitungin.includes('/')) {
                for (let i = 0; i < hitungin.length; i++) {
                    if (hitungin[i] == '*') {
                        result = Number(hitungin[i - 1]) * Number(hitungin[i + 1]);
                        hitungin.splice(i - 1, 3, result);

                    }
                    if (hitungin[i] == '/') {
                        result = Number(hitungin[i - 1]) / Number(hitungin[i + 1]);
                        hitungin.splice(i - 1, 3, result);
                        console.log(hitungin + 'AAAAAAAAAAABBBBBBBBB');
                    }
                }
            }
        }
        console.log(hitungin + "AAAAA");
        if (hitungin.includes('+') || hitungin.includes('-')) {
            while (hitungin.includes('+') || hitungin.includes('-')) {
                for (let i = 0; i < hitungin.length; i++) {
                    if (hitungin[i] == '+') {
                        result = Number(hitungin[i - 1]) + Number(hitungin[i + 1]);
                        hitungin.splice(i - 1, 3, result);
                        console.log(hitungin);
                    }
                    if (hitungin[i] == '-') {
                        result = Number(hitungin[i - 1]) - Number(hitungin[i + 1]);
                        hitungin.splice(i - 1, 3, result);
                        console.log(hitungin);
                    }
                }
            }
        }


        console.log(hitungin.toString());
        kalkulator.layar = kalkulator.layar + "=" + hitungin.toString();
        kalkulator.pointToggle = false;
        kalkulator.temp = '';
        kalkulator.afterHitung = true;
        if (isNaN(kalkulator.store[0])) {
            NaNHandler();
        }
    }

}