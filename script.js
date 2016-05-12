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
      }
        // }
      // }




  // else if (rightPath1 == 2) {
  //           var rightPath2 = parseint(prompt("What is half of 10.8?"));
  //             if (rightPath2 == 5) {
  //               alert("That's correct. Go west for 4 miles and you will find something mysterious.");
  //               alert("You go west for 4 mils and you find ... a locked treasure chest.");
  //             }
  //         }
  //     }
  // }


// }
// }
