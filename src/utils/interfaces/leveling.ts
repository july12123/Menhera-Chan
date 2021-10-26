export interface userXP {
    user: string;
    xp: number;
    level: number;
    background: string;
    opacity: number;
    trackColor: string;
    textColor: string;
}

export interface guildXP {
    guild: string;
    users: Array<userXP>;
    channels: Array<string>;
    log: string;
    xpIncrement: number;
    cooldown: number;
}

export interface rankcardData {
    width: number;
    height: number;
    backgroundImage: string;
    color: {
        main: string;
        track: string;
    };
    opacity: number;
    username: string;
    discriminator: string;
    avatarURL: string;
    font: {
        bold: string;
        normal: string;
    };
    level: number;
    rank: number;
    xp: number;
    MinXP: number;
    MaxXP: number;
}
