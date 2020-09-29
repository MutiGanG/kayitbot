const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');//lrowsxrd
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');//lrowsxrd
const { Client, Util } = require('discord.js');
const weather = require('weather-js')//lrowsxrd//lrowsxrd
const fs = require('fs');
const db = require('quick.db');//lrowsxrd
const http = require('http');
const express = require('express');//lrowsxrd
require('./util/eventLoader.js')(client);
const path = require('path');//lrowsxrd
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();//lrowsxrd
app.get("/", (request, response) => {
  console.log(Date.now() + "Developer botriperen,losturcos | BFC");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};//lrowsxrd

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });//lrowsxrd
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   lrowsxrd(chalk.bgBlue.green(e.replace(regTokenlrowsxrd'that was redacted')));
// }); //lrowsxrd//

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\


client.on('guildMemberAdd', async member => {
  await member.addRole(`755108408482594917`) 
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = '<a:pluton_red:754477230230601798> Tehlikeli'
} else {
takizaman = `<a:pluton_onay:754477642320838736> Güvenli`}require("moment-duration-format");
 let zaman1 = new Date().getTime() - user.createdAt.getTime()
 const gecen = moment.duration(zaman1).format(` YY [Yıl,] DD [Gün,] HH [Saat,] mm [Dakika,] ss [Saniye]`) 
 let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
 let message = member.guild.channels.find(x => x.id === `755108195751559248`)
  const taki = new Discord.RichEmbed()
 .setTitle(
     "BFC'ye Hoşgeldin"
   )
   .setDescription(`<a:ignedeligi:755128186324648037>**・ **Sunucumuza Hoş geldin** ${member} 
   
<a:elmas:755125064717959208>**・Seninle Beraber** ${message.guild.memberCount} **Kişiyiz**


<a:farkltik:755128331812339743>**・ Kaydının Yapılması İçin İsmini ve Yaşını Yaz**

<a:kral:755128322899574996>**・<@&755118992745693357> **Rolündeki Yetkililer Seninle İlgilenecektir**

<a:kral:755128322899574996>**・ **Sunucumuzun Sınırsız Davet Bağlantısı** https://discord.gg/cPmKjzU


<a:sonsuzluk:755128152464031774> **・ **Hesap Açılalı** ${gecen} **Olmuş**
<a:donusum2:755128317593649393> **・  **Bu Kullanıcı** **|** **${takizaman}**
`)
.setColor('BLACK')
message.send(taki)
 
         });
/////////////////////////
