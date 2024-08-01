const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mil')
		.setDescription('bei'),
	async execute(interaction) {
		await interaction.reply('mi-l bei');
	},
};