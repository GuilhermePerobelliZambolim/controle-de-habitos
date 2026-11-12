# Controle de Hábitos

**Crie bons hábitos. Organize sua rotina. Evolua um dia de cada vez!**

O **Controle de Hábitos** é uma aplicação web desenvolvida para auxiliar na organização e no gerenciamento de hábitos diários. A aplicação permite cadastrar atividades, definir categorias, estabelecer metas diárias, editar informações e excluir hábitos individualmente.

Os dados são armazenados no próprio navegador por meio do **localStorage**, permitindo que as informações permaneçam salvas mesmo após atualizar ou fechar a página.

O projeto foi desenvolvido utilizando **HTML5, CSS3 e JavaScript**, com foco na prática de manipulação do DOM, eventos, arrays de objetos, identificação de registros por IDs únicos e persistência de dados no navegador.

## Demonstração online

Em desenvolvimento.

## Preview

![Controle de Hábitos - Interface da aplicação](./img/imagem.png)

## Funcionalidades

**Implementadas**

- Interface com tema escuro e detalhes em roxo.
- Identidade visual moderna, com tipografia Inter.
- Layout responsivo para diferentes tamanhos de tela.
- Cadastro de hábitos por meio de uma janela de diálogo (`dialog`).
- Preenchimento das informações de cada hábito:
  - Nome do hábito.
  - Categoria.
  - Meta diária.
- Validação para impedir o cadastro de hábitos sem nome.
- Criação dinâmica de cartões para apresentar os hábitos cadastrados.
- Edição das informações dos hábitos existentes.
- Exclusão individual dos hábitos cadastrados.
- Atualização dos cartões após a edição das informações.
- Identificação única de cada hábito utilizando `crypto.randomUUID()`.
- Utilização de IDs para localizar corretamente os registros, permitindo cadastrar hábitos com nomes iguais sem causar conflitos.
- Armazenamento dos hábitos no navegador utilizando `localStorage`.
- Conversão dos dados para JSON utilizando `JSON.stringify()`.
- Recuperação dos dados armazenados utilizando `JSON.parse()`.
- Recuperação automática dos hábitos ao recarregar a página.
- Geração de identificadores para registros antigos que ainda não possuem um ID.
- Atualização do armazenamento após cadastrar, editar ou excluir um hábito.
- Criação de ícones personalizados para edição e exclusão utilizando CSS.

**Status do projeto:** desenvolvido e funcional. As funcionalidades de cadastro, edição, exclusão e persistência dos hábitos estão implementadas.

## Tecnologias utilizadas

- **HTML5:** construção da estrutura da aplicação, organização dos elementos e utilização de formulários e janelas de diálogo.
- **CSS3:** estilização da interface, criação da identidade visual, utilização de variáveis CSS, efeitos de interação, gradientes e responsividade.
- **JavaScript:** implementação da lógica da aplicação, manipulação do DOM, gerenciamento dos hábitos e tratamento de eventos.
- **localStorage:** armazenamento e recuperação dos hábitos diretamente no navegador, garantindo a persistência dos dados.
- **JSON:** conversão dos objetos JavaScript para texto utilizando `JSON.stringify()` e recuperação das informações utilizando `JSON.parse()`.
- **Google Fonts (Inter):** utilização da tipografia Inter para proporcionar uma interface mais moderna e legível.
- **Git e GitHub:** versionamento e publicação do código-fonte do projeto.

## Funcionamento da aplicação

O funcionamento do Controle de Hábitos acontece a partir de uma sequência de operações:

1. Ao iniciar a aplicação, o JavaScript utiliza `localStorage.getItem()` para verificar se existem hábitos armazenados no navegador.
2. Caso existam dados salvos, `JSON.parse()` converte as informações armazenadas em uma estrutura de objetos JavaScript.
3. A aplicação percorre os hábitos recuperados utilizando `forEach()`.
4. Cada hábito é apresentado na interface por meio da função `criarCartao()`, responsável por construir os elementos HTML dinamicamente.
5. Ao clicar no botão de adicionar, a aplicação abre uma janela de diálogo utilizando `showModal()`.
6. O usuário preenche o nome, a categoria e a meta diária do hábito.
7. Após a validação do nome, um novo objeto é criado e recebe um identificador único com `crypto.randomUUID()`.
8. O novo hábito é adicionado ao array principal utilizando `push()`.
9. A interface é atualizada com a criação de um novo cartão.
10. Os dados são convertidos para JSON e armazenados novamente no `localStorage`.

## Cadastro e edição de hábitos

O cadastro e a edição utilizam a mesma janela de diálogo, evitando a necessidade de criar estruturas diferentes para cada operação.

A variável `tarefaEditando` controla se a aplicação está cadastrando um novo hábito ou modificando um registro existente.

- **Cadastro:** quando nenhum cartão está selecionado para edição, um novo objeto é criado e adicionado ao array de hábitos.
- **Edição:** quando um cartão é selecionado, suas informações são carregadas nos campos do diálogo. Após a confirmação, o objeto correspondente é localizado com `find()` e suas propriedades são atualizadas.
- **Identificação:** cada cartão possui um atributo `data-id`, que permite relacionar o elemento HTML ao objeto correspondente no array.

Após cada operação, as informações são atualizadas no `localStorage`, mantendo os dados sincronizados com a interface.

## Exclusão de hábitos

A exclusão é realizada individualmente por meio do botão de lixeira presente em cada cartão.

Para identificar corretamente o hábito que será removido, a aplicação utiliza:

- **findIndex():** localiza a posição do objeto no array por meio do seu identificador único.
- **splice():** remove o objeto encontrado do array de hábitos.
- **remove():** retira o cartão correspondente diretamente do DOM.
- **localStorage.setItem():** atualiza os dados armazenados no navegador após a exclusão.

Essa implementação permite excluir hábitos individualmente, inclusive quando existem registros com nomes iguais.

## Persistência de dados

A persistência é realizada utilizando o recurso `localStorage` do navegador, dispensando a necessidade de um Back-End ou banco de dados externo nesta versão.

O processo utiliza dois métodos principais:

- **JSON.stringify():** transforma o array de objetos em uma string JSON, permitindo armazenar as informações.
- **JSON.parse():** recupera a string armazenada e converte novamente os dados para objetos JavaScript.

Além disso, a aplicação verifica se os hábitos recuperados possuem identificadores. Caso algum registro antigo não possua um ID, um novo identificador é gerado utilizando `crypto.randomUUID()`.

Dessa forma, os hábitos podem ser identificados individualmente, independentemente de seus nomes.

## Organização do projeto

A aplicação possui uma estrutura simples, separando os arquivos responsáveis pela apresentação, estilização e funcionamento:

- **index.html:** estrutura principal da página, contendo os elementos da interface, campos de preenchimento, botões e janela de diálogo.
- **index.css:** estilização da aplicação, definição das cores, tipografia, cartões, botões, efeitos visuais e responsividade.
- **index.js:** implementação da lógica da aplicação, manipulação do DOM, eventos, gerenciamento dos hábitos e persistência dos dados.
- **img/imagem.png:** imagem utilizada para apresentar uma prévia da interface no README.
- **README.md:** documentação do projeto, suas funcionalidades, tecnologias e instruções de execução.

## Como executar o projeto

1. Faça o download ou clone este repositório.
2. Abra a pasta do projeto no editor de código.
3. Localize o arquivo `index.html`.
4. Abra o arquivo diretamente no navegador ou utilize a extensão Live Server do Visual Studio Code.
5. Comece a cadastrar e organizar seus hábitos!

Não é necessário instalar dependências ou configurar um servidor Back-End para executar esta versão.

## Estrutura do projeto

```text
controle-de-habitos/
├── img/
│   └── imagem.png
├── index.html
├── index.css
├── index.js
└── README.md
```

## Objetivo do projeto

O objetivo do Controle de Hábitos é desenvolver uma aplicação prática que permita organizar atividades diárias e, ao mesmo tempo, consolidar os conhecimentos adquiridos durante meus estudos de desenvolvimento Web.

O projeto surgiu da vontade de construir uma aplicação própria, colocando em prática os fundamentos de HTML, CSS e JavaScript, principalmente na manipulação de elementos da página e no gerenciamento de informações.

Durante o desenvolvimento, procurei aplicar e consolidar conhecimentos como:

- Construção de interfaces utilizando HTML5.
- Estilização e organização visual com CSS3.
- Utilização de variáveis CSS e pseudoelementos.
- Manipulação do DOM com JavaScript.
- Criação dinâmica de elementos utilizando `createElement()`.
- Manipulação de arrays e objetos.
- Utilização de métodos como `forEach()`, `find()`, `findIndex()`, `push()` e `splice()`.
- Manipulação de eventos com `addEventListener()`.
- Validação de campos utilizando `trim()`.
- Identificação de registros por meio de IDs únicos.
- Utilização de `crypto.randomUUID()`.
- Conversão de dados com `JSON.stringify()` e `JSON.parse()`.
- Armazenamento e recuperação de informações utilizando `localStorage`.
- Utilização do elemento `dialog` para criação de janelas de interação.
- Organização e versionamento do projeto utilizando Git e GitHub.

O Controle de Hábitos representa mais uma etapa da minha evolução como desenvolvedor, permitindo transformar conhecimentos teóricos em uma aplicação funcional e ampliar minha experiência na construção de projetos utilizando JavaScript.

## Autor

- Guilherme Perobelli Zambolim
- [GitHub](https://github.com/GuilhermePerobelliZambolim)
