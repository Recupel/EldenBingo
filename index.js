var goals = [
  "Godrick",
  "Rennala",
  "Rykard",
  "Radahn",
  "Margit",
  "Deathroot",
  "Dragon Heart",
  "Wretched",
  "Arcane >= 20",
  "Tree Sentinel",
  "Dectus Medallion",
  "Night's Cavalry",
  "Black Blade Kindred",
  "Dexterity >= 20",
  "Faith >= 20",
  "Somberless",
  "Castle Morne",
  "Flask +3",
  "Big Bear",
  "Varre",
  "Death Bird",
  "Grafted Scion",
  "Giant Lobster",
  "Red Wolf of Radagon",
  "Dragon Ruins Chest"
];

// https://stackoverflow.com/a/47593316
function mulberry32(a) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

var mul = mulberry32(window.location.search);

// https://stackoverflow.com/a/2450976
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(mul() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ];
  }

  return array;
}

shuffle(goals);

for (var i = 0; i < 25; i++) {
  var text = i.toString();
  document.getElementById(text).innerHTML = goals[i];
}
