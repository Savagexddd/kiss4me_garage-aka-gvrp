var toggle = false;

$(document).ready(function(){
    $('.Rechteck_7').fadeOut();
    $('.Rechteck_6').fadeOut();
    $('body').fadeOut();
  //  $('body').fadeIn();
    window.addEventListener('message', function( event1 ) {
      if (event.data.action == 'open') {
        document.getElementById("vehicle-list").innerHTML = '';
        $('.Rechteck_7').fadeOut();
        $('.Rechteck_6').fadeOut();
        $('body').fadeIn();
        $('#Vorname_Nachname').text('Garage');
      } else if (event.data.action == 'add') {
                
        AddCar(event.data.plate, event.data.model);        

      } else {
        $('body').fadeOut();
      }
    });

    $(document).keyup(function(e) {
      if (e.key === "Escape") { 
        $.post('http://kiss4me_garage/escape', JSON.stringify({}));
      }
    });

    $( "#Icon_ionic_ios_close_circle" ).click(function() {
        $.post('http://kiss4me_garage/escape', JSON.stringify({}));
    });





    $( ".Icon_awesome_check" ).click(function() {
        $.post('http://kiss4me_garage/escape', JSON.stringify({}));
        $.post('http://kiss4me_garage/escape', JSON.stringify({}));
    });

    $( ".button1" ).click(function() {   
        SwitchAuszahlungen()
    });

    $( ".button2" ).click(function() {    
        SwitchEinzahlungen()
    });

    $( ".Rechteck_6" ).click(function() {   
        SwitchAuszahlungen()
    });

    $( ".Rechteck_7" ).click(function() {    
        SwitchEinzahlungen()
    });

    $( "#Auszahlung" ).click(function() {   
        SwitchAuszahlungen()
    });

    $( "#Einzahlung" ).click(function() {    
        SwitchEinzahlungen()
    });

    $( "#Auszahlung span" ).click(function() {   
        SwitchAuszahlungen()
    });

    $( "#Einzahlung span" ).click(function() {    
        SwitchEinzahlungen()
    });

    $( ".Icon_awesome_plus" ).click(function() {   
        SwitchAuszahlungen()
    });

    $( ".Icon_awesome_plus_u" ).click(function() {    
        SwitchEinzahlungen()
    });

    $( ".Pfad_1" ).click(function() {   
        SwitchAuszahlungen()
    });

    $( ".Ellipse_2" ).click(function() {    
        SwitchEinzahlungen()
    });

    function SwitchEinzahlungen() {
        $('#Einzahlung_x span').text("Einparken"); 
        $('.Rechteck_7').fadeIn();
        $('.Rechteck_6').fadeOut();
        $('.autoszumeinparken').fadeIn();
        document.getElementById("vehicle-list").innerHTML = '';
        $.post('http://kiss4me_garage/enable-parking');
        toggle = true;


    }

    function SwitchAuszahlungen() {
        document.getElementById("vehicle-list").innerHTML = '';

        $('#Einzahlung_x span').text("Ausparken");
        $('.Rechteck_7').fadeOut();
        $('.Rechteck_6').fadeIn();
        $('.autoszumeinparken').fadeOut();
        $.post('http://kiss4me_garage/enable-parkout');
        toggle = false;
    }
    
    function AddCar(plate, model) {
        
 
          $("#vehicle-list").append
          (`
          
          <div class="vehicle" onclick="parkOut('` + plate + `');" data-plate="` + plate + `">
            <div class="vehicle-inner">
                <img class="inner-icon" src="car.png">
                <p style="margin-left:110px;margin-top:-100px;" class="inner-label-knz">Modell: ` + model + " <br> Kennzeichen: " + plate + `</p>
            </div>
          </div>
    
          `);
        

      }

      
  });


