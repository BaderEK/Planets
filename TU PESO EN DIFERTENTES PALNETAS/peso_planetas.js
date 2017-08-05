var texto = document.getElementById("caja");
var texto2 = document.getElementById("caja2");
var boton = document.getElementById("boton");
boton.addEventListener("click", tuPeso)



function tuPeso()
{
  var peso_tierra = texto.value;
  var planeta = texto2.value;
  var peso = parseInt(peso_tierra);
  ///////////////////////////
  var g_tierra = 9.8;
  var g_luna = 1.6;
  var g_neptuno = 11.5;
  var g_marte = 3.7;
  var g_jupiter = 24.8;
  //////////////////////////
  var peso_final;
  var nombre;
  /////////////////////////
 switch (planeta) {
  case  "1":
    peso_final = peso * g_marte / g_tierra;
    nombre = "Marte";
    marteIMG();
  break;
  case  "2":
    peso_final = peso * g_jupiter / g_tierra;
    nombre = "Jupiter";
    jupiterIMG();
  break;
  case  "3":
    peso_final = peso * g_neptuno / g_tierra;
    nombre = "Neptuno";
    neptunoIMG();
  break;
  case  "4":
    peso_final = peso * g_luna / g_tierra;
    nombre = "Luna";
    lunaIMG();
  break;
  default: peso_final = 1000000000;
           nombre = "el Pais de las Maravillas"

}
/////////////////////////
  peso_final = parseInt(peso_final);
  resultado.innerHTML = "Tu peso en " + nombre + " es de <strong>" + peso_final + "</strong> kilos";
}
var resultado = document.getElementById("resultado");

//////////////////////////
