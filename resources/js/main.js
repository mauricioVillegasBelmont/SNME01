var page = document.getElementById('mainWrapper');
var slides = document.getElementsByTagName('section');
var ant  = document.getElementById('ant');
var sig  = document.getElementById('sig');
var slideIndex = 0;
var scrollButton = document.getElementById('scrollButton');
var scrollInterval = function(){ 
    document.body.scrollTop = document.body.scrollHeight;
};
var stopScroll = function() { clearInterval(scrollInterval); };
var pageTitle=['','title_presentacion.svg','title_objetivoGeneral.svg','title_agenda.svg','title_agenda.svg','title_agenda.svg','title_ponentes.svg'];




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
            document.getElementById('title').src = 'resources/img/'+pageTitle[index];
        }
        if(index == allPages.length-1){
            scrollButton.classList.add('active');
        }else if(scrollButton.classList.contains('active')){
            scrollButton.classList.remove('active');
        }
    }
    return index;
}

function setCurrent(elem,index){
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
function goTo(trigger,elem,index){
    
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
    /*thisPage.scroll({ 
        top :  'bottom',
        behavior: 'smooth' 
        });*/
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