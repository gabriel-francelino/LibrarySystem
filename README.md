# Sistema de Gerenciamento de Biblioteca em TypeScript

Bem-vindo ao repositório do Sistema de Gerenciamento de Biblioteca em TypeScript! Este projeto é um sistema de gerenciamento de biblioteca que permite a gestão de livros, autores e usuários, implementado em TypeScript com foco em orientação a objetos.

## Estrutura do Projeto

O projeto está organizado da seguinte maneira:

- **src/:** Contém o código-fonte do sistema.
<!-- - **test/:** Inclui testes unitários para garantir a integridade do sistema. -->
- **build/:** Armazena os arquivos compilados.

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina antes de prosseguir.

## Como Compilar

Execute o seguinte comando para compilar o projeto:

```bash
npm run build
```

Este comando compilará o código TypeScript para JavaScript e armazenará os arquivos resultantes na pasta `build/`.

## Como Executar

Após a compilação, você pode executar o sistema usando o seguinte comando:

```bash
npm run start
```

<!-- Este comando iniciará o sistema, permitindo que você interaja com as funcionalidades de gerenciamento de biblioteca. -->

## Funcionalidades Principais

### Livro

- Um livro possui atributos como título, autor, ano de publicação e gênero.
- Métodos implementados para emprestar e devolver livros.

### Autor

- Um autor possui atributos como nome, data de nascimento e nacionalidade.
- Métodos implementados para adicionar e remover livros associados ao autor.

### Usuário

- Um usuário possui atributos como nome, email e livros emprestados.
- Métodos implementados para emprestar e devolver livros.

### Biblioteca

- Responsável por manter registros de livros, autores e usuários.
- Métodos implementados para adicionar e remover livros, autores e usuários.
- Fornece métodos para buscar livros por autor, listar livros emprestados, etc.

### Relatórios

- Mecanismo para gerar relatórios, como listar todos os livros emprestados e livros disponíveis.

<!-- ## Testes

Desenvolvemos testes unitários abrangentes para garantir a integridade do sistema. Considere a execução dos testes para verificar a robustez do código.

```bash
npm test
``` -->

## Requisitos Técnicos

- Utilização de classes e interfaces para modelar livros, autores e usuários.
- Implementação de métodos construtores, getters, setters e métodos específicos para cada classe.
- Uso de herança e composição conforme apropriado.
- Consideração da utilização de decorators para adicionar funcionalidades específicas, como logging de operações.

Fique à vontade para explorar, contribuir e melhorar este sistema de gerenciamento de biblioteca em TypeScript!