var saltoLinea = "<br>";
var numeros = 10;
var matriz = ["valor1","valor2","valor3","valor8","valor9","valor10"];

for(i = 0; i <= 10; i++){
    document.write("Iteración"+ i + saltoLinea);
}

for(i = 0; i <= numeros; i++){
    document.write("Iteración"+ i + saltoLinea);
}
//matriz.length - 1 es porque empieza a contar desde valor 1 y así no sale undefined
for(i = 0; i <= matriz.length - 1; i++){
    document.write(matriz[i] + saltoLinea);
}

for(i = 7; i >= matriz.length - 1; i--){
    document.write(matriz[i] + saltoLinea);
}