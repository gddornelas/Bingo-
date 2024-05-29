function CriarTabela(){
    //elemento principais 
    const tabela = document.createElement ("table");
    const thead = document.createElement ("thead");
    const tbody = document.createElement ("tbody");

    //cabeçalho
    var nome = prompt("digite seu nome: ")
    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    td_nome.colSpan = 5

    //vincular
    tr_nome.appendChild(td_nome);
    thead.appendChild(tr_nome);

   // Cabeçalhos BINGO
   const letras = ["B", "I", "N", "G", "O"];
   const ths = letras.map(letra => {
       const th = document.createElement("th");
       th.innerHTML = letra;
       return th;
   });
   thead.append(...ths);

   // Números únicos
   const numerosDisponiveis = {
    B: [],
    I: [],
    N: [],
    G: [],
    O: []
};

const ranges = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75]
};

// Preencher números únicos para cada letra
for (const letra in ranges) {
    const [inicio, fim] = ranges[letra];
    for (let i = inicio; i <= fim; i++) {
        numerosDisponiveis[letra].push(i);
    }
}

// Números
for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    letras.forEach(letra => {
        const td = document.createElement("td");
        const index = Math.floor(Math.random() * numerosDisponiveis[letra].length);
        const numero = numerosDisponiveis[letra].splice(index, 1)[0];
        td.innerHTML = numero;
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);
}