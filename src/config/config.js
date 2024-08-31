require('dotenv').config();

module.exports = {
    token: '',
    clientId: '1273230302822797312',
    guildId: '1106591466651922502',
    youtubeApiKey: process.env.YOUTUBE_API_KEY,
    mongoUri: process.env.MONGO_URI,
    spotify: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },
    cookies: {
        domain: ".youtube.com",
        expirationDate: 1732234773,
        hostOnly: false,
        httpOnly: false,
        name: "_gcl_au",
        path: "/",
        sameSite: "unspecified",
        secure: false,
        session: false,
        storeId: "0",
        value: "1.1.234926006.1724458773"
    },
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
