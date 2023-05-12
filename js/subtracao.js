var matriz = new Array();
var matriz2 = new Array();
var matriz3 = new Array();

matriz.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
matriz.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]);
matriz.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]);

matriz2.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]);
matriz2.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]);
matriz2.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]);



document.write("Aqui podemos ver primeira matriz:");
// imprimir a matriz 1
document.write("<table border=1>");
for (i = 0; i < matriz.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz[i].length; x++) {
        linha = linha + "<td>" + matriz[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

document.write("<br>");

document.write("Aqui podemos ver segunda matriz:");
// imprimir a matriz 2
document.write("<table border=2>");
for (i = 0; i < matriz2.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz2[i].length; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");

// loop passando nas linhas
for (let i = 0; i < matriz.length; i++) {
  matriz3[i] = [];
  
  //loop passando nas colunas
  for (let j = 0; j < matriz[i].length; j++) {
    var soma = matriz[i][j] - matriz2[i][j];
    
    // resultado na matriz 3
    matriz3[i][j] = soma;
  }
}

document.write("<br>");


document.write("A terceira matriz é a subtração da primeira matriz com a segunda:");
//imprimindo matriz 3 
document.write("<table border=2>");
for (i = 0; i < matriz3.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz3[i].length; x++) {
        linha = linha + "<td>" + matriz3[i][x] + "</td>";
    }
    linha = linha + "</tr>"
    document.write(linha);
}
document.write("</table>");