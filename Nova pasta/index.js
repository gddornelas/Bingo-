function criar_tabela(nome){
//criando elementos principais 
const tabela = document.createElement ("table");
const thead = document.createElement ("thead");
const tbody = document.createElement ("tbody");

//criando cabeçalho 
const tr_nome = document.createElement ("tr");
const td_nome = document.createElement ("td");
td_nome.innerHTML = nome;
td_nome.colSpan = 5;

const th_B = document.createElement ("th");
th_B.innerHTML = "B";
const th_i= document.createElement ("th");
th_i.innerHTML = "i";
const th_n = document.createElement ("th");
th_n.innerHTML = "n";
const th_g = document.createElement ("th");
th_g.innerHTML = "g";
const th_o = document.createElement ("th");
th_o.innerHTML = "o";
     
}