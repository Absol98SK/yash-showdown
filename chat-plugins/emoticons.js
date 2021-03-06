var color = require('../config/color');

exports.parseEmoticons = parseEmoticons;

var emotes = {
	':absol:': 'http://cbc.pokecommunity.com/config/emoticons/absol.png',
	':aids:': 'http://cbc.pokecommunity.com/config/emoticons/aids.png',
	':arceus:': 'http://cbc.pokecommunity.com/config/emoticons/arceus.png',
	':armycat:': 'http://cbc.pokecommunity.com/config/emoticons/armycat.png',
	':azelf:': 'http://cbc.pokecommunity.com/config/emoticons/azelf.png',
	':bidoof:': 'http://cbc.pokecommunity.com/config/emoticons/bidoof.png',
	':blastoise:': 'http://cbc.pokecommunity.com/config/emoticons/blastoise.png',
	':blissey:': 'http://cbc.pokecommunity.com/config/emoticons/blissey.png',
	':bowie:': 'http://cbc.pokecommunity.com/config/emoticons/bowie.png',
	':castform:': 'http://cbc.pokecommunity.com/config/emoticons/castform.png',
	':catflip:': 'http://cbc.pokecommunity.com/config/emoticons/catflip.png',
	':chansey:': 'http://cbc.pokecommunity.com/config/emoticons/chansey.png',
	':charizard:': 'http://cbc.pokecommunity.com/config/emoticons/charizard.png',
	':clown:': 'http://cbc.pokecommunity.com/config/emoticons/clown.png',
	':cookie:': 'http://cbc.pokecommunity.com/config/emoticons/cookie.png',
	':cthulhu:': 'http://cbc.pokecommunity.com/config/emoticons/cthulhu.png',
	':dedenne:': 'http://cbc.pokecommunity.com/config/emoticons/dedenne.png',
	':diddy:': 'http://cbc.pokecommunity.com/config/emoticons/diddy.png',
	':dk:': 'http://cbc.pokecommunity.com/config/emoticons/dk.png',
	':eevee:': 'http://cbc.pokecommunity.com/config/emoticons/eevee.png',
	':electrode:': 'http://cbc.pokecommunity.com/config/emoticons/electrode.png',
	':emboar:': 'http://cbc.pokecommunity.com/config/emoticons/emboar.png',
	':espurr:': 'http://cbc.pokecommunity.com/config/emoticons/espurr.png',
	':fatbowie:': 'http://cbc.pokecommunity.com/config/emoticons/bowie.png',
	':feebas:': 'http://cbc.pokecommunity.com/config/emoticons/feebas.png',
	':flirt:': 'http://cbc.pokecommunity.com/config/emoticons/flirt.png',
	':gav:': 'http://cbc.pokecommunity.com/config/emoticons/gav.png',
	':gawk:': 'http://cbc.pokecommunity.com/config/emoticons/gawk.png',
	':gloom:': 'http://cbc.pokecommunity.com/config/emoticons/gloom.png',
	':goodra:': 'http://cbc.pokecommunity.com/config/emoticons/goodra.png',
	':goomy:': 'http://cbc.pokecommunity.com/config/emoticons/goomy.png',
	':growlithe:': 'http://cbc.pokecommunity.com/config/emoticons/growlithe.png',
	':hamster:': 'http://cbc.pokecommunity.com/config/emoticons/hamster.png',
	':helix:': 'http://cbc.pokecommunity.com/config/emoticons/helix.png',
	':houndoom:': 'http://cbc.pokecommunity.com/config/emoticons/houndoom.png',
	':infernape:': 'http://cbc.pokecommunity.com/config/emoticons/infernape.png',
	':jack:': 'http://cbc.pokecommunity.com/config/emoticons/jack.png',
	':jigglypuff:': 'http://cbc.pokecommunity.com/config/emoticons/jigglypuff.png',
	':jynx:': 'http://cbc.pokecommunity.com/config/emoticons/jynx.png',
	':kappa:': 'http://cbc.pokecommunity.com/config/emoticons/kappa.png',
	':keepo:': 'http://cbc.pokecommunity.com/config/emoticons/keepo.png',
	':kermit:': 'http://cbc.pokecommunity.com/config/emoticons/kermit.png',
	':kitty:': 'http://cbc.pokecommunity.com/config/emoticons/kitty.png',
	':kreygasm:': 'http://cbc.pokecommunity.com/config/emoticons/kreygasm.png',
	':lapras:': 'http://cbc.pokecommunity.com/config/emoticons/lapras.png',
	':latias:': 'http://cbc.pokecommunity.com/config/emoticons/latias.png',
	':latios:': 'http://cbc.pokecommunity.com/config/emoticons/latios.png',
	':lickilicky:': 'http://cbc.pokecommunity.com/config/emoticons/lickilicky.png',
	':lickitung:': 'http://cbc.pokecommunity.com/config/emoticons/lickitung.png',
	':lileep:': 'http://cbc.pokecommunity.com/config/emoticons/lileep.png',
	':ludicolo:': 'http://cbc.pokecommunity.com/config/emoticons/ludicolo.png',
	':luvdisc:': 'http://cbc.pokecommunity.com/config/emoticons/luvdisc.png',
	':magikarp:': 'http://cbc.pokecommunity.com/config/emoticons/magikarp.png',
	':meganium:': 'http://cbc.pokecommunity.com/config/emoticons/meganium.png',
	':meowstic:': 'http://cbc.pokecommunity.com/config/emoticons/meowstic.png',
	':meowsticf:': 'http://cbc.pokecommunity.com/config/emoticons/meowsticf.png',
	':metagross:': 'http://cbc.pokecommunity.com/config/emoticons/metagross.png',
	':moo:': 'http://cbc.pokecommunity.com/config/emoticons/moo.gif',
	':mudkip:': 'http://cbc.pokecommunity.com/config/emoticons/mudkip.png',
	':nw:': 'http://cbc.pokecommunity.com/config/emoticons/nw.gif',
	':oddish:': 'http://cbc.pokecommunity.com/config/emoticons/oddish.png',
	':pachirisu:': 'http://cbc.pokecommunity.com/config/emoticons/pachirisu.png',
	':pancham:': 'http://cbc.pokecommunity.com/config/emoticons/pancham.png',
	':pangoro:': 'http://cbc.pokecommunity.com/config/emoticons/pangoro.png',
	':pear:': 'http://cbc.pokecommunity.com/config/emoticons/pear.png',
	':pikachu:': 'http://cbc.pokecommunity.com/config/emoticons/pikachu.png',
	':pjsalt:': 'http://cbc.pokecommunity.com/config/emoticons/pjsalt.png',
	':pogchamp:': 'http://cbc.pokecommunity.com/config/emoticons/pogchamp.png',
	':potato:': 'http://cbc.pokecommunity.com/config/emoticons/potato.png',
	':psyduck:': 'http://cbc.pokecommunity.com/config/emoticons/psyduck.png',
	':pyoshi:': 'http://cbc.pokecommunity.com/config/emoticons/pyoshi.png',
	':raichu:': 'http://cbc.pokecommunity.com/config/emoticons/raichu.png',
	':scizor:': 'http://cbc.pokecommunity.com/config/emoticons/scizor.png',
	':seduce:': 'http://cbc.pokecommunity.com/config/emoticons/seduce.png',
	':senpai:': 'http://cbc.pokecommunity.com/config/emoticons/senpai.png',
	':sims:': 'http://cbc.pokecommunity.com/config/emoticons/sims.png',
	':skarmory:': 'http://cbc.pokecommunity.com/config/emoticons/skarmory.png',
	':slowpoke:': 'http://cbc.pokecommunity.com/config/emoticons/slowpoke.png',
	':snivy:': 'http://cbc.pokecommunity.com/config/emoticons/snivy.png',
	':snorlax:': 'http://cbc.pokecommunity.com/config/emoticons/snorlax.png',
	':spheal:': 'http://cbc.pokecommunity.com/config/emoticons/spheal.png',
	':sri:': 'http://cbc.pokecommunity.com/config/emoticons/sri.png',
	':strut:': 'http://cbc.pokecommunity.com/config/emoticons/strut.png',
	':suicune:': 'http://cbc.pokecommunity.com/config/emoticons/suicune.png',
	':superman:': 'http://cbc.pokecommunity.com/config/emoticons/superman.png',
	':sweep:': 'http://cbc.pokecommunity.com/config/emoticons/sweep.gif',
	':taco:': 'http://cbc.pokecommunity.com/config/emoticons/taco.png',
	':victini:': 'http://cbc.pokecommunity.com/config/emoticons/victini.gif',
	':vulpix:': 'http://cbc.pokecommunity.com/config/emoticons/vulpix.png',
	':wave:': 'http://cbc.pokecommunity.com/config/emoticons/wave.gif',
	':weezing:': 'http://cbc.pokecommunity.com/config/emoticons/weezing.png',
	':why:': 'http://cbc.pokecommunity.com/config/emoticons/why.png',
	':wigglytuff:': 'http://cbc.pokecommunity.com/config/emoticons/wigglytuff.png',
	':wobbuffet:': 'http://cbc.pokecommunity.com/config/emoticons/wobbuffet.png',
	':wooper:': 'http://cbc.pokecommunity.com/config/emoticons/wooper.png',
	':wynaut:': 'http://cbc.pokecommunity.com/config/emoticons/wynaut.png',
	':y:': 'http://cbc.pokecommunity.com/config/emoticons/y.png',
	':yoshi:': 'http://cbc.pokecommunity.com/config/emoticons/yoshi.png'
};

var emotesKeys = Object.keys(emotes);
var patterns = [];
var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

for (var i in emotes) {
	if (emotes.hasOwnProperty(i)) {
		patterns.push('(' + i.replace(metachars, '\\$&') + ')');
	}
}
var patternRegex = new RegExp(patterns.join('|'), 'g');

/**
 * Parse emoticons in message.
 *
 * @param {String} message
 * @param {Object} room
 * @param {Object} user
 * @param {Boolean} pm - returns a string if it is in private messages
 * @returns {Boolean|String}
 */
function parseEmoticons(message, room, user, pm) {
	if (typeof message !== 'string' || (!pm && room.disableEmoticons)) return false;

	var match = false;
	var len = emotesKeys.length;


	while (len--) {
		if (message && message.indexOf(emotesKeys[len]) >= 0) {
			match = true;
			break;
		}
	}

	if (!match) return false;

	// escape HTML
	message = Tools.escapeHTML(message);

	// add emotes
	message = message.replace(patternRegex, function (match) {
		var emote = emotes[match];
		if (match === ':fatbowie:' || match === ':gav:' || match === ':kermit:' || match === ':nw:' || match === ':superman:' || match === ':sweep:' || match === ':yoshi:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="30" height="30"/>' :
			match;
		if (match === ':bowie:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="22" height="30"/>' :
			match;
		if (match === ':catflip:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="44" height="32"/>' :
			match;
		if (match === ':jack:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="23" height="30"/>' :
			match;
		if (match === ':strut:') return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '" width="23" height="33"/>' :
			match;
		return typeof emote != 'undefined' ?
			'<img src="' + emote + '" title="' + match + '"/>' :
			match;
	});

	// __italics__
	message = message.replace(/\_\_([^< ](?:[^<]*?[^< ])?)\_\_(?![^<]*?<\/a)/g, '<i>$1</i>');

	// **bold**
	message = message.replace(/\*\*([^< ](?:[^<]*?[^< ])?)\*\*/g, '<b>$1</b>');

	var group = user.getIdentity().charAt(0);
	if (room.auth) group = room.auth[user.userid] || group;

	var style = "background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer";

	message = "<div class='chat'>" + "<small>" + group + "</small>" + "<button name='parseCommand' value='/user " + user.name + "' style='" + style + "'>" + "<b><font color='" + color(user.userid) + "'>" + user.name + ":</font></b>" + "</button><em class='mine'>" + message + "</em></div>";
	if (pm) return message;

	room.addRaw(message);

	return true;
}

/**
 * Create a two column table listing emoticons.
 *
 * @return {String} emotes table
 */
function create_table() {
	var emotes_name = Object.keys(emotes);
	var emotes_list = [];
	var emotes_group_list = [];
	var len = emotes_name.length;
	var i;

	for (i = 0; i < len; i++) {
		emotes_list.push("<td>" +
			"<img src='" + emotes[emotes_name[i]] + "'' title='" + emotes_name[i] + "' height='30' width='30' />" +
			emotes_name[i] + "</td>");
	}

	var emotes_list_right = emotes_list.splice(len / 2, len / 2);

	for (i = 0; i < len / 2; i++) {
		var emote1 = emotes_list[i],
			emote2 = emotes_list_right[i];
		if (emote2) {
			emotes_group_list.push("<tr>" + emote1 + emote2 + "</tr>");
		} else {
			emotes_group_list.push("<tr>" + emote1 + "</tr>");
		}
	}

	return "<div class='infobox'><center><b>List of Emoticons</b></center>" + "<div class='infobox-limited'><table border='1' cellspacing='0' cellpadding='5' width='100%'>" + "<tbody>" + emotes_group_list.join("") + "</tbody>" + "</table></div></div>";
}

var emotes_table = create_table();

exports.commands = {
	blockemote: 'blockemoticons',
	blockemotes: 'blockemoticons',
	blockemoticon: 'blockemoticons',
	blockemoticons: function (target, room, user) {
		if (user.blockEmoticons === (target || true)) return this.sendReply("You are already blocking emoticons in private messages! To unblock, use /unblockemoticons");
		user.blockEmoticons = true;
		return this.sendReply("You are now blocking emoticons in private messages.");
	},
	blockemoticonshelp: ["/blockemoticons - Blocks emoticons in private messages. Unblock them with /unblockemoticons."],

	unblockemote: 'unblockemoticons',
	unblockemotes: 'unblockemoticons',
	unblockemoticon: 'unblockemoticons',
	unblockemoticons: function (target, room, user) {
		if (!user.blockEmoticons) return this.sendReply("You are not blocking emoticons in private messages! To block, use /blockemoticons");
		user.blockEmoticons = false;
		return this.sendReply("You are no longer blocking emoticons in private messages.");
	},
	unblockemoticonshelp: ["/unblockemoticons - Unblocks emoticons in private messages. Block them with /blockemoticons."],

	emote: 'emoticons',
	emotes: 'emoticons',
	emoticon: 'emoticons',
	emoticons: function (target, room, user) {
		if (!this.canBroadcast()) return;
		this.sendReply("|raw|" + emotes_table);
	},
	emoticonshelp: ["/emoticons - Get a list of emoticons."],

	toggleemote: 'toggleemoticons',
	toggleemotes: 'toggleemoticons',
	toggleemoticons: function (target, room, user) {
		if (!this.can('warn', null, room)) return false;
		room.disableEmoticons = !room.disableEmoticons;
		this.sendReply("Disallowing emoticons is set to " + room.disableEmoticons + " in this room.");
		if (room.disableEmoticons) {
			this.add("|raw|<div class=\"broadcast-red\"><b>Emoticons are disabled!</b><br />Emoticons will not work.</div>");
		} else {
			this.add("|raw|<div class=\"broadcast-blue\"><b>Emoticons are enabled!</b><br />Emoticons will work now.</div>");
		}
	},
	toggleemoticonshelp: ["/toggleemoticons - Toggle emoticons on or off."]
};
