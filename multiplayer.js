let players =
	JSON.parse(localStorage.getItem("players"))
||[
	{ name:"Rohit",score:50 },
	{ name:"Anu",score:40},
	{name:"Thara",score:20}
];

function addPlayer(name,score){
	players.push({name,score});
	players.sort((a,b) => b.score -a.score);
	localStorage.setItem("players",
		JSON.stringify(players));
}

functionshowLeaderboard() {
	console.log("Leaderboard");
	players.forEach((player,index) => {
		console.log('${index + 1}. $
			{player.name}.${player.score}');
	});
}

showLeaderboard();
