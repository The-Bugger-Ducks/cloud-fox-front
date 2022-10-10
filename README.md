<h1 align="center"> Projeto "Cloud Fox" </h1>

Este repositório se refere ao projeto "Cloud Fox", que consiste em um sistema para observação de dados meteorológicos, assim abrangendo a montagem e configuração de uma estação meteorológica com diversos tipos de sensores e um sistema capaz de ler os dados enviados por ela, permitindo a análise de seus dados em gráficos e tabelas tanto em modelo desktop/web quanto mobile.

> Aplicação desenvolvida por alunos do 4º semestre do tecnólogo em Desenvolvimento de Software Multiplataforma, na FATEC Profº Jessen Vidal - São José dos Campos, SP :rocket:

### :hammer_and_wrench: Tecnologias

As seguintes tecnologias e ferramentas foram utilizadas neste projeto: `Figma, React, TypeScript, HTML, CSS, Axios, Styled Components`

### :gear: Como utilizar

É possível acessar a aplicação pelo link de seu deploy (clicando [aqui](https://cloud-fox.netlify.app/)) mas também é possível rodar localmente seguindo o passo a passo abaixo:

- Tutorial para rodar o projeto

Com o [Node](https://nodejs.org/en/) instalado em sua máquina, utilize estes comandos em um terminal:

```bash
# Baixe ou clone este repositório
$ git clone https://github.com/The-Bugger-Ducks/cloud-fox-web.git

# Acesse a pasta, instale as dependências e inicie o projeto
$ cd cloud-fox-web
$ npm i
$ npm start
```

A aplicação inciará localmente na porta 3000. Use o navegador para acessar o link [http://localhost:3000](http://localhost:3000) e executar as funcionalidades da aplicação.

### Explicação da estrutura das pastas

<div align="center">

| Pasta                                    | Definição                                                                                   |
| ---------------------------------------- | ------------------------------------------------------------------------------------------- |
| :open_file_folder: src/public/           | Arquivos públicos do projeto acessível ao público geral por meio de um servidor web         |
| :open_file_folder: src/assets            | Arquivos visuais (imagens, ícones, fontes...)                                               |
| :open_file_folder: src/components        | Código fonte dos componentes do projeto (botões, rodapés, cabeçalhos, barra de navegação..) |
| :open_file_folder: src/global            | Arquivos com configurações que impactam todo o projeto (tema, estilos...)                   |
| :open_file_folder: src/interfaces        | Arquivos com as interfaces utilizadas e compartilhada entre componentes e páginas           |
| :open_file_folder: src/pages             | Código fonte das páginas do projeto                                                         |
| :open_file_folder: src/                  | Código fonte do projeto                                                                     |
| :page_facing_up: package.json            | Arquivo usado para gerenciar as dependências do projeto, scripts e versões                  |

</div>
