let operandoa;
let operandob;
let operacao;

um.onclick = function(e){
    resultado.textContent = resultado.textContent + "1"; 
};

dois.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
};

tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
};

quatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
};

cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
};

seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
};

sete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
};

oito.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";
};

nove.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
};

zero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";
};

reset.onclick = function(){
    resetar();
};

soma.onclick = function(){
    operandoa = resultado.textContent;
    operacao = "+";
    resultado.textContent = operandoa + operacao;
};


igual.onclick = function(){
    operandoa = resultado.textContent;
    operandob = resultado.textContent;
    resultado.textContent = eval(resultado.textContent);
};

function resetar(){
    resultado.textContent = "";
}



