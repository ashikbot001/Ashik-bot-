const fs = require("fs");
module.exports = {
  config:{
	name: "Joy23",
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
	if (body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf("😬")==0) {
		var msg = {
				body: "যেখানে স্বপ্নয় আমাদের\nএক করতে পারে না\nসেখানে বাস্তবতা তাে নির্মম।🙂\n\nBOSS~ASHIK",
				attachment: fs.createReadStream(__dirname + `/Joy/joytt.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
}
