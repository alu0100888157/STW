function nif(dni) {
  var numero
  var letr
  var letra
  var expresion_regular_dni
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 // onsubmit={ condition ? method_a : method_b }> ESTO DE AQUI

  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
        // var erroremail=document.createElement('p');
        // erroremail.innerHTML='No escribiste tu email';
        // document.getElementById("capa").appendChild(erroremail);
        //var TextoLinea= 'Dni erróneo';
        //document.getElementById("capa").innerHTML = "<br>" + "Hola don pepito";  // Agrego nueva linea antes
        //return false;
       //alert('Dni erroneo, la letra del NIF no se corresponde');
       return false;
       
     }else{
        //document.getElementById("capa").innerHTML = 'meh';  // Agrego nueva linea antes
        return true;

     }
  }else{
        //document.getElementById("capa").innerHTML = "<br>" + "Hola don pepito"; // Agrego nueva linea antes
        return false;

   }
}

function AgregarLineaDeTexto() {
	var TextoLinea=document.getElementById("objeto").value;
    document.getElementById("añadir_texto").innerHTML += "<br>" + TextoLinea;  // Agrego nueva linea antes
}
 function Verifica_notif(){
    var compro_nombre= document.getElementById("textarea1").value;
    if(compro_nombre==''){
       document.getElementById("capa5").innerHTML = "Inserte novedad";
       return false;
    }
    else{
        document.getElementById("capa5").innerHTML = " ";
        return true;    
    }
}
 function Verifica_nom(){
    var compro_nombre= document.getElementById("nombre").value;
    if(compro_nombre==''){
        document.getElementById("capa2").innerHTML = "Inserte nombre";
        return false;    

    }
    else{
        document.getElementById("capa2").innerHTML = " ";
        return true;
    }
}
 function Verifica_ap(){
    var compro_apellido= document.getElementById("apellido").value;
    if(compro_apellido==''){
       document.getElementById("capa3").innerHTML = "Inserte apellido";
       return false;    

    }
    else{
        document.getElementById("capa3").innerHTML = " ";
        return true;    
    }
}
 function Verifica_pass(){
    var compro_password= document.getElementById("password").value;
    if(compro_password==''){
       document.getElementById("capa4").innerHTML = "Inserte password";
       return false;    
    }
    else{
        document.getElementById("capa4").innerHTML = " ";
        return true;    
    }
}
function Verifica2(){
    
//     var capa = document.getElementById("capa");
//     var h3 = document.createElement("h3");
//     h3.innerHTML = document.getElementById("nombre");
//   //h1.innerHTML = texto;
//     capa.appendChild(h3);

    //document.getElementById("capa").innerHTML = "<br>" + "Hola don pepito";
    
  
   var compro_dni=nif(document.getElementById("dni").value);
 
   if(compro_dni==true){
        document.getElementById("capa").innerHTML = "";  // Agrego nueva linea antes
        return true;    
   }
   else{
        document.getElementById("capa").innerHTML = "Inserte DNI correctamente";
        return false;    
   }
//   var capa = document.getElementById("capa");
//   var h1 = document.createElement("h1");
//     h1.innerHTML = document.getElementById("nombre");
//   //h1.innerHTML = texto;
//   capa.appendChild(h1);
   
} 




function Verifica_all(){
    
    if(Verifica_nom()==true && Verifica_ap()==true && Verifica_pass()==true && Verifica2()==true){
        return true;
    }else{
      return false;
    }
}
// var capa = document.getElementById("capa");
// var h1 = document.createElement("h1");
// h1.innerHTML = document.getElementById("texto");
// capa.appendChild(h1);

$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function(){
  $('.carousel').carousel();
});

// Next slide
$('.carousel').carousel('next');

// Previous slide
$('.carousel').carousel('prev');

  $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true});

autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();

  $('#modal1').modal('open');

  $('#modal1').modal('close');





});

