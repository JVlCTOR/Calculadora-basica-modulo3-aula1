// document.write("<h1>Hello word</h1>");
// document.getElementById("container").innerHTML = "<h1>Hello word</h1>"
// document.querySelector("#container").innerHTML = "<h2>outra coisa</h2>"

function somar()
{
    let resultado = Number(valor1.value) + Number(valor2.value)
    document.getElementById("resultado").innerHTML = "<h4>Resultado é:"+resultado+"</h4>";
    
}
function subtrair()
{
    let resultado = Number(valor1.value) - Number(valor2.value)
    document.getElementById("resultado").innerHTML = "<h4>Resultado é:"+resultado+"</h4>";
}
function multiplicar()
{
    let resultado = Number(valor1.value) * Number(valor2.value)
    document.getElementById("resultado").innerHTML = "<h4>Resultador é:"+resultado+"</h4>";
}
function dividir()
{}
