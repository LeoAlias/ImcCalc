var nombre = "";
var alt = 0;
var peso = 0;
var imc = 0;
let personas = [];



class Persona {
        constructor () {
            this.nombre = prompt("ingrese su nombre");
            this.peso = parseFloat(prompt("ingrese su peso "));
            this.altura = parseFloat(prompt ("ingrese su altura en metros, los decimales separados por un . "));
            this.imc = this.peso / (this.altura*this.altura);
            this.imcMsg = "";
        }
        calcularImc () {
            alert(this.nombre + " su indice de masa corporal es " + this.imc);
            
            
        }           
        mostrarImc (){
            if (this.imc <= 18.5){
                alert( "Peso insuficiente");
                } else if (this.imc >= 18.5 && this.imc <= 24.9){
                        this.imcMsg = " tiene Peso Normal";
                } else if (this.imc >= 25 && this.imc <= 26.9){
                        this.imcMsg = " tiene Sobrepeso grado I"; 
                } else if (this.imc >= 27 && this.imc <= 29.9){
                        this.imcMsg = " tiene Sobrepeso grado II (preobesidad)";
                } else if (this.imc >= 30 && this.imc <= 34.9){
                        this.imcMsg = " tiene Obesidad de tipo I";
                } else if (this.imc >= 35 && this.imc <= 39.9){
                        this.imcMsg = " tiene Obesidad de tipo II";
                } else if (this.imc >= 40 && this.imc <= 49.9){
                        this.imcMsg = " tiene Obesidad tipo III";
                } else if (this.imc >= 50){
                        this.imcMsg = " tiene Obesidad tipo IV extrema";
                }
        }
       
        
        
    };



const persona1 = new Persona();
const persona2 = new Persona();


personas.push(persona1);
personas.push(persona2);


for ( let i=0; i<= personas.length; i++){
        // personas[i].calcularImc();
        personas[i].mostrarImc(); 
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3> Nombre: ${personas[i].nombre}</h3>
                                <h3> Peso: ${personas[i].peso}</h3>
                                <h3> Altura: ${personas[i].altura}</h3>     
                                <h3> IMC: ${personas[i].imc}</h3>
                                <h3>  ${personas[i].imcMsg}</h3>`;
        

        document.body.appendChild(contenedor);
        // let contenedorRojo = document.getElementsByTagName("div");
        //         if (personas[i].imc >= 25){
        //                contenedorRojo.style.background =243, 59, 20;
};



// alert("Actualmente el array de personas contiene : " + personas.length + " posiciones");





