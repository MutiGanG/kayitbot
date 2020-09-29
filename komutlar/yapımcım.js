const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
    .addField('**Developer: **', 'MutiGang,Lemon,Botriperen')
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['developer'],
  permLevel: 0
};

exports.help = {
  name: 'developer',
  description: 'Yapimcimi Gosterir.',
  usage: 'developer'
};

