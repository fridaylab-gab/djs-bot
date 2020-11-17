/* 💻 » Cauã explica: require('discord.js'); */
const Discord = require('discord.js');
const client = Discord.Client();
const application = require('./params.json');

client.on('ready', async function() => {
  /* client.on(event, param => {}) — a função client.on(event, ...) requer
  um evento, neste caso o evento é o READY, evento esse que acontece quando
  a aplicação conclui seu login (confira a linha 17), assim que a aplicação
  conclui seu login, sua conexão ao Discord, este evento é provocado. */
  console.log("[LOGS]: ACORDADO.");
  /* console.log(string) — a função console.log(string) requer um texto,
  isto é, esta função requer uma cadeia de letras, um texto, essa função
  imprime no console a mensagem informada, essa mensagem deve estar cercada
  de aspas duplas ("), ex.: console.log("Olá, mundo!"); */
});

client.login(application.token);
/* client.login() — a função client.login() requer o cliente do discord.js
(também conhecido como bot, ou app), essa função conecta a aplicação ao
Discord, a função pede uma chave — chamamos esta chave de token — que pode
ser encontrada em [¹/README.md]. */
