const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  var toplam = db.fetch(`toplamKayit_${message.author.id}`)
  const genelrol = message.guild.roles.find(r => r.id === "755108408482594917"); 
  const kız = message.guild.roles.find(r => r.id === "755108248629280839"); 
  const misafir = message.guild.roles.find(r => r.id === "755108248629280839"); 
  const log = message.guild.channels.find(c => c.id === "755108195751559248"); 
  const tag = "🐿";
  if(!message.member.roles.array().filter(r => r.id === "755118992745693357")[0]) { 
    return message.channel.send("**Bu İşlemi Gerçekleştirmek İçin Kayıt Sorumlusu Olman Gerekli!**");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.addRole(genelrol)
    c.addRole(kız)
    c.removeRole(misafir)
    c.setNickname(`${tag} ${nick} | ${yas}`)
    db.add(`bayanKayit_${message.author.id}`, 1)
    db.add(`toplamKayit_${message.author.id}`, 1)
    const embed = new Discord.RichEmbed()
    .setAuthor("Kız Kayıt Yapıldı")
    .addField(` <a:krmztik:755128193228472381> Kaydı yapılan\n`, `${c.user.tag}`)
    .addField(` <a:krmztik:755128193228472381> Kaydı yapan\n`, `${message.author.tag}`)
    .addField(` <a:krmztik:755128193228472381> Yeni isim\n`, `${tag} ${nick} , ${yas}`)
    .addField(` <a:krmztik:755128193228472381> Toplam Kayıt\n`, toplam || 0)
    .setFooter("BFC Kayıt Sistemi")
    .setColor("#ffcbdb")
    log.send(embed)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "kız",
  description: "k",
  usage: "kızkayıt"
};

