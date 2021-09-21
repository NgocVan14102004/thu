const audioStart = document.querySelector('.audio-start')
const audio0 = document.querySelector('.audio0')
const audio1 = document.querySelector('.audio1');
const audio2 = document.querySelector('.audio2');
const audio3 = document.querySelector('.audio3');
const content = document.querySelector('.content');
const text = document.querySelector('.text');
const yes = document.querySelector('.yes');
const btnStart = document.querySelector('.btn-start');
const page0 = document.querySelector('.page0')
const btn = document.querySelector('.btn');
const page1 = document.querySelector('.page1');
const click = document.querySelector('.click');
const btn2 = document.querySelector('.btn2');
const page2 = document.querySelector('.page2');
const click2 = document.querySelector('.click2');
const btn3 = document.querySelector('.btn3');
const page3 = document.querySelector('.page3');
const click3 = document.querySelector('.click3');
const btn4 = document.querySelector('.btn4');
const page4 = document.querySelector('.page4');
const click4 = document.querySelector('.click4');
const btn5 = document.querySelector('.btn5');
const page5 = document.querySelector('.page5');
const click5 = document.querySelector('.click5');
const animation = document.querySelector('.pyro');
const clicknew = document.querySelector('.clicknew');
const cakeImg = document.querySelector('.cake');
const cakeName = document.querySelector('.name-cake')
const cakeImgNew = document.querySelector('.cake-new');
const cakeNameNew = document.querySelector('.name-cake-new');
const present1 = document.querySelector('.present1')
const present2 = document.querySelector('.present2')
const present3 = document.querySelector('.present3')
const page6 = document.querySelector('.page6')
const page7 = document.querySelector('.page7')
const listen = document.querySelector('.listen')
var isClick = false;
var isClick2 = false;


var hisNum1;
var hisNum2;
var a = 2;
var b = 2;

audioStart.play();



btnStart.onclick = function () {
    audio0.play();
    animation.style.display = 'block';
    page0.style.animation = 'opacity  0.8s linear'
    setTimeout(function () {
        page0.style.display = 'none';
    }, 800)
    page1.style.animation = 'opacityup 0.8s linear'
    setTimeout(function () {
        page1.style.display = 'block';
    }, 800)
}

audioStart.onended = function() {
    audioStart.play();
}

click.onmouseover = function (e) {

    switch (a) {
        case 2:
            break;
        case 3:
            text.innerText = 'Đố mầm non bắt được !'
            text.style.display = 'block';
            break;
        case 4:
            text.innerText = 'Bắt được cho mầm 10 nghìn'
            text.style.display = 'block';
            break;
        case 5:
            text.innerText = '(*^▽^*)'
            text.style.display = 'block';
            break;
        case 6:
            text.innerText = ' Hahahaha !'
            text.style.display = 'block';
            break;
        default:
            text.innerText = 'Chọn bên kia đi'
            text.style.display = 'block';
    }

    switch (b) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            break;
        default:
            yes.style.display = 'block';
            yes.innerText = ':))'

    }

    randomNumber1 = Math.floor(Math.random() * 1000);

    while ((randomNumber1 < 60) || (randomNumber1 > 580) || (Math.abs(randomNumber1 - hisNum1) < 200)) {
        randomNumber1 = Math.floor(Math.random() * 1000);
    }

    randomNumber2 = Math.floor(Math.random() * 1000);

    while ((randomNumber2 < 60) || (randomNumber2 > 1200) || (Math.abs(randomNumber2 - hisNum2) < 100)) {
        randomNumber2 = Math.floor(Math.random() * 1000);
    }



    click.style.top = randomNumber1 + 'px';
    click.style.left = randomNumber2 + 'px';
    hisNum1 = randomNumber1;
    hisNum2 = randomNumber2;
    a = a + 1;
    b = b + 1;

}

btn.onclick = function () {
    audio1.play();
    animation.style.display = 'block';
    page1.style.animation = 'opacity  0.8s linear'
    setTimeout(function () {
        page1.style.display = 'none';
    }, 800)
    page2.style.animation = 'opacityup 0.8s linear'
    setTimeout(function () {
        page2.style.display = 'block';
    }, 800)


}

click2.onmouseover = function (e) {

    animation.style.display = 'none';


    randomNumber1 = Math.floor(Math.random() * 1000);

    while ((randomNumber1 < 60) || (randomNumber1 > 580) || (Math.abs(randomNumber1 - hisNum1) < 200)) {
        randomNumber1 = Math.floor(Math.random() * 1000);
    }

    randomNumber2 = Math.floor(Math.random() * 1000);

    while ((randomNumber2 < 60) || (randomNumber2 > 1200) || (Math.abs(randomNumber2 - hisNum2) < 100)) {
        randomNumber2 = Math.floor(Math.random() * 1000);
    }



    click2.style.top = randomNumber1 + 'px';
    click2.style.left = randomNumber2 + 'px';
    hisNum1 = randomNumber1;
    hisNum2 = randomNumber2;

}

btn2.onclick = function () {

    audio1.play();
    animation.style.display = 'block';
    page2.style.animation = 'opacity  0.8s linear'
    setTimeout(function () {
        page2.style.display = 'none';

    }, 800)
    page3.style.animation = 'opacityup 0.8s linear'
    setTimeout(function () {
        page3.style.display = 'block';
    }, 800)

}

click3.onmouseover = function (e) {

    animation.style.display = 'none';


    randomNumber1 = Math.floor(Math.random() * 1000);

    while ((randomNumber1 < 60) || (randomNumber1 > 580) || (Math.abs(randomNumber1 - hisNum1) < 200)) {
        randomNumber1 = Math.floor(Math.random() * 1000);
    }

    randomNumber2 = Math.floor(Math.random() * 1000);

    while ((randomNumber2 < 60) || (randomNumber2 > 1200) || (Math.abs(randomNumber2 - hisNum2) < 100)) {
        randomNumber2 = Math.floor(Math.random() * 1000);
    }



    click3.style.top = randomNumber1 + 'px';
    click3.style.left = randomNumber2 + 'px';
    hisNum1 = randomNumber1;
    hisNum2 = randomNumber2;

}


btn3.onclick = function () {

    audio1.play();
    animation.style.display = 'block';
    page3.style.animation = 'opacity  0.8s linear'
    setTimeout(function () {
        page3.style.display = 'none';

    }, 800)
    page4.style.animation = 'opacityup 0.8s linear'
    setTimeout(function () {
        page4.style.display = 'block';
    }, 800)

}

click4.onclick = function (e) {
    isClick = true;
    animation.style.display = 'none';
    setTimeout(function () {
        cakeImg.style.display = 'none';
        cakeName.style.display = 'none';
    }, 500)
    click4.innerText = 'Ai cho mà nhấn!';
    click4.style.animation = 'opacity  3s linear'
    setTimeout(function () {
        click4.style.display = 'none'
    }, 3000)

    setTimeout(function () {
        if (isClick2) {
            btn4.style.top = '60%';
        }
    }, 5500)


}




clicknew.onclick = function (e) {
    isClick2 = true;
    animation.style.display = 'none';
    setTimeout(function () {
        cakeImgNew.style.display = 'none';
        cakeNameNew.style.display = 'none';
    }, 500)
    clicknew.innerText = 'Ai cho mà nhấn!';
    clicknew.style.animation = 'opacity  3s linear'
    setTimeout(function () {
        clicknew.style.display = 'none'
    }, 3000)

    setTimeout(function () {
        if (isClick) {
            btn4.style.top = '60%';
        }
    }, 3500)

}


btn4.onclick = function () {

    audio1.play();
    animation.style.display = 'block';
    page4.style.animation = 'opacity  0.8s linear'
    setTimeout(function () {
        page4.style.display = 'none';

    }, 800)
    page5.style.animation = 'opacityup 0.8s linear'
    setTimeout(function () {
        page5.style.display = 'block';
    }, 800)

}





present1.onclick = function () {
    page5.innerHTML = '<div class="present-img"><img src="./assets/img/hoa.png" alt=""><h5>1 bó hoa hồng</h5><button class="recieve">Nhận</button></div>';
    page5.style.display = 'flex';
    document.querySelector('.present-img').style.display = 'block'
    var recieve = document.querySelector('.recieve')
    recieve.onclick = function () {
        audio1.play();
        animation.style.display = 'block';
        page5.style.animation = 'opacity  0.8s linear'
        setTimeout(function () {
            page5.style.display = 'none';

        }, 800)
        page6.style.animation = 'opacityup 0.8s linear'
        setTimeout(function () {
            page6.style.display = 'block';
        }, 800)
    }
}

present2.onclick = function () {
    page5.innerHTML = '<div class="present-img"><img src="./assets/img/vay.jpg" alt=""><h5>1 cái đầm nè !</h5><button class="recieve">Nhận</button></div>';
    page5.style.display = 'flex';
    document.querySelector('.present-img').style.display = 'block'
    var recieve = document.querySelector('.recieve')
    recieve.onclick = function () {
        audio1.play();
        animation.style.display = 'block';
        page5.style.animation = 'opacity  0.8s linear'
        setTimeout(function () {
            page5.style.display = 'none';

        }, 800)
        page6.style.animation = 'opacityup 0.8s linear'
        setTimeout(function () {
            page6.style.display = 'block';
        }, 800)
    }
}

present3.onclick = function () {
    page5.innerHTML = '<div class="present-img"><img src="./assets/img/dulich.jpg" alt=""><h5>1 chuyến du lịch luôn</h5><button class="recieve">Nhận</button></div>';
    page5.style.display = 'flex';
    document.querySelector('.present-img').style.display = 'block'
    var recieve = document.querySelector('.recieve')
    recieve.onclick = function () {
        audio1.play();
        animation.style.display = 'block';
        page5.style.animation = 'opacity  0.8s linear'
        setTimeout(function () {
            page5.style.display = 'none';

        }, 800)
        page6.style.animation = 'opacityup 0.8s linear'
        setTimeout(function () {
            page6.style.display = 'block';
        }, 800)
    }
}

const image1 = document.querySelector('.image1')
const image2 = document.querySelector('.image2')
const image3 = document.querySelector('.image3')
const image4 = document.querySelector('.image4')
const image5 = document.querySelector('.image5')

listen.onclick = function () {
    audioStart.pause();
    audio2.play();
    listen.innerText = 'Mầm non không dừng được đâu nghe cho hết bài á nha';
    listen.style.left = 'calc((100vw - 974px) / 2)';
    listen.style.backgroundColor = '#4e686c3b';
    setTimeout(function () {
        image1.style.display = 'block'
    }, 30000)
    setTimeout(function () {
        image2.style.display = 'block'
    }, 70000)
    setTimeout(function () {
        image3.style.display = 'block'
    }, 110000)
    setTimeout(function () {
        image4.style.display = 'block'
    }, 140000)
    setTimeout(function () {
        image5.style.display = 'block'
    }, 180000)
    

}




audio2.onended = function () {
    audio1.play();
    animation.style.display = 'block';
    page6.style.animation = 'opacity  0.8s linear'
    setTimeout(function () {
        page6.style.display = 'none';

    }, 800)
    page7.style.animation = 'opacityup 0.8s linear'
    setTimeout(function () {
        page7.style.display = 'flex';
        page7.style.flexDirection = 'column'
    }, 800)
    setTimeout(function () {
        audio3.play();
        document.querySelector('.mytextcn').style.display = 'none'
        document.querySelector('.mytext').innerText = 'Chúc Mầm Non trung thu vui vẻ nha !!!!!!'
    }, 8000)
}

