let result;

function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return result = "This one is on me!";
  } else if (feet === 400 || feet <= 2000) {
    return result = "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    return result = "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    return result = "No can do.";
  }
};


function ternaryCheckCity(city){
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
};


function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    return result = "Thank you so much."
  } else if (tip === "not as generous") {
    return result = "Thank you."
  } else if ("thanks for everything") {
    return result = "Bye."
  }
};

