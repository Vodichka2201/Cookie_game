let text = document.querySelector('#text');
let textall = document.querySelector('#all');
let png = document.querySelector('png1');
let v = 0;
let c = 1;
let i = 0;
butt.onclick = function() {
    i = i + c;  
    v = v + c;
    text.textContent = i;
    textall.textContent = 'Всего: ' + (v);
    //Основные клики по печеньке
}

buttt.onclick = function() {
    let val = document.getElementById('elem1').value;
    f = val * 3;
    document.getElementById('str').innerHTML = "Стоимость: " + f;
    //Определение стоимости
}


go.onclick = function() {
    let buy = document.getElementById('elem1').value;
    let buy2 = document.getElementById('elem1').value;
    buy = buy * 3;
    if (i >= buy) {
        i = i - buy;
        text.textContent = i;
        c = c + parseInt(buy2);
    }
    //Покупка
};

png1.onclick = function() {
    document.body.style.backgroundImage = 'url(1.png)';    //Смена фона на первый
}
png2.onclick = function() {
    document.body.style.backgroundImage = 'url(2.png)';    //Смена фона на второй
}
png3.onclick = function() {
    document.body.style.backgroundImage = 'url(3.png)';    //Смена фона на третий
}