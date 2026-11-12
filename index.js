const botaoMais = document.getElementById("botao-mais");
const nomeHabito = document.getElementById("nomeHabito");
const categoriaHabito = document.getElementById("categoriaHabito");
const metaDiaria = document.getElementById("metaDiaria");
const addDialogo = document.getElementById("addDialogo");
const bloco3 = document.getElementById("bloco-3");
const meuDialogo = document.getElementById("meuDialogo");

// Array para guardar os hábitos
let habitos = [];

// Recupera os dados salvos
const dadosSalvos = localStorage.getItem("habitos");

if (dadosSalvos !== null) {
  habitos = JSON.parse(dadosSalvos);
}

habitos.forEach((habito) => {
  // Verifica se o ID não existe (é undefined ou ausente)
  if (habito.id === undefined) {
    habito.id = crypto.randomUUID();
  }
});
const textoHabitos = JSON.stringify(habitos);
localStorage.setItem("habitos", textoHabitos);

// Percorre os hábitos recuperados
habitos.forEach(function (habito) {
  criarCartao(
    habito.id,
    habito.tituloTexto,
    habito.categoriaTexto,
    habito.metaTexto,
  );
});

// Guarda o cartão que está sendo editado
let tarefaEditando = null;

// Abre o diálogo para criar uma tarefa
botaoMais.addEventListener("click", function () {
  tarefaEditando = null;

  nomeHabito.value = "";
  categoriaHabito.value = "";
  metaDiaria.value = "";

  meuDialogo.showModal();
});

// Adiciona uma tarefa ou salva uma edição
addDialogo.addEventListener("click", function (event) {
  event.preventDefault();

  const tituloTexto = nomeHabito.value.trim();
  const categoriaTexto = categoriaHabito.value.trim();
  const metaTexto = metaDiaria.value.trim();

  // Evita criar tarefas sem nome
  if (tituloTexto === "") {
    nomeHabito.focus();
    return;
  }

  // Se existe uma tarefa selecionada, atualiza
  if (tarefaEditando !== null) {
    //Caso seja uma alteração e nao um novo!
    //encontrar o objeto existente e atualizar suas propriedades.
    const encontrado = habitos.find(function (habito) {
      return habito.id === tarefaEditando.getAttribute("data-id");
    });
    if (encontrado !== undefined) {
      encontrado.tituloTexto = tituloTexto;
      encontrado.categoriaTexto = categoriaTexto;
      encontrado.metaTexto = metaTexto;

      tarefaEditando.querySelector("#titulo-2").textContent = tituloTexto;
      tarefaEditando.querySelector(".categoria").textContent = categoriaTexto;
      tarefaEditando.querySelector(".sequencia1").textContent = metaTexto;
    } else {
      return;
    }
    // Encerra o modo de edição
    tarefaEditando = null;
  } else {
    //  Criar um objeto novo e adicioná-lo ao array com push()
    const habito = {
      id: crypto.randomUUID(),
      tituloTexto: tituloTexto,
      categoriaTexto: categoriaTexto,
      metaTexto: metaTexto,
    };
    habitos.push(habito);

    //Chamar a function que criei
    criarCartao(habito.id, tituloTexto, categoriaTexto, metaTexto);
  }
  // Converter habitos para JSON e salvar no localStorage.
  const textoHabitos = JSON.stringify(habitos);
  localStorage.setItem("habitos", textoHabitos);

  // Limpa os campos e fecha o diálogo
  nomeHabito.value = "";
  categoriaHabito.value = "";
  metaDiaria.value = "";

  meuDialogo.close();
});

function criarCartao(id, tituloTexto, categoriaTexto, metaTexto) {
  // Cria um cartão novo
  const meio = document.createElement("div");
  meio.className = "cartao-habito";
  meio.id = "meio";
  // Guardar o ID no HTML
  meio.setAttribute("data-id", id);

  const bloco18 = document.createElement("div");
  bloco18.id = "bloco-18";

  const titulo = document.createElement("h3");
  titulo.id = "titulo-2";
  titulo.textContent = tituloTexto;

  const sequencia = document.createElement("span");
  sequencia.className = "sequencia1";
  sequencia.textContent = metaTexto;

  const categoria = document.createElement("span");
  categoria.className = "categoria";
  categoria.textContent = categoriaTexto;

  bloco18.append(titulo, sequencia, categoria);

  // Cria os botões de ação
  const editarRemover = document.createElement("div");
  editarRemover.className = "editar-remover";

  const botaoEditar = document.createElement("button");
  botaoEditar.type = "button";
  botaoEditar.className = "editar";
  botaoEditar.setAttribute("aria-label", "Editar hábito");

  const botaoLixeira = document.createElement("button");
  botaoLixeira.type = "button";
  botaoLixeira.className = "lixeira";
  botaoLixeira.setAttribute("aria-label", "Excluir hábito");

  editarRemover.append(botaoEditar, botaoLixeira);
  meio.append(bloco18, editarRemover);

  bloco3.appendChild(meio);
  bloco3.style.display = "flex";

  // Abre o diálogo preenchido
  botaoEditar.addEventListener("click", function () {
    tarefaEditando = meio;

    nomeHabito.value = titulo.textContent;
    categoriaHabito.value = categoria.textContent;
    metaDiaria.value = sequencia.textContent;

    meuDialogo.showModal();
  });

  // Exclui somente este cartão
  botaoLixeira.addEventListener("click", function () {
    if (tarefaEditando === meio) {
      tarefaEditando = null;
    }

    //encontrar a posição do objeto, para excluir.
    const indiceHabito = habitos.findIndex(function (habito) {
      return habito.id === meio.getAttribute("data-id");
    });
    if (indiceHabito !== -1) {
      habitos.splice(indiceHabito, 1);

      // Salvar no localStorage.
      const textoHabitos = JSON.stringify(habitos);
      localStorage.setItem("habitos", textoHabitos);

      meio.remove();
    }

    if (bloco3.children.length === 0) {
      bloco3.style.display = "none";
    }
  });
}
