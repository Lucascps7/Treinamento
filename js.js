window.onload = function () {
  
    var Segundos = 00; 
    var Dezenas = 00; 
    var minutos = 00;
    var dezenasapp = document.getElementById("dezenas")
    var segundosapp = document.getElementById("segundos")
    var minutosapp = document.getElementById("minutos")
    var buttonStart = document.getElementById('bstart');
    var buttonStop = document.getElementById('bstop');
    var buttonReset = document.getElementById('breset');
    var Interval = 0;
  
// Funcionalidade dos Botões ---------------------------------------------------------------------------------------------------

    buttonStart.onclick = function() {
      
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }
    
    buttonReset.onclick = function() {
        clearInterval(Interval);
        Dezenas = "00"
        Segundos = "00"
        dezenasapp.innerHTML = Dezenas;
        segundosapp.innerHTML = Segundos;
    }



// Start do Cronômetro --------------------------------------------------------------------------------
    
         
    function startTimer () {
      Dezenas++; 
      
    if(Dezenas <= 9){
        dezenasapp.innerHTML = "0" + Dezenas;
    }
      
    if (Dezenas > 9){
        dezenasapp.innerHTML = Dezenas;
    } 
    
    if (Dezenas > 99) {
        console.log("Segundos");
        Segundos++;
        segundosapp.innerHTML = "0" + Segundos;
        Dezenas = 0;
        dezenasapp.innerHTML = "0" + 0;
    }

    if (Segundos > 9){
        segundosapp.innerHTML = Segundos;
    }

    if (Segundos > 60) {
        console.log("Segundos");
        minutos++;
        minutosapp.innerHTML = "0" + minutos;
        Segundos = 0;
        segundosapp.innerHTML = "0" + 0;

    }

}}

