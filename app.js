// colocamos a função que foi nomeada no <buttom onclick="pesquisar()"> a função sempre possue os parenteses abertos e fechados para 
function pesquisar() {
    // Criar variável para armazenar a tag html let section = , depois document. para acessar o html, e o comando de busca pelo id getElementById("resultados-pesquisa")
    let section = document.getElementById("resultados-pesquisa")
    //console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)

    //se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "Digite uma especialidade para buscar!"
        return
    }

    // Transforma a pesquisa em tudo minúsculo
    campoPesquisa = campoPesquisa.toLowerCase()

    // Cria uma string vazia para armazenar os resultados
    let resultados = "";
    let especialidade = "";
    let descricao = "";
    let tags = "";
    // Para cada dado dentro da lista de dados (dados.js) queremos que algo aconteça
    for (let dado of especialidades) {
        especialidade = dado.especialidade.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se especialidade includes campoPesquisa
        if (especialidade.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                // O += cria um novo elemento HTML para cada resultado
                // Dentro do if, cria um novo elemento se incluir o value do campoPesquisa
                resultados += `<div class="item-resultado"> 
                <figure class="figura-esp"><img src="${dado.image}" alt="${dado.especialidade}"></figure>
                <div>
                <h2>${dado.especialidade}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Veja a especialidade</a>
            </div>
            </div>
            `;    
        }
        // então faça...
        // A ! na condição indica que NÃO TEM NA BASE DE DADOS
        if (!resultados) {
            section.innerHTML = "<p>Especialidade não encontrada.</p>"
            return
        }
    } // Para chamar uma váriavel dentro da cráse (`) utilizar ${chamar a variavel[o índice dos dados].chamar o item desejado}
    // Atribui os resultados gerados a section HTML
    section.innerHTML = resultados;
}