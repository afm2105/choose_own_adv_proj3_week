var buffer = function(){
console.log("............................");
};


var forkInRoad = prompt("You're walking down a road and you come across a fork in it. There are 2 ways to go. Choose ('left') or ('right')");
if (forkInRoad == 'left'){
  var firstQuestions = prompt("You go to the left. You come across a mysterious traveler. He asks you if you want to go on an adventure and of course, you say yes. He says you can choose one of 3 questions - questions 1, 2, or 3. Choose 1, 2, or 3 .");
  if (firstQuestions == 1) {
    var question1 = prompt("Who won the first football game referred to as the Super Bowl?");
    if (question1 == "Jets"|| question1 == "jets") {
      alert("That's correct. You can continue on your way. You will arrive at ... Walmart");
    }
    else{
      alert("That's incorrect. You die now.");
    }
  } else if (firstQuestions == 2){
    var question2 = prompt("How many people with the last name of Bush have been President of the United States?");
    if (question2 == "two"|| question2 == 2) {
      alert("That's correct. You can continue on your way. You will arrive at ... Walmart");
    }
    else{
      alert("That's incorrect. You die now.");
    }
  } else if (firstQuestions ==3) {
    var question3 = prompt (" What country in North America is directly north of the united States?");
    if (question3 == "canada"|| question3 == "Canada"){
      alert("That's correct. You can continue on your way. You will arrive at ... Walmart");
    }
    else{
      alert("That's incorrect. You die now.");
    }
    var lastQuestion1 = prompt("The game is over. How many stars would you give it? Please enter 1,2,3,4, or 5.");
    for (var i =0; i<lastQuestion1; i ++) {
      console.log("Thanks for playing!");
    }
  }
}
  else if (forkInRoad == "right") {
    var rightPathPrompt = prompt("You go to the right and  encounter a mysterious stranger in a black robe. He asks if you want to go on an adventure and you say yes, of course. He says choose 1 of 4 questions - questions 1,2,3 or 4. Please choose 1,2,3 or 4.");
      if (rightPathPrompt == 1) {
        var rightPath1 = prompt("Fill in the blank. Steve _____ was a cofounder of Apple Computers.");
          if (rightPath1 == "jobs" || rightPath1 == "Jobs") {
            alert("That's correct. Go northeast for 10 miles and you will find something you might like.");
            alert("You go 10 miles northeast and arrive at a Holiday inn. Enjoy your restful evening.");
          } else {
            alert("That's incorrect. Now you will fall into a coma.");
          }
        }

    else if (rightPathPrompt == 2){
          var rightPath2 = prompt("How many fingers does a human hand usually have?");
            if (rightPath2 == "five" || rightPath2 == 5) {
            alert("That's correct. Go 5 miles east and you will find something very valuable.");
            alert("You go east for 5 miles and find ... a locked treasure chest.");
          }   else {
            alert("That's incorrect. Now you will fall into a coma.");
          }
      }
    else if (rightPathPrompt == 3) {
        var rigthPath3 = prompt("What state is New York City located in?");
          if (rigthPath3 == "new york"|| rigthPath3 == "New York") {
            alert(" That's correct. Go 5 miles north, then 2 miles east. You will find somehting amazing.");
            alert(" You go 5 miles north and then 2 miles east. You find... a time machine.");
          }
          else {
            alert("That's incorrect. Now you will fall into a coma.");
          }
      } else if  (rightPathPrompt == 4){
      var rightPath4 = prompt("What sport is Lebron James best known for playing?");
        if (rightPath4 == "basketball") {
          alert("That's correct. Go 7 miles south, then 2 miles west. You will find something interesting.");
          alert("You go 7 miles south and then 2 miles west. You find ... a portal to another dimesnion.");
        }
        else {
          alert("That's incorrect. Now you will fall into a coma.");
        }

    var lastQuestion2 = prompt("The game is over. How many stars would you give it? Please enter 1,2,3,4, or 5.");
    for (var i =0; i<lastQuestion2; i ++) {
      console.log("Thanks for playing!");
    }
  }
  }
