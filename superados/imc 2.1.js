var nombre = "";
var email = "";
var altura = 0;
var peso = 0;
var imc = 0;
let personas = [];





    class Persona {
            constructor (nombre, email, peso, altura) {
                this.nombre = nombre;
                this.email = email;
                this.peso = peso;
                this.altura = altura;
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

const guardar = (clave, valor) => { localStorage.setItem(clave, valor); }


let formulario = document.querySelector("form");
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    
    
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value;
    
    if(nombre == "" || email == ""|| peso == ""|| altura == "") {
            alert("no deje campos vacios");
    }
    else {
            var persona = new Persona(nombre, email, peso, altura);
            personas.push(persona);
            const enJSON = JSON.stringify(persona);
            guardar(persona.email, enJSON);
            alert("usuario creado correctamente");
            document.getElementById("form").reset();
    }; 
    persona.mostrarImc(); 
    let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3> Nombre: ${persona.nombre}</h3>
                                <h3> Peso: ${persona.peso}</h3>
                                <h3> Altura: ${persona.altura}</h3>     
                                <h3> IMC: ${persona.imc}</h3>
                                <h3>  ${persona.imcMsg}</h3>`;
        
    
        document.body.appendChild(contenedor); 

    



});









