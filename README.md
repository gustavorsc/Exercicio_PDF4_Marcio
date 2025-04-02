# Projeto: Aula 4 - Front-End

## Descrição
Este projeto é uma aplicação React que demonstra o uso de rotas com `react-router-dom`. O objetivo é criar uma navegação dinâmica entre páginas, incluindo parâmetros dinâmicos e um sistema de erro para páginas não encontradas.

## Tecnologias Utilizadas
- React
- React Router DOM
- CSS
- Google Maps API (para exibição do mapa na página de contato)

## Estrutura do Projeto

```
/aula4-rotas
│── /src
│   │── /components
│   │   └── Header
│   │       ├── index.js
│   │       ├── style.css
│   │── /pages
│   │   ├── Home
│   │   │   └── index.js
│   │   ├── Sobre
│   │   │   └── index.js
│   │   ├── Informacoes
│   │   │   ├── index.js
│   │   │   ├── mapa.js
│   │   ├── Produtos
│   │   │   └── index.js
│   │   ├── Loja
│   │   │   └── index.js
│   │   ├── Error
│   │   │   └── index.js
│   ├── App.js
│   ├── Routes.js
│   ├── index.js
│── package.json
│── README.md
```

## Funcionalidades
### 1. Rotas Configuradas
- `/` - Página inicial (Home)
- `/sobre` - Página Sobre
- `/informacoes/:id` - Página de informações (usando parâmetros dinâmicos)
- `/produtos/:id` - Página de produtos (dinâmico)
- `/loja` - Página da loja
- `/informacoes/contato` - Página de contato (incluindo Google Maps)
- `*` - Página de erro para rotas inexistentes

### 2. Implementação do Header
O `Header` é um componente fixo que contém os links para as páginas principais e facilita a navegação entre elas.

### 3. Uso de Parâmetros Dinâmicos
Os produtos podem ser acessados dinamicamente por meio de URLs como:
```
http://localhost:3000/produtos/atari
http://localhost:3000/produtos/super-nintendo
```
Isso evita a necessidade de criar múltiplas páginas estáticas para cada produto.

### 4. Página de Contato com Google Maps
A página `/informacoes/contato` inclui um `iframe` com o Google Maps embutido para exibir a localização da faculdade.

## Instalação e Execução
1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/aula4-rotas.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd aula4-rotas
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```

O projeto estará acessível em `http://localhost:3000`.

## Melhorias Futuras
- Criar um backend para fornecer dados dinâmicos para os produtos.
- Implementar um sistema de autenticação para usuários.
- Melhorar a responsividade da interface para dispositivos móveis.

## Autor
Desenvolvido como parte da Aula 4 de Front-End.
