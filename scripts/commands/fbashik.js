const fs = require("fs");
module.exports = {
  config:{
	name: "fbashik",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf(" ")==0 || body.indexOf("fb ashik")==0 || body.indexOf("fbashik")==0 || body.indexOf("Fb ashik")==0) {
		var msg = {
				body: "কি চাউ তুমি তোমাকে ছেরে অনেক দূরে চলে যাই?😅 fb~link:-https://www.facebook.com/profile.php?id=100095089282395&mibextid=ZbWKwL\n\nBOSS~ASHIK",
				attachment: fs.createReadStream(__dirname + `/Joy/Messenger_creation_9825A13E-DF19-4A0E-A640-69629B148AF2.jpeg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
