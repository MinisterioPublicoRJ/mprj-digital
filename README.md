# RODANDO O PROJETO

## Requerimentos
- Node 14 ou mais recente, e npm compatível

## Rodando o projeto
```
git clone https://github.com/MinisterioPublicoRJ/mprj-digital.git
cd mprj-digital
npm i
```
Crie um arquivo chamado `.env` na raiz do projeto. Esse arquivo deve possuir um valor para a variável `REACT_APP_FORM_API`. Depois é só rodar com `npm start` e o projeto será servido em modo desenvolvimento em [http://localhost:3000](http://localhost:3000)

## Build e deploy
O build é feito com o comando padrão do React (`npm run build`). E usa o [Serve](https://github.com/vercel/serve) para servir os arquivos estáticos, na porta 8080. Nosso OpenShift está configurado para rodar `npm run deploy` no pós-build de produção e `npm run develop` no ambiente de desenvolvimento.

### Para simular localmente o resultado de um build de produção feito no OpenShift
- Primeiro: você precisa garantir que o Serve está instalado globalmente na sua máquina (`npm i -g serve`). Uma vez que esteja instalado:
```
npm run build
serve -s build -l 8080

```
Isso vai servir o projeto em [http://localhost:8080](http://localhost:8080)
