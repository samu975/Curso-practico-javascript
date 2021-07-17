// Código del cuadrado
console.group("Cuadrado")

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd()

// Código del triangulo

console.group("Triangulo")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2 
}
console.groupEnd()

// codigo del circulo

console.group("Circulos")

//Diametro 
function diametroCirculo(radio) {
    return radio *2
}
//Pi
const pi = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * pi
}

//Area
function areaCirculo(radio) {
    return(radio * radio) *pi
}

console.groupEnd()

//Aqui interactuamos con el html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    alert(area);
}

function cuadrado(numero) {
    return numero * numero
}


function alturaTrianguloIsoceles(lado1, lado2, lado3) {
    
    if (lado1===lado2 & lado1 != lado3) {
        console.log("Es un triangulo isoceles")
        const pitagoras = Math.sqrt(cuadrado(lado1) - cuadrado(lado3/2))
        return pitagoras
    }else if (lado1===lado3 & lado1 != lado2) {
        console.log("Es un triangulo isoceles")
        const pitagoras = Math.sqrt(cuadrado(lado1) - cuadrado(lado2/2))
        return pitagoras
    }else if(lado2 === lado3 & lado2 != lado1){
        console.log("Es un triangulo isoceles")
        const pitagoras = Math.sqrt(cuadrado(lado2) - cuadrado(lado1/2))
        return pitagoras
    }else{
        console.log("No es un triangulo isoceles")
    }
}



function calcularAlturaTriangulo() {
    const inputLado1 = document.getElementById("Lado1")
    const inputLado2 = document.getElementById("Lado2")
    const inputLado3 = document.getElementById("Lado3")

    const valueLado1 = inputLado1.value
    const valueLado2 = inputLado2.value
    const valueLado3 = inputLado3.value
    
    const altura = alturaTrianguloIsoceles(valueLado1, valueLado2, valueLado3)
    alert(altura)
}