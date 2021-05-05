# AXEL DRINKS :tropical_drink:

Foi desenvolvido um sistema *WEB* que permite fazer uma pesquisa de receitas de coqueteis e drinks!

Nele é possivel listar as receitas de acordo com a busca feita pelo usuário e vizualizar a página da receita selecionada com as seguintes informações:
* a quantidade de cada ingrediente;
* categoria da receita;
* imagem do drink;
* sugestão da taça adequada para àquele drink
* instruções para o preparo;
* botão para inclusão de receita favorita.

No header de cada página existe um link que direciona aos Favoritos e outro para tela de Busca de Receitas. Ao clicar na imagem que está no header o usuário é direcionado à página Inicial da aplicação onde conta-se, de maneira genérica, a história da **Axel Drinks**.

Na tela de Favoritos encontra-se a receita que o usuário selecionou como tal. Ao clicar na imagem do drink nessa tela volta-se à tela da receita do drink favoritado. Existe também o botão que retira a receita da lista de favoritos.

Ao clicar em *Pesquise sua receita preferida* a página de busca de receitas é aberta. Há um input que faz a busca da receita de acordo com o que for digitado pelo usuário.

Para a realização desse sistema utilizou-se como framework de desenvolvimento o **Angular** 10.1.5  com **TypeScript** como linguagem de programação, que interage com o servidor(**API-TheCocktailDB**) via serviços REST. Além das linguagens de formatação e estilo o **HTML** e **CSS**.
Para os testes unitários utilizou-se o **Karma**, para executar os testes automatizados e o **Jasmine**, como framework/linguagem.
Até o momento da escrita desse README a cobertura total de testes em Linhas está em **96%**.

O versionamento do projeto foi feito seguindo algumas diretrizes do GitFlow, neste repositório do GitHub. Os commits foram identificados com GitMoji para melhor identificação.


## Como rodar a aplicação localmente?

- no terminal faça os seguintes passos

1.Clone o repositório:
* git clone git@github.com:brendaaxel/Drinkaria.git
- Entre na pasta do repositório que você acabou de clonar:
* cd Drinkaria

2.Instale as dependências:
* npm install

3.Inicialize o projeto:
* npm start

4. Abra o navegador com a seguinte url:
* localhost:4200

**Obs: Para que a busca funcione é necessário estar conectado à internet.**

## Como rodar os Testes Unitários? :white_check_mark:

1. Pare a compilação do projeto
* ctrl + C

2. Para rodar os testes:
* npm test

3. Para saber a cobertura de testes unitários:*
* npm test --code-coverage
* abra a pasta /Coverage que está na raiz do projeto
* abra no navegador o arquivo index.html




**Projeto Desenvolvido por Brenda Axel - 05 de Maio de 2021**
