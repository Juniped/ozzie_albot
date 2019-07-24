
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const config = require('./config.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token);

// Get Variables from Config file
var prefix = config.prefix;
var leaderboardChannelID = config.leaderboardChannelID;
var verifiedUsers = config.verifiedUsers;
var leaderboard = ""
var players = config.players;

// leaderboardEmbed = new Discord.RichEmbed({title:"Ozzie Albies Bet Leaderboard"})

function getPlayerOPS(players){
    url = "http://redditball.xyz/api/players/search"
    for (let i = 0; i < players.length(); i++){
        parameters = {query:players[i]}

    }
}

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) {
        return;
    }
    const args = msg.content.slice(prefix.length).split(/ +/);
    const author = msg.author.id;
    const command = args.shift().toLowerCase();
    if (!verifiedUsers.includes(author)){
        msg.reply("User is not authorized");
        return;
    }
    if (command === "leaderboard"){
        // leaderboard = "Leaderboard Create"
        leaderboard = client.channels.get(leaderboardChannelID).send({embed:{
            color: 1571843,
            // author: {
            //     name: client.user.username,
            //     icon_url: client.user.avatarURL
            // },
            title:"Ozzie Albies Leaderboard",
            fields:[
            {
                name:"Test",
                value:"This is a test value"
            },
            {
                name: "Juniped",
                value:"∞"
            }],
            timestamp: new Date(),
        }});
        // leaderboardEmbed = new Discord.RichEmbed({title="Ozzie Albies Bet Leaderboard"})

    } else if ( command === "update"){
        leaderboard.endsWith("UPDATE",RichEmbed)
    }

  });


  



  