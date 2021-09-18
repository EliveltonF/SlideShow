let num1;
let num2;
let num3
let vari;
let banco = [];
let a;
var veri = true
let consta = false






function aa(event) {
    var variavel = document.getElementById('dentroVisor').innerHTML;
    var tamanho = variavel.toString();
    console.log(tamanho.length,tamanho)
    if(tamanho.length < 12) {
        document.getElementById('dentroVisor').innerHTML = (variavel + event)
    }else {
        alert('tamanho excecido')
    }
}
function back() {
    var variavel = document.getElementById('dentroVisor').innerHTML;
    document.getElementById('dentroVisor').innerHTML = variavel.substring(0,variavel.length-1)
}
function igual() {

    var variavel = document.getElementById('dentroVisor').innerHTML;
    if(variavel) {
        document.getElementById('dentroVisor').innerHTML = eval(variavel);
    }
}






