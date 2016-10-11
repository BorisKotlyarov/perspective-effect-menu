function el(selector) {
    return document.querySelector(selector);
}

function open(){
    el(".container").classList.toggle("perspective");
    setTimeout(function(){
        el(".menu-block").classList.toggle("open");
    }, 200);
}

function close(){
    el('.menu-block').classList.remove('open');
    setTimeout(function(){
        el('.container').classList.remove("perspective");
    }, 200);
}

function toggler(){
    el('.left-block').addEventListener('click',function(){
        if (el('.container').classList.contains("perspective")) {
            close()
        } else {
            open();
        }
    });
}

window.addEventListener('load', toggler);