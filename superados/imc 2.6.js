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
                this.fondo = "true" ;
            }
            calcularImc () {
                alert(this.nombre + " su indice de masa corporal es " + this.imc);
                
                
            }           
            mostrarImc (){
                if (this.imc <= 18.5){
                        this.imcMsg = "Peso insuficiente";
                    } else if (this.imc >= 18.5 && this.imc <= 24.9){
                            this.imcMsg = " Tiene Peso Normal";
                    } else if (this.imc >= 25 && this.imc <= 26.9){
                            this.imcMsg = " Tiene Sobrepeso grado I"; 
                    } else if (this.imc >= 27 && this.imc <= 29.9){
                            this.imcMsg = " Tiene Sobrepeso grado II (preobesidad)";
                    } else if (this.imc >= 30 && this.imc <= 34.9){
                            this.imcMsg = " Tiene Obesidad de tipo I";
                    } else if (this.imc >= 35 && this.imc <= 39.9){
                            this.imcMsg = " Tiene Obesidad de tipo II";
                    } else if (this.imc >= 40 && this.imc <= 49.9){
                            this.imcMsg = " Tiene Obesidad tipo III";
                    } else if (this.imc >= 50){
                            this.imcMsg = " Tiene Obesidad tipo IV extrema";
                    }
            }
        
            
            
        };

const guardar = (clave, valor) => { localStorage.setItem(clave, valor); }
const URL = "https://jsonplaceholder.typicode.com/posts";

$("article").append('<button id="btn1">GET</button>');
$("#btn1").click( () =>
        $.get(URL, function (respuesta, estado) {
                if (estado === 'success') {
                        let misDatos = respuesta;
                        console.log(misDatos[0].title);
                        $("divY").append(`<div>
                                            <h3>${misDatos[0].title}</h3>
                                          </div>` )
                       
                }
        })
)


let formulario = document.querySelector("form");
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    
    
    let nombre = $("#nombre").val();
    let email = $("#email").val();
    let peso = $("#peso").val();
    let altura = $("#altura").val();
    
    if(nombre == "" || email == ""|| peso == ""|| altura == "") {
            alert("no deje campos vacios");
    }
    else {
            var persona = new Persona(nombre, email, peso, altura);
            personas.push(persona);
            const personJSON = JSON.stringify(persona);
            const personasJSON = JSON.stringify(personas);
            guardar(persona.email, personJSON);
            guardar(persona.email, personasJSON);
            alert("usuario creado correctamente");
            document.getElementById("form").reset();
    }; 
    persona.mostrarImc(); 
    var  personcard = `<h3> Nombre: ${persona.nombre}</h3>
    <h3> Peso: ${persona.peso}</h3>
    <h3> Altura: ${persona.altura}</h3>
    <h3> IMC: ${persona.imc}</h3>
    <h3> ${persona.imcMsg}</h3>`
        if (persona.imc >= 24.9){
                $('body').append(`<div class="card red" >${personcard}</div>`);
        } else {
                $('body').append(`<div class="card green" >${personcard}</div>`);
        };

});










