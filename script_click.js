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
}

buttt.onclick = function() {
    let val = document.getElementById('elem1').value;
    f = val * 3;
    document.getElementById('str').innerHTML = "Стоимость: " + f;

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
};

png1.onclick = function() {
    document.body.style.backgroundImage = 'url(1.png)';    
}
png2.onclick = function() {
    document.body.style.backgroundImage = 'url(2.png)';    
}
png3.onclick = function() {
    document.body.style.backgroundImage = 'url(3.png)';    
}

/*
document.addEventListener('click', function(e) {
    if(e.target.className == "png1") {
        png.src = '2.png';
    }
})
*/
/*
document.addEventListener("click", function(e) {
    if (e.target.className == "button") {
        if (i > 50) {
            i = i - 50;
            c++
            text.textContent = (i);
        }
    }
});
document.addEventListener("click", function(e) {
    if (e.target.className == "button100") {
        if (i > 100) {
            i = i - 100;
            c = c + 10
            text.textContent = (i);
        }
    }
});
document.addEventListener("click", function(e) {
    if (e.target.className == "button1000") {
        if (i > 1000) {
            i = i - 1000;
            c = c + 100
            text.textContent = (i);
        }
    }
});
document.addEventListener("click", function(e) {
    if (e.target.className == "button10000") {
        if (i > 10000) {
            i = i - 10000;
            c = c + 1000
            text.textContent = (i);
        }
    }
})
*/
