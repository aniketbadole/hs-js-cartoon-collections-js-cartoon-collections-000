function dwarfRollCall(dwarves) {
  var str = []
  for(var i = 0; i < dwarves.length; i++) {
    str.push((i+1) + '. ' + dwarves[i])
  }
  return str.join(' ') + ' '
}

function summonCaptainPlanet(planeteerCalls) {
  var arr = []
  for(var i = 0; i < planeteerCalls.length; i++) {
    arr.push(planeteerCalls[i].toUpperCase() + '!');
  }
  return arr
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
      return true;
    }
    else {
      return false; 
    }
  }
}

function findTheCheese (foods) {
  var cheese = ["camembert", "cheddar", "gouda"];
  for(var i = 0; i < foods.length; i++) {
    for(var j = i; j < cheese.length; j++){
      if(foods[i] === cheese[j]) {
        return cheese[j];
      }
    }
 	}
 	return "no cheese!";
}

//function findTheCheese (foods) {
//  for (var i = 0; i < foods.length; i++) {
//    if (foods[i] ===  'gouda' || foods[i] ===  'cheddar' || foods[i] === 'camembert') {
//      return foods[i];
//    }
//  }
//  return 'no cheese!'
//}

function wordsWithB (words) {
   for(var i = 0; i < words.length; i++) {
     if words[i].startsWith(“b”) {
       
     }
}