// Get the modal
var modal = document.getElementById('ponentesInfo');

// Get the button that opens the modal
var ponente = document.getElementsByClassName('ponente');
// Get the <span> element that closes the modal
var closeModal = document.querySelector('#closeModal');

var CurrentPonentePic = document.querySelector('#ponentesInfo #biography img');

var ponentePic = ['ponente01', 'ponente02', 'ponente03', 'ponente04', 'ponente05', 'ponente06', 'ponente07', 'ponente08', 'ponente09', 'ponente10', 'ponente11', 'ponente12', 'ponente13', 'ponente14', 'ponente15', 'ponente16', 'ponente17', 'ponente18', 'ponente19', 'ponente20', 'ponente21', 'ponente22', 'ponente23', 'ponente24', 'ponente25', 'ponente26'];

/*var ponentePvid=['https://www.youtube.com/v/nHslEdP6y8s','https://www.youtube.com/v/UQa-jhO7Hhw','https://www.youtube.com/v/2yM0w7gDo58','https://www.youtube.com/v/Ne9bdM3ZYQk','https://www.youtube.com/v/kq48G7tYjgQ','https://www.youtube.com/v/sU8YSgiDggw','https://www.youtube.com/v/te5ACbZFLHo','https://www.youtube.com/v/lscCHYpmUws','https://www.youtube.com/v/62UiI-hAfFA','https://www.youtube.com/v/0fNsmOUApCM','https://www.youtube.com/v/pllV9wA8g1o','https://www.youtube.com/v/H_xUAkWJ6Vw','https://www.youtube.com/v/WelLwZ3-jM0','https://www.youtube.com/v/IRx2yn35O1Q','https://www.youtube.com/v/YooLshKP0xM','https://www.youtube.com/v/7iM_QdFKb2M','https://www.youtube.com/v/qzD2Ir49re4','https://www.youtube.com/v/VpfftCZp1mY','https://www.youtube.com/v/K491Y2lreNc','https://www.youtube.com/v/E-UgO7--2aA','https://www.youtube.com/v/ZdA_X6jlUuo','https://www.youtube.com/v/azkYhVWY4aM','https://www.youtube.com/v/AbrwD3VIF54','https://www.youtube.com/v/YskRAgtwJYw','https://www.youtube.com/v/l7PZKnb_pyY','https://www.youtube.com/v/nGmXIgNz6s8','https://www.youtube.com/v/D9NQZctES70','https://www.youtube.com/v/bBhlyTAkLqM'];*/

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    
}

function setModal(img, index){
    modal.style.display = "block";
    CurrentPonentePic.src = "resources/img/"+img+".png";
    var ponenteBiografia = document.getElementsByClassName('ponenteBiografia');
    
    for(var i=0; i <= ponenteBiografia.length-1; i++){
        if(ponenteBiografia[i].style.display != "none"){
            ponenteBiografia[i].style.display = "none";
        }
        ponenteBiografia[index].style.display = "block";
    }
    
}

// When the user clicks the button, open the modal 
for (var i = 0;i <= ponente.length-1;i++){
    (function () {
        var index = i;
        var pic = ponentePic[i];
        ponente[i].addEventListener('click', function() { setModal(pic, index); }, false);
    }());
}
