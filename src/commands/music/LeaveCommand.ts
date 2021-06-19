import { Message, MessageEmbed } from "discord.js";
import DiscordClient from "../../client/client";
import { checkMusicPermisison } from "../../utils/functions/musicFunctions";
import { BaseCommand } from "../../utils/structures";
export default class LeaveCommand extends BaseCommand {
	constructor() {
		super("leave", "Leave Voice Channel", "music", [], "leave", "leave");
	}

	async run(client: DiscordClient, message: Message, args: Array<string>) {
		if (!checkMusicPermisison(client, message)) return;
		const embed = new MessageEmbed()
			.setColor("#554b58")
			.setDescription("Leaving channel");
		const { player } = client.queue.get(message.guild?.id);
		player.disconnect();
		player.destroy();

		client.queue.delete(message.guild?.id);
		message.reply({ embeds: [embed] });
	}
}
