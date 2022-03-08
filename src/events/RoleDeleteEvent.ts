import BaseEvent from "../structures/BaseEvent";
import DiscordClient from "../client/client";
import { MessageEmbed, Role } from "discord.js";
import { ModLog } from "../utils/functions/mod";

export default class Event extends BaseEvent {
    constructor() {
        super("roleDelete");
    }
    async run(client: DiscordClient, role: Role) {
        var embed = new MessageEmbed()
            .setTitle("Role Deleted")
            .setColor("RANDOM")
            .addFields({ name: "Role Name:", value: `\`${role.name}\`` });
        ModLog(client, role.guild.id, embed);
    }
}
