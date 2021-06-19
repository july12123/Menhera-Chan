import { Message, MessageEmbed } from "discord.js";
import DiscordClient from "../../client/client";
import { checkMusicPermisison } from "../../utils/functions/musicFunctions";
import { BaseCommand } from "../../utils/structures";
export default class VaporwaveCommand extends BaseCommand {
	constructor() {
		super(
			"vaporwave",
			"Add Vaporwave filter",
			"music",
			["vp"],
			"vaporwave",
			"vaporwave"
		);
	}

	async run(client: DiscordClient, message: Message, args: Array<string>) {
		if (!checkMusicPermisison(client, message)) return;
		const { player } = client.queue.get(message.guild?.id);
		const embed = new MessageEmbed().setColor("#554b58");

		if (player.isVapor) {
			player.reset();
			embed.setDescription("Vaporwave Deactivated");
			message.reply({ embeds: [embed] });
			return;
		}
		player.reset();
		player.setVaporWave();
		embed.setDescription("Vaporwave Activated");
		message.reply({ embeds: [embed] });
	}
}
