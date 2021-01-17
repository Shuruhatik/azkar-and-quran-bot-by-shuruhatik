const express = require("express");
const app = express();

app.listen(() => console.log("Starting..."));
app.use('/ping', (req, res) => {
  res.send(new Date());
});
///All Copy Right Reserved For: Shuruhatik  in YT

const discord = require("discord.js");
const shuruhatik = new discord.Client();
const ytdl = require('ytdl-core');
const moment = require("moment");
const ms = require("ms");
const pretty = require("pretty-ms");

////////تعديلات القران الكريم

var botbyshuruhatik = {
  channelid: "794954207853281284",
  guildid: "794954207853281280",
  status: "",
  prefix: "#",
  alquruan: "",
  colorembed: "",
};

////////////اذكار

var azkarbyshuruhatik = {
  imageembed: "",
  colorembed: "",
  channelname: "azkar",
  time: "9000",
};


///All Copy Right Reserved For: Shuruhatik  in YT


shuruhatik.on("ready", async () => {
  console.log(`
    |------------------------------------------------|
    |                                                |
    | - Bot name : ${shuruhatik.user.username}       |
    |                                                |
    |------------------------------------------------|
    |                                                |
    | - All Copyrights To https://www.shuruhatik.ml/ |
    |                                                |
    |------------------------------------------------|
    |                                                |
    | - Bot id : ${shuruhatik.user.id}               |
    |                                                |
    |------------------------------------------------|
    |                                                |
    | - Bot developer : Shuruhatik#0001              |
    |                                                |
    |------------------------------------------------|

██████████████████████████████████████████████████████████████████████████████████████████
█▄─▄─▀█─▄▄─█─▄─▄─███▄─▄─▀█▄─█─▄███─▄▄▄▄█─█─█▄─██─▄█▄─▄▄▀█▄─██─▄█─█─██▀▄─██─▄─▄─█▄─▄█▄─█─▄█
██─▄─▀█─██─███─██████─▄─▀██▄─▄████▄▄▄▄─█─▄─██─██─███─▄─▄██─██─██─▄─██─▀─████─████─███─▄▀██
▀▄▄▄▄▀▀▄▄▄▄▀▀▄▄▄▀▀▀▀▄▄▄▄▀▀▀▄▄▄▀▀▀▀▄▄▄▄▄▀▄▀▄▀▀▄▄▄▄▀▀▄▄▀▄▄▀▀▄▄▄▄▀▀▄▀▄▀▄▄▀▄▄▀▀▄▄▄▀▀▄▄▄▀▄▄▀▄▄▀
    `)
  await shuruhatik.user.setActivity(`${shuruhatik.stat || "Bot by Shuruhatik"}`, {///All Copy Right Reserved For: Shuruhatik  in YT
    type: "COMPETING",
  })
});///All Copy Right Reserved For: Shuruhatik  in YT


/*

- [       All Copy Right Reserved For: Shuruhatik  in YT     ] -

*/


shuruhatik.on('message', message => { ///All Copy Right Reserved For: Shuruhatik  in YT
if(message.content === botbyshuruhatik.prefix + 'مصحف' || message.content === botbyshuruhatik.prefix + 'ms7f') {
	var pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png','http://quran.ksu.edu.sa/ayat/safahat1/201.png','http://quran.ksu.edu.sa/ayat/safahat1/202.png','http://quran.ksu.edu.sa/ayat/safahat1/203.png','http://quran.ksu.edu.sa/ayat/safahat1/204.png','http://quran.ksu.edu.sa/ayat/safahat1/205.png','http://quran.ksu.edu.sa/ayat/safahat1/206.png','http://quran.ksu.edu.sa/ayat/safahat1/207.png','http://quran.ksu.edu.sa/ayat/safahat1/208.png','http://quran.ksu.edu.sa/ayat/safahat1/209.png','http://quran.ksu.edu.sa/ayat/safahat1/210.png','http://quran.ksu.edu.sa/ayat/safahat1/211.png','http://quran.ksu.edu.sa/ayat/safahat1/212.png','http://quran.ksu.edu.sa/ayat/safahat1/213.png','http://quran.ksu.edu.sa/ayat/safahat1/214.png','http://quran.ksu.edu.sa/ayat/safahat1/215.png','http://quran.ksu.edu.sa/ayat/safahat1/216.png','http://quran.ksu.edu.sa/ayat/safahat1/217.png','http://quran.ksu.edu.sa/ayat/safahat1/218.png','http://quran.ksu.edu.sa/ayat/safahat1/219.png','http://quran.ksu.edu.sa/ayat/safahat1/220.png','http://quran.ksu.edu.sa/ayat/safahat1/221.png','http://quran.ksu.edu.sa/ayat/safahat1/222.png','http://quran.ksu.edu.sa/ayat/safahat1/223.png','http://quran.ksu.edu.sa/ayat/safahat1/224.png','http://quran.ksu.edu.sa/ayat/safahat1/225.png','http://quran.ksu.edu.sa/ayat/safahat1/226.png','http://quran.ksu.edu.sa/ayat/safahat1/227.png','http://quran.ksu.edu.sa/ayat/safahat1/228.png','http://quran.ksu.edu.sa/ayat/safahat1/229.png','http://quran.ksu.edu.sa/ayat/safahat1/230.png','http://quran.ksu.edu.sa/ayat/safahat1/231.png','http://quran.ksu.edu.sa/ayat/safahat1/232.png','http://quran.ksu.edu.sa/ayat/safahat1/233.png','http://quran.ksu.edu.sa/ayat/safahat1/234.png','http://quran.ksu.edu.sa/ayat/safahat1/235.png','http://quran.ksu.edu.sa/ayat/safahat1/236.png','http://quran.ksu.edu.sa/ayat/safahat1/237.png','http://quran.ksu.edu.sa/ayat/safahat1/238.png','http://quran.ksu.edu.sa/ayat/safahat1/239.png','http://quran.ksu.edu.sa/ayat/safahat1/240.png','http://quran.ksu.edu.sa/ayat/safahat1/241.png','http://quran.ksu.edu.sa/ayat/safahat1/242.png','http://quran.ksu.edu.sa/ayat/safahat1/243.png','http://quran.ksu.edu.sa/ayat/safahat1/244.png','http://quran.ksu.edu.sa/ayat/safahat1/245.png','http://quran.ksu.edu.sa/ayat/safahat1/246.png','http://quran.ksu.edu.sa/ayat/safahat1/247.png','http://quran.ksu.edu.sa/ayat/safahat1/248.png','http://quran.ksu.edu.sa/ayat/safahat1/249.png','http://quran.ksu.edu.sa/ayat/safahat1/250.png']
	var page = 1;


	var embed = new discord.MessageEmbed()///All Copy Right Reserved For: Shuruhatik  in YT
	.setColor(`${botbyshuruhatik.colorembed || "#ce4500"}`)
	.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://images-ext-2.discordapp.net/external/Fp9gUUJ_-w-JKouEOUSeDrP0mPDn4PBlOunqJiqA7Ao/https/e7.pngegg.com/pngimages/698/430/png-clipart-the-holy-qur-an-text-translation-and-commentary-tafsir-noble-quran-quran-translations-al-quran-holy-qur-an-text.png?width=427&height=427')
	.setImage(pages[page-1])


	message.channel.send(embed).then(msg => {///All Copy Right Reserved For: Shuruhatik  in YT

		msg.react('⏮').then( r => {
			msg.react('⬅')
		.then(() => msg.react('➡'))
		.then(() => msg.react('⏭'))

		let backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
			let forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

			let sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
			let sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;

		let backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
			let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });

		let sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
			let sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });

			backwards.on('collect', r => {
				if (page === 1) return;
				page--;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://images-ext-2.discordapp.net/external/Fp9gUUJ_-w-JKouEOUSeDrP0mPDn4PBlOunqJiqA7Ao/https/e7.pngegg.com/pngimages/698/430/png-clipart-the-holy-qur-an-text-translation-and-commentary-tafsir-noble-quran-quran-translations-al-quran-holy-qur-an-text.png?width=427&height=427');
				msg.edit(embed)
			})
			forwards.on('collect', r => {
				if (page === pages.length) return;
				page++;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://images-ext-2.discordapp.net/external/Fp9gUUJ_-w-JKouEOUSeDrP0mPDn4PBlOunqJiqA7Ao/https/e7.pngegg.com/pngimages/698/430/png-clipart-the-holy-qur-an-text-translation-and-commentary-tafsir-noble-quran-quran-translations-al-quran-holy-qur-an-text.png?width=427&height=427');
				msg.edit(embed)
			})
			sbackwards.on('collect', r => {
				if (page === 1) return;
				page = 1;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://images-ext-2.discordapp.net/external/Fp9gUUJ_-w-JKouEOUSeDrP0mPDn4PBlOunqJiqA7Ao/https/e7.pngegg.com/pngimages/698/430/png-clipart-the-holy-qur-an-text-translation-and-commentary-tafsir-noble-quran-quran-translations-al-quran-holy-qur-an-text.png?width=427&height=427');
				msg.edit(embed)
			})
			sforwards.on('collect', r => {
				if (page === pages.length) return;
				page = 250;
				embed.setImage(pages[page-1]);
				embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://images-ext-2.discordapp.net/external/Fp9gUUJ_-w-JKouEOUSeDrP0mPDn4PBlOunqJiqA7Ao/https/e7.pngegg.com/pngimages/698/430/png-clipart-the-holy-qur-an-text-translation-and-commentary-tafsir-noble-quran-quran-translations-al-quran-holy-qur-an-text.png?width=427&height=427');
				msg.edit(embed)
			})
			})
		})
	}
	});


shuruhatik.on('ready', async () => {
  let channel = shuruhatik.channels.cache.get(botbyshuruhatik.channelid) || await shuruhatik.channels.fetch(botbyshuruhatik.channelid)

  if(!channel) return;
  const playquruan = await channel.join();
   playquruan.play(ytdl(botbyshuruhatik.alquruan || "https://www.youtube.com/watch?v=M6z0Qql4-qo&t=4s"))
});

setInterval(async function(){
  if(!shuruhatik.voice.connections.get(botbyshuruhatik.guildid)) {
    let channel = shuruhatik.channels.cache.get(botbyshuruhatik.channelid) || await shuruhatik.channels.fetch(botbyshuruhatik.channelid)
    if (!voiceChannel) return message.reply(`**هذه ليس روم صوتي**`);
    console.log("الآن يمكنك الاستماع إلى القرآن الكريم ✅");
    if(!channel) return;
   
   const playquruan = await channel.join()
   playquruan.play(ytdl(botbyshuruhatik.alquruan || "https://www.youtube.com/watch?v=M6z0Qql4-qo&t=4s"))
  }
}, 15000)


var facts = [
  '> قال تعالى: وَالذَّاكِرِينَ اللَّهَ كَثِيراً وَالذَّاكِرَاتِ أَعَدَّ اللَّهُ لَهُم مَّغْفِرَةً وَأَجْراً عَظِيماً',
'> ان الصلاة كانت على المؤمنين كتابا موقوتا',
'> اللهم إني أسالك قبل الموت توبة، وعند الموت شهادة، وبعد الموت جنة ونعيمًا.',
'> اللهم بشرني بما أحب وأصرف عني ما أكره ووفقني لما تحب وترضى',
'> يارب قرّ عيني بكل دعوه فاض بها قلبي وأفرحني بقدر ما أحسنت الظن بك .',
'> الحياة تذهبُ وتبقى الباقِياتُ الصّالحاتُ : سُبحان الله والحمدلله ولا إله إلا الله والله أكبر ولاحول ولا قوة إلا بالله.',
'> سبحان الله عدد ما أحصى كتابه ، سبحان الله ملء ما أحصى كتابه ، سبحان الله عدد كل شيء ، سبحان الله ملء كل شيء',
'> سبحان الله ، الحمدلله ، لا إله إلا الله ، الله أكبر ولا حول ولا قوة إلا بالله',
'> بسم الله الذي لا يضرُ مع اسمهِ شئٌ في الارضِ ولا في السماء وهو السميع العليم',
'> اللهم قني عذابك يوم تبعث عبادك.',
'> اللهم إني أعوذ بك من زوال نعمتك وتحول عافيتك وفجاءة نقمتك وجميع سخطك',
'> اللهم إنا نسألك حبك ، وحب من يحبك ، وحب كل عمل يقربنا إلى حبك',
'> ﴿وَذَكِّرْ فَإِنَّ الذِّكْرَىٰ تَنْفَعُ الْمُؤْمِنِينَ﴾',
'> لا إِلَهَ إِلاَّ الله ، الله أَكْبَر ',
'> لا يُكَلِّف اللهُ نَفْساً إلاَّ وسعَها',
'> اللهُمَّ كرهني في معصيتك وحببني فِي طاعتك',
'> اللهم اجعلنا مقيمين للصلاة لنستريح بها لا لنستريح منها',
'> اللهم باعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب، اللهم نقني من خطاياي كما ينقى الثوب الأبيض من الدنس',
'> رضيت بالله ربًا وبالاسلام دينًا وبسيدنا محمد صلى الله عليه وسلم نبيًا ورسولاً.',
'> اللهم إني أصبحت منك في نعمة وعافية وستر، فأتمم نعمتك علي وعافيتك وسترك في الدنيا والآخرة.',
'> اللهم إنا نستعينك ونستغفرك ونؤمن بك ونتوكل عليك ونثني عليك الخير كله، نشكرك ولا نكفرك، ونخلع ونترك من يكفر بك.',
'> اللهم إني أسألك عيشة نقية، وميتة سويّة، ومرداً غير مخزٍ، ولا فاضح.',
'> اللهم اني أسالك العفو والعافية في الدنيا والآخرة',
'> اللهم أحسن عاقبتنا في الأمور كلها ، وأجرنا من خزي الدنيا وعذاب الآخرة',
'> اللهم اغفرلي ولوالدي وللمسلمين والمسلمات الاحياء منهم و الاموات انك سميع قريب مجيب الدعوات',
'> يارب قرّ عيني بكل دعوه فاض بها قلبي وأفرحني بقدر ما أحسنت الظن بك .',
'> يا حي يا قيوم برحمتكَ استغيث، أصلح لي شأنى كُلَه، ولا تَكِلنى إلى نفسي طرفة عين.',
'> اللهم انك عفوُ تحب العفو فاعفُ عنّا',
'> أستغفر الله وأتـوب إليه.',
'> رب اغفر لي وتب علي إنك أنت التواب الرحيم',
'> اللهم اني اسألك الهدى والتقى والعفاف والغنى اللهم اني أسألك الفوز بالجنة والنجاة من النار',
'> اللهم اهدنا لماتحب وترضى وخذ بنواصينا إلى البر والتقوى..',
'> اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور.',
'> اللهُم حقّق لي ما أُريد فأنت على كل شي قدير.',
'> اللهم أجرنى من النار.',
'> اللهـم أعنى على ذكرك وشكرك وحسن عبادتك.',
'> لا إله إلا الله وحـده لا شريك له، له الملك وله الحمد، يحيـي ويمـيت وهو على كل شيء قدير.',
'> استغفر الله العظيم واتوب اليه.',
'> اللهم إني اسألك يا الله، الأحد الصمد، الذي لم يلِدْ ولم يولد، ولم يكن له كُفُوًا أحد، أن تغفر ليَ ذنوبي إنك أنت الغفور الرحيم.',
'> ربِّ، اجعلْني لك شكَّارًا، لك ذكَّارًا، لك رهَّابًا، لكَ مطواعًا، لك مخبِتًا، إليك أوَّاهًا منيبًا.',
'> لا يُكَلِّف اللهُ نَفْساً إلاَّ وسعَها',
'> مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ',
'> اللهم لا تجعلنا بحاجة لغيرك وأنتَ أقربُ إلينا من حبل الوريد',
'> أول ما يحاسب به العبد يوم القيامة الصلاة، فإن صلحت صلح سائر عمله، وإن فسدت فسد سائر عمله',
'> اللهم إني أسالك قبل الموت توبة، وعند الموت شهادة، وبعد الموت جنة ونعيمًا.',
'> اللهم إني أصبحت منك في نعمة وعافية وستر، فأتمم نعمتك علي وعافيتك وسترك في الدنيا والآخرة.',
'> اللهم بشرني بما أحب وأصرف عني ما أكره ووفقني لما تحب وترضى',
'> اللهم لا تجعلنا من اللذين ضل سعيهم في الحياة الدنيا وهم يحسبون انهم يحسنون صنعا',
'> اللهم إني أعوذ بك من الكفر والفقر وأعوذ بك من عذاب القبر لا إله ألا أنت .',
'> اللهم اغفر لي ذنبي، ووسع لي في داري، وبارك لي فيما رزقتني .',
'> اللهم يسر لي كل عسير وقرب البعيد واكفني بحلالك عن حرامك و اغنني بفضلك عن من سواك',
'> اللھم افتحّ لي أبۆاب رِحمتك وارزقني من حيثُ لا أحتسب رزقاً حلالاً يرضيني يا رب العالمين',
'> اللهم اغفر لنا ذنوبنا واسرافنا في امرنا وارزقنا جنتك واجرنا من عذابك',
'> بسم الله الذي لا يضرُ مع اسمهِ شئٌ في الارضِ ولا في السماء وهو السميع العليم.',
'> حسبي الله لا إله إلا هو عليه توكلتُ وهو ربُّ العرش العظيم.',
'> اللهم قني عذابك يوم تبعث عبادك.',
'> سبحان الله وبحمده ١٠٠ مرة/ تغفر خطاياك ولو كانت مثل زبد البحر ..',
'> اللهم إني أسألك تياسير تعقُبها تباشير فرج',
'> اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك، وَمَلَائِكَتَكَ، وَجَمـيعَ خَلْـقِك، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك، وَأَنَّ ُ مُحَمّـدًا عَبْـدُكَ وَرَسـولُـك.',
'> اللهم لاحسد ولاغل وأرزقنا نقاء القلب'
]

setInterval(() => {
  let azkarchannel = shuruhatik.channels.cache.filter(c => c.name.toLowerCase() === azkarbyshuruhatik.channelname).random()
 var fact = Math.floor(Math.random() * facts.length);
 	var embed = new discord.MessageEmbed()
	.setColor(azkarbyshuruhatik.colorembed || "BLUE")
  .setThumbnail(`${azkarbyshuruhatik.imageembed || "https://img.apksum.com/2f/com.muslim.azkar/3.1/icon.png"}`)
  .setTitle("**اذكار **:mosque:")///All Copy Right Reserved For: Shuruhatik  in YT
  .setTimestamp()/////All Copy Right Reserved For: Shuruhatik  in YT
  .setDescription(facts[fact])
  .setFooter("لا تنسي ذكر الله")

	azkarchannel.send(embed)
}, azkarbyshuruhatik.time);

///All Copy Right Reserved For: Shuruhatik  in YT

shuruhatik.login(process.env.token);