# Movies Catalog Basic API
----------------------------------------------------------------------------------
## Description:
CRUD básico para um catálogo de filmes, com autenticação e cadastro de usuários e autenticação em todos os endpoints de filmes.
<details open="open">
  <summary>Tecnologias utilizadas:</summary>
    <ul>
      <li>Typescript</li>
      <li>Nest.js</li>
      <li>Docker</li>
      <li>JWT</li>
      <li>TypeORM</li>
      <li>PostgreSQL</li>
      <li>Swagger</li>
    </ul>
 </details>
 
 ------------------------------------------------------------------
 ## Tempo de experiência com cada ferramenta:
<details open="open">
  <summary>Experiência:</summary>
    <ul>
      <li>Typescript: 2 meses</li>
      <li>Nest.js: 4 dias</li>
      <li>Docker: 6 meses</li>
      <li>JWT: 4 meses</li>
      <li>TypeORM: 4 dias</li>
      <li>PostgreSQL: 4 dias</li>
      <li>Swagger: 1 dia</li>
      <li>Heroku: 2 meses</li>
      <li>Redis: nenhuma</li>
    </ul>
 </details>
 
 ------------------------------------------------------------------
 ### Observações:
 <details open="open">
  As únicas ferramentas pedidas neste desafio com as quais eu já tinha familiaridade são Typescript, Docker, JWT e Heroku.<br />
  Por não ter tanta experiência com Nest.js não consegui finalizar a configuração do docker, os contâineres estão funcionando, o docker compose está funcionando, no entanto não consigo rodar o app dentro do container por problemas com a porta. Por conta disso, não tive tempo de fazer o deploy no Heroku.<br />
  Por falta de tempo também não implementei o Redis como ferramenta de cache para reduzir o número de acessos ao banco.<br />
  Muitos dos comentários restantes nos arquivos deste projeto se devem ao fato de que eu ainda estava lendo as documentações e pesquisando para implementar soluções mais orgânicas e dinâmicas. Como, por exemplo, utilizar migrations para automatizar a população do database.<br /><br />
  
  Só tenho a agradecer a oportunidade de participar do processo, foram dias intensos e de muita aprendizagem.<br /><br />
  
  #### Considerações para implementação futura:
  Transformar o gênero dos filmes em uma tabela independente no database, criando uma relação entre movies e genres. Alguns desses arquivos estão feitos, só não terminei a implementação por falta de tempo.<br />
  Transformar as interfaces em classes para que possa utilizar o swagger para documentá-las usando o @ApiBody().<br />
  Criar validações para o corpo das requisições utilizando classes no Nest.js ou uma biblioteca externa como o Joi.<br />
  Organizar melhor a arquitetura do projeto em folders adequados.<br />
  Automatizar a população do database de forma mais eficiente, no momento estou rodando as migrations manualmente.<br />
 </details>



