// Get the modal
var modal = document.getElementById('ponentesInfo');

// Get the button that opens the modal
var ponente = document.getElementsByClassName('ponente');
// Get the <span> element that closes the modal
var closeModal = document.querySelector('#closeModal');

var CurrentPonentePic = document.querySelector('#ponentesInfo #biography img');

var ponentePic = ['ponente01', 'ponente02', 'ponente03', 'ponente04', 'ponente05', 'ponente06', 'ponente07', 'ponente08', 'ponente09', 'ponente10', 'ponente11', 'ponente12', 'ponente13', 'ponente14', 'ponente15', 'ponente16', 'ponente17', 'ponente18', 'ponente19', 'ponente20', 'ponente21', 'ponente22', 'ponente23', 'ponente24', 'ponente25', 'ponente26'];

var ponentePvid=[
 'nHslEdP6y8s' //AURELIO NUÑO
,'UQa-jhO7Hhw' //JAVIER TREVIÑO
,'2yM0w7gDo58' //OTTO GRANADOS
,'Ne9bdM3ZYQk' //MARCIAL HELLIN
,'kq48G7tYjgQ' //VALENTINA QUIROGA
,'te5ACbZFLHo' //ELIZA BONILLA
,'lscCHYpmUws' //CARLOS MANCERA 
,'62UiI-hAfFA' //GABRIELA RAMOS
,'0fNsmOUApCM' //PABLO CEBALLOS 
,'pllV9wA8g1o' //ARTURO VELASQUEZ
,'H_xUAkWJ6Vw' //MARIANO JABONERO
,'IRx2yn35O1Q' //JUAN ARZOZ
,'YooLshKP0xM' //LORENZO GOMEZ-MORIN
,'7iM_QdFKb2M' //RICARDO CUENCA
,'qzD2Ir49re4' //SERAFIN ANTUNEZ
,'VpfftCZp1mY' //CARLOS MAGRO
,'K491Y2lreNc' //CECILIA DIAZ
,'E-UgO7--2aA' //SILVIA CONDE
,'ZdA_X6jlUuo' //TERESA ROJANO
,'azkYhVWY4aM' //FERNANDO FLORES
,'AbrwD3VIF54' //EMILIAN RODRIGUEZ
,'YskRAgtwJYw' //JUAN MANUEL MARTINEZ
,'l7PZKnb_pyY' //JOSE ENRIQUE VILLA
,'nGmXIgNz6s8' //AGUSTINA BLANCO
,'D9NQZctES70' //PATRICIA VASQUEZ
,'bBhlyTAkLqM' //EDUARDO BACKHOFF
];

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        player.stopVideo();
    }
}

function setModal(img, index){
    modal.style.display = "block";
    CurrentPonentePic.src = "resources/img/"+img+".png";
    var ponenteBiografia = document.getElementsByClassName('ponenteBiografia');
    console.log(ponentePvid[index]);
    player.loadVideoById({'videoId': ponentePvid[index],
               'startSeconds': 0,
               'suggestedQuality': 'large'});
    
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
