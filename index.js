// crie um arquivo chamado .env no diretório raiz do projeto
// adicione as variáveis de ambiente nesse formato e com essas variáveis
/*

MAIL=email@gmail.com
PASSWORD=senha

*/


require('dotenv/config');
var nodemailer = require('nodemailer');
const neatCsv = require('neat-csv');
const fs = require('fs');

const inicio = fs.readFileSync("./ps-financas-2021/inicio.html"); // modificar o inicio do html que será enviado
const fim = fs.readFileSync("./ps-financas-2021/final_reprovados.html"); // modificar o final do html que será enviado

const arquivo_csv = "./candidatos_reprovados.csv" // modificar o caminho do arquivo CSV

// cria um objeto de transporte para o envio de e-mails
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
    }
});


// envia um e-mail com o conteúdo do arquivo CSV
function sendEmail(element){

    var mailOptions = {
        from: process.env.EMAIL,
        to: element.email,
        subject: 'Resultado inscrição processo seletivo SOLARES',
        html: String(inicio) + `Olá, ${element.nome}. <br /> <br />` + String(fim), // alterar o conteúdo do e-mail nos arquivos html que estão no diretório
    };
    
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response); // se deu certo, mostra a resposta do servidor
        }
    });
}

// lê o arquivo CSV e envia um e-mail para cada linha
function startScript(){
    fs.readFile(arquivo_csv, async (err, data) => {
    if (err) {
        console.error(err)
        return
    }
        let dados = await neatCsv(data)

        dados.forEach((element, i) => {
            setTimeout(() => {
                console.log( (i+1) + ' - ' + element.nome)
                sendEmail(element)
            }, 1000*i);
        });
    })
}

// inicia o script
startScript()
