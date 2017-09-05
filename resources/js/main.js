var page = document.getElementById('mainWrapper');
var slides = document.getElementsByTagName('section');
var ant  = document.getElementById('ant');
var sig  = document.getElementById('sig');
var slideIndex = 0;
var scrollButton = document.getElementById('scrollButton');
var navButton = document.getElementsByClassName('navButton');
var scrollInterval = function(){ 
    document.body.scrollTop = document.body.scrollHeight;
};
var stopScroll = function() { clearInterval(scrollInterval); };

function currentButton(index){
    if(index != 0){
        for(var i=0;i<=navButton.length-1;i++){
            if(navButton[i].classList.contains('current')){
                navButton[i].classList.remove('current');
            }
        }
        navButton[index].classList.add('current');
    }
}

function validateForm() {
    var contraseña = ["simposio2017"];
    var x = document.getElementById("password").value;
    var wrongPassword =  "La contraseña que ha introducido no es válida. Revise la ortografía e intente nuevamente";
    var rightPassword = "Gracias";
    if (x != contraseña[0]) {
        document.getElementById("paswordInput").innerHTML = wrongPassword;
    } else {
        window.open(
          'https://www.eventbrite.es/e/entradas-simposio-modelo-educativo-2017-37508236144'
          , '_blank' // <- This is what makes it open in a new window.
        );
        document.getElementById("paswordInput").style.color="#0094A1";
        document.getElementById("paswordInput").innerHTML = rightPassword;
        
    }
}


function agendaIndex(){
    var agendaLi   = document.querySelectorAll(".current .agenda .rail>div>div");
    var agendaData = document.querySelectorAll(".current .agenda .railContent>div>div");
    var j = 0;
    if(agendaLi != null || agendaLi != undefined){
        for(var i = 0;i <= agendaLi.length-1;i++){
            agendaLi[i].addEventListener('mouseover',function(){
                var getChildIndex = function(child){
                var parent = child.parentNode;
                var j = parent.children.length - 1;
                    for (; j >= 0; j--){
                        if (child == parent.children[j]){
                            break;
                        }
                    }
                    return j;
                };
                var index = getChildIndex(this);
                agendaData[index].classList.add('hover');
            },false);
            agendaLi[i].addEventListener('mouseout',function(){
                var getChildIndex = function(child){
                var parent = child.parentNode;
                var k = parent.children.length - 1;
                    for (; k >= 0; k--){
                        if (child == parent.children[k]){
                            break;
                        }
                    }
                    return k;
                };
                var index = getChildIndex(this);
                agendaData[index].classList.remove('hover');
            },false);
        }
    }
}

function pageIndex(){
    var thisPage = document.querySelector("section.current");
    var allPages = document.getElementsByTagName('section');
    var index;
    if(page != null || page != undefined){
        var getChildIndex = function(child){
        var parent = child.parentNode;
        var j = parent.children.length - 1;
            for (; j >= 0; j--){
                if (child == parent.children[j]){
                    break;
                }
            }
            return j;
        };
        index = getChildIndex(thisPage);
        if(index >=1){
            //document.getElementById('title').src = 'resources/img/'+pageTitle[index];
        }
        if(index == allPages.length-1){
            scrollButton.classList.add('active');
        }else if(scrollButton.classList.contains('active')){
            scrollButton.classList.remove('active');
        }
    }
    return index;
}

/*navigation*/
function currentButton(index){
    if(index != 0){
        for(var i=0;i<=navButton.length-1;i++){
            if(navButton[i].classList.contains('current')){
                navButton[i].classList.remove('current');
            }
        }
        navButton[index].classList.add('current');
    }
}

function setCurrent(elem,index){
    //slideIndex = index;
    for(var i = index-1;i>=0;i--){
        if(elem[i].classList.contains('current')){
            elem[i].classList.remove('current');
        }
        if(elem[i].classList.contains('next')){
            elem[i].classList.remove('next');
        }
        elem[i].classList.add('prev');
    }
    elem[index].classList.remove('prev','next');
    elem[index].classList.add('current');
    for(var i = index+1;i <= elem.length-1;i++){
        if(elem[i].classList.contains('current')){
            elem[i].classList.remove('current');
        }
        if(elem[i].classList.contains('prev')){
            elem[i].classList.remove('prev');
        }
        elem[i].classList.add('next');
    }
    currentButton(index)
    pageIndex();
    agendaIndex();
}

function activate(e){
    if(!page.classList.contains('active')){
        page.classList.add('active');
        slideIndex += 1;
        setCurrent(slides,slideIndex);
    }
    var start = document.getElementById('start').style.display='none';
}

function next(trigger,elem,index){
    
}
function prev(trigger,elem,index){
    
}
function goTo(elem,index){
    for(var i = index-1;i>=0;i--){
        if(elem[i].classList.contains('current')){
            elem[i].classList.remove('current');
        }
        if(elem[i].classList.contains('next')){
            elem[i].classList.remove('next');
        }
        elem[i].classList.add('prev');
    }
    elem[index].classList.remove('prev','next');
    elem[index].classList.add('current');
    for(var i = index+1;i <= elem.length-1;i++){
        if(elem[i].classList.contains('current')){
            elem[i].classList.remove('current');
        }
        if(elem[i].classList.contains('prev')){
            elem[i].classList.remove('prev');
        }
        elem[i].classList.add('next');
    }
    
    if(index <= 1){
        ant.classList.add('disabled');
    }else if(ant.classList.contains('disabled')){
        ant.classList.remove('disabled');
    }
    if(index >= slides.length-1){
        sig.classList.add('disabled');
    }else if(sig.classList.contains('disabled')){
        sig.classList.remove('disabled');
    }
    slideIndex = index;
    currentButton(index);
}

function horizontalNav(trigger,inc){
    var navButtons = document.getElementsByClassName('horizontalNav');
    slideIndex += inc;
    setCurrent(slides,slideIndex);
    if(slideIndex + 1 >= slides.length||slideIndex - 1 <= 0){
        trigger.classList.add('disabled');
    }else{
        for(var i = 0;i<=navButtons.length-1;i++){
            if(navButtons[i].classList.contains('disabled')){
                navButtons[i].classList.remove('disabled');
            }
        }
    }
}

function home(){
    page.classList.remove('active');
    slideIndex = 0;
    setCurrent(slides,slideIndex);
    var start = document.getElementById('start').style.display='block';
}

function fundacion(){
    window.open(
      'http://www.fundacionsantillana.com/'
      , '_blank' // <- This is what makes it open in a new window.
    );
}
/*------------------------------------------------------------*/
/*-----------------scroll down button-------------------*/
function checkScroll(){
    var thisPage = document.querySelector("section.current");
    if(thisPage.scrollTop == thisPage.scrollHeight){
        scrollButton.classList.add('disabled');
    } else if(scrollButton.classList.contains('disabled')){
        scrollButton.classList.remove('disabled');
    }
}
function scrollBottom(){
    var thisPage = document.querySelector("section.current");
    thisPage.scrollTop = thisPage.scrollHeight;

}
/*------------------------------------------------------------*/
/*------------------------------------------------------------*/
    
document.addEventListener('DOMContentLoaded', function(){
    setCurrent(slides,slideIndex);
    
    ant.classList.add('disabled'),
    ant.addEventListener('click',function(){horizontalNav(ant,-1)},false);
    sig.addEventListener('click',function(){horizontalNav(sig,1)} ,false);
    
    //window.addEventListener("mousewheel", checkScroll, false);
    //window.addEventListener("touchmove", checkScroll, false);
}, false);