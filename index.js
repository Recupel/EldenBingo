var goals = [
"Rodrick",
"Rennala",
"Rykard",
"Radahn",
"Margit",
"Deathroot",
"Dragon Heart",
"Wretched",
"Arcane > 20",
"Tree Sentinel",
"Dectus Medallion",
"Night Rider",
"Black Beast",
"Dexterity > 20",
"Faith > 20",
"Iron Cleaver",
"Castle Morne",
"Flask +3",
"Any Big Bear",
"Varre",
"Death Bird",
"Grafted Scion",
"Giant Lobster",
"Red Wolf",
"Dragon Ruins Chest"
];

shuffle(goals);

for (let i = 0; i < 25; i++) {
	let text = i.toString();
	//console.log(text);
	document.getElementById(text).innerHTML = goals[i];
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
