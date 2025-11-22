let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function avaliarAtletas(objAtletas) {
    for (let i = 0; i < objAtletas.length; i++) {
        let nome = objAtletas[i].nome;
        let notas = objAtletas[i].notas;

        notas = notas.sort((a, b) => a - b);


        let soma = 0;
        let notasValidas = notas.slice(1, 4);
        notasValidas.forEach((nota) => {
           return soma = soma + nota
        });

        let media = soma / notasValidas.length;

        console.log(`Atleta: ${nome}`);
        console.log(`Notas Obtidas: ${notas.join(", ")}`);
        console.log(`Média Válida: ${media}`);
        console.log("-----------------------------------");
    }
}
avaliarAtletas(atletas)