const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "p!";

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'p!twitter') {
    message.reply('Aquí tienes: https://twitter.com/Pl4yerscom');
  }
});

client.on('message', message => {
	if (!message.content.startsWith(PREFIX)) return;
	
	var args = message.content.substring(PREFIX.length).split(" ");
	
	switch (args[0]) {
		case "":
            message.reply("1- Las reuniones por voz se haran mediante discord 2- Cada uno de los Equipos tiene su propia sala de voz Xbox, PlayStation, Nintendo, PC 3- Cada Equipo tiene un Encargado el encargado hara reuniones por voz se os avisara por telegram o por discord");
			break;
		
        case "help":
            var embed = new Discord.RichEmbed()
            .addField("p!help", "Todos los comandos", true)
            .addField("p!info", "La información básica", true)
            .addField("p!twitter", "Twitter de Pl4yers", true)
            .addField("p!web", "Web de Pl4yers", true)
            .setColor("C70039")
            .setFooter("Ver. Bot 1.0.1🕹")
            .setThumbnail("https://pbs.twimg.com/media/DPhV2acW0AMNPMt.png")
            message.channel.sendEmbed(embed);
            break;
			
		case "info":
            var embed = new Discord.RichEmbed()
            .addField("Charlas", "1- Las reuniones por voz seran mediante Discord", true)
            .addField("Salas", "2- Cada uno de los Equipos tiene su propia sala de voz Xbox, PlayStation, Nintendo, PC", true)
            .addField("Reuniones", "3- Cada Equipo tiene un Encargado el encargado hará reuniones por voz se os avisara por telegram o por discord", true)
            .setColor("C70039")
            .setFooter("Ver. Bot 1.0.1🕹")
            .setThumbnail("https://pbs.twimg.com/media/DPhV2acW0AMNPMt.png")
            message.channel.sendEmbed(embed);
            break;
        default:
        message.channel.sendMessage("El Comando no es valido, Recuerda ningun comando lleva Mayúsculas");
    

	}

});

client.on('message', message => {
    if (message.content === 'p!web') {
      message.reply('Aquí tienes: https://pl4yers.com');
    }
  });

    client.login('Mzg0Mjg0NzY1OTAzMzg4Njgy.DPwkrg.wqMRPGgbvv8dcK5dr_FVGKuY03E');
