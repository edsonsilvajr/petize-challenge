# PetizeChallenge

## Versões utilizadas na máquina

- npm: 8.19.3
- node: 18.13.0
- angularCLI: 15.1.5
- OS: win32 x64

* Angular: 15.1.4
  ... animations, common, compiler, compiler-cli, core, forms
  ... platform-browser, platform-browser-dynamic, router

## Package Version

- @angular-devkit/architect 0.1501.5
- @angular-devkit/build-angular 15.1.5
- @angular-devkit/core 15.1.5
- @angular-devkit/schematics 15.1.5
- @angular/cli 15.1.5
- @schematics/angular 15.1.5
- rxjs 7.8.0
- typescript 4.9.5

### OBS: Informações extraídas via `ng version`

## Instalando Dependências

Para instalar as dependências, basta rodar um `npm install` ao clonar esse projeto

## Rodando ambiente de desenvolvimento

Para iniciar o ambiente de desenvolvimento, deve-se primeiro instalar as dependências e então rodar `ng serve` ou `npm start`, o mesmo irá redirecionar para `localhost:4200`, caso não redirecione, é possível acessar diretamente este endereço digitando `localhost:4200` na barra de URL.

## Rodar a build do projeto

Execute `ng build` para compilar o projeto. Os artefatos de compilação serão armazenados no diretório `dist/`.

## Justificando bibliotecas utilizadas

- npx-toastr: excelente para notificar com um toastr quando um erro acontece, conveniente para chamadas a API's no geral, um contorno para evitar fazer validações em campos de input (apesar de não requisitado);
- CSS puro: Já fazia um tempo que eu não utilizava CSS puro para estilizar um projeto, então aproveitei essa oportunidade para dar uma refrescada nos conhecimentos, o layout foi feito de forma responsiva;
- Separando as coisas: devido ao tempo a estrutura do projeto foi feita tentando separar o maximo possível as coisas, componentes na pasta de componentes, páginas nas páginas, elementos UI na pasta UI, tudo para deixar o código mais limpo, é uma estrutura na qual estou acostumado a trabalhar (devido ao fato de quanto maior o projeto, existem mais modulos, não foi o caso para esse projeto devido a simplicidade dele);
- Importando ícones exportados do figma: Tomei a liberdade para exportar os icones em SVG para utilizar como os ícones da interface, para ser o mais fiel possível;

## Este projeto está disponível no Netlify!!

Este projeto está disponível no link: https://petize-challenge.netlify.app

Ele é atualizado com todo PR aceito na branch `master`, assim como qualquer commit direto nesta branch (parecido como CI/CD em um aplicativo rodando no mundo real)

## Foram escritos os testes unitários para todos os componentes e serviços

Para rodar os testes, no terminal utilizar o comando `ng test`
