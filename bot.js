const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.get('1482767785082880010');
  if (!channel) return;

  const memberCount = member.guild.memberCount;

  const embed = new EmbedBuilder()
    .setColor('#00ffcc')
    .setTitle('Ny medlem! 🎉')
    .setDescription(`Välkommen ${member.user}`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addFields(
      { name: '👥 Members', value: `${memberCount}`, inline: true }
    )
    .setFooter({ text: `Du är member #${memberCount}` })
    .setTimestamp();

  channel.send({ embeds: [embed] });
});

client.login(process.env.TOKEN);
