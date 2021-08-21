# Bot que envia vários emails usando Node.js

#### baixar o programa:
```sh
git clone https://github.com/SolaresUfes/envio_emails_js.git
```

#### instalar as dependências:
```sh
npm install
```

#### Criar um arquivo .env
Crie um arquivo .env no diretório raiz do projeto.

Adicione as variáveis de ambiente nesse formato e com essas variáveis:

```
MAIL=email@gmail.com
PASSWORD=senha
```

Modifique os conteúdos dos arquivos csv. Não apague a primeira linha dos csv (as que contem "nome,email...")

Modifique os arquivos html, que estão dentro da pastas "ps-financas-2021" se precisar mudar o formato e conteúdo do email.
Olhe no index.js, você verá que dividimos o html em inicio e fim para poder modificar o conteúdo do meio com o nome ou algum dado do candidato.


#### Rode o script
```sh
npm start
```

