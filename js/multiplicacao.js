var matriz1 = new Array();
var matriz2 = new Array();
var matriz3 = new Array();

matriz1.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]);
matriz1.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]);
matriz1.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]);

matriz2.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]);
matriz2.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]);
matriz2.push([Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)]);

var linha_1 = matriz1.length;
var coluna_1 = matriz1[0].length;
var linha_2 = matriz2.length;
var coluna_2 = matriz2[0].length;

// multiplicacao das matrizes 1 e 2
var matriz3= [];
for (let i = 0; i < linha_1; i++) {
    matriz3[i] = [];
    for (let j = 0; j < coluna_2; j++) {
        matriz3[i][j] = 0;
        for (let k = 0; k < coluna_1; k++) {
            matriz3[i][j] += matriz1[i][k] * matriz2[k][j];
        }
    }
}

// imprimir a matriz 1
document.write("<br>");
document.write("Aqui podemos ver a primeira matriz:");
document.write("<table border=1>");
for (i = 0; i < matriz1.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz1[i].length; x++) {
        linha = linha + "<td>" + matriz1[i][x] + "</td>";
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

document.write("<br>");

//imprimindo matriz 3 
document.write("Aqui podemos ver o resultado da multiplicação matriz:");
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