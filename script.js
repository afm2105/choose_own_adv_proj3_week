var buffer = function(){
console.log("............................");
};


var forkInRoad = prompt("You're walking down a road and you come across a fork in it. There are 2 ways to go. Choose ('left') or ('right')");
if (forkInRoad == 'left'){
  var firstQuestions = prompt("You go to the left. You come across a mysterious traveler. He asks you if you want to go on an adventure and of course, you say yes. He says you can choose one of 3 questions, questions 1, 2, or 3. Choose 1, 2, or 3 .");
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
    if (question2 == "two") {
      alert("That's correct. You can continue on your way. You will arrive at ... Walmart");
    }
    else{
      alert("That's incorrect. You die now.");
    }
  }
} else if ( right) {


}



    //     if (firstQuestions == 2) {
    //       var question2 = prompt("How many people with the last name Bush have been President of the United States?");
    //       if (question2 == "two"|| question2 == 2) {
    //         alert("That's correct. You can continue on your way. You will arrive at ... Walmart");
    //     }
    //     else{
    //       alert("That's incorrect. You die now.");
    //     }
    //   }
    // }


//
//
//         if (firstQuestions == 3) {
//           var question3 = prompt("What country in North America is north of the United States?");
//           if (question3 == "canada"|| question3 == "Canada") {
//             alert("That's correct. You can continue on your way. You will arrive at ... Walmart");
//         }
//         else{
//           alert("That's incorrect. You die now.");
//         }
//     }
//   }
// }
// }
