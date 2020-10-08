# Filmfy - Processo Seletivo Junto Seguros

Essa aplicação foi desenvolvida como participação do processo seletivo para a vaga de Desenvolvedor de FrontEnd da Junto Seguros. As tecnologias utilizadas foram React.js com Typescript + Hooks, Styled Components para a estilização e Axios para o consumo dos dados da API do moviedb. Os testes foram escritos com Cypress.

Foram desenvolvidas as páginas de login e a home. Embora a página de login não apresente autenticação, ao clicar no botão "Entrar" ela redireciona o usuário à home. Na home, o usuário pode pesquisar por nomes de filmes. Caso ele tente fazer uma pesquisa com o input vazio ou o nome errado, ele recebe um erro. Caso a pesquisa seja feita corretamente, ele recebe até dez filmes que correspondem ao valor pesquisado.

Para finalizar, foi realizado o deploy do projeto utilizando a Vercel, e o mesmo pode ser acessado neste [link](https://filmfy.vercel.app/).

## Configuração para Desenvolvimento

Para rodar o projeto localmente

```sh
yarn && yarn start
```

Para realizar os testes
```sh
yarn run cypress open
``` 