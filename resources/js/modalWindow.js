// Get the modal
var modal = document.getElementById('ponentesInfo');

// Get the button that opens the modal
var ponente = document.getElementsByClassName('ponente');
// Get the <span> element that closes the modal
var closeModal = document.querySelector('#closeModal');

var CurrentPonentePic = document.querySelector('#ponentesInfo #biography img');

var ponentePic = ['ponente01', 'ponente02', 'ponente03', 'ponente04', 'ponente05', 'ponente06', 'ponente07', 'ponente08', 'ponente09', 'ponente10', 'ponente11', 'ponente12', 'ponente13', 'ponente14', 'ponente15', 'ponente16', 'ponente17', 'ponente18', 'ponente19', 'ponente20', 'ponente21', 'ponente22', 'ponente23', 'ponente24', 'ponente25', 'ponente26'];



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
