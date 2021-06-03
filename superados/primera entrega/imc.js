var alt = 0;
var peso = 0;
var imc = 0;



function calculoImc (x, y){
    alt = parseFloat(prompt ("ingrese su altura en metros, los decimales separados por un . "));
    peso = parseFloat(prompt("ingrese su peso "));
    imc =peso / (alt*alt);  
    alert("su indice de masa corporal es " + imc);  
};




do {
    calculoImc(alt,peso)
if (imc <= 18.5){
    alert( "Peso insuficiente");
} else if (imc >= 18.5 && imc <= 24.9){
        alert( "Ud. tiene Peso Normal");
}  else if (imc >= 25 && imc <= 26.9){
        alert( "Ud. tiene Sobrepeso grado I"); 
}  else if (imc >= 27 && imc <= 29.9){
        alert( "Ud. tiene Sobrepeso grado II (preobesidad)");
}  else if (imc >= 30 && imc <= 34.9){
        alert( "Ud. tiene Obesidad de tipo I");
}  else if (imc >= 35 && imc <= 39.9){
        alert( "Ud. tiene Obesidad de tipo II");
} else  if (imc >= 40 && imc <= 49.9){
        alert( "Ud. tiene Obesidad tipo III");
} else  if (imc >= 50){
      alert( "Ud. tiene Obesidad tipo IV extrema");
}
var sigue = prompt("desea calcular su imc nuevamente?")

} while (sigue != "no");   
       
         
       