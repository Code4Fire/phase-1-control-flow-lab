function scuberGreetingForFeet(mileage){
  // let result = 0;
  if (mileage <= 400) {
    return 'This one is on me!';
  } else if (mileage > 2000 && mileage < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else 
    return 'No can do.';
  }


// function ternaryCheckCity(NYC){
//   // const ternaryCheckCity = NYC;
//   const ternaryCheckCity =Pittsburgh ? 'Ok, sounds good.': 'No go.';
//   // const vistPitts = 'Pittsburgh' ? "Ok, sounds good." : "No go.";
//   // const vistNYC = 'NYC' ? "Ok, sounds good." : "No go.";

 
function ternaryCheckCity(city){
// if (city === "NYC") {
//   return "Ok, sounds good.";
//   } else {
//   return "No go.";
//   }
// }
  return (city == 'NYC' ? "Ok, sounds good." : "No go.");
}



function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
     return "Thank you so much."
    break;
    case "not as generous":
      return "Thank you."
    break;
    case  "thanks for everything":
    return "Bye."
    break;
  }
}