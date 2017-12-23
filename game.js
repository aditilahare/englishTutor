const getRandomLetter = function() {
  let list = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
  'o','p','q','r','s','t','u','v','w','x','y','z'];
  let index = Math.floor(Math.random()*list.length);
  return list[index];
}

let displayLetter = function(index){
  let word = document.getElementById(index);
  let letter = getRandomLetter();
  word.innerHTML = letter;
  return letter;
}


let moveUp = function(ninja,pos){
  ninja.style.top = pos + "px";
}

let moveForward = function(ninja,pos){
  ninja.style.right = pos + "px";
}

let distance = 300;
let index = 5;
let letter = '';

let controlMovement =function(event){
  if(index>=1){
    let ninja = document.getElementById("ninja");
    if(event.keyCode==38){
      moveUp(ninja,250);
      letter = displayLetter(index);
      index--;
    }
    if(event.key==letter){
      moveForward(ninja,distance)
      letter = displayLetter(index);
      index--;
      distance = distance + 300;
    }
  }
}

let startGame = function(){
  window.onkeydown = controlMovement;
}


window.onload = startGame;
