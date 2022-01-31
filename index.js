const trafficLights = function (color){
  if (color === 'red'){
    return Stop;
  } else if (color === 'yellow'){
    return Wait;
  } else if (color === 'green'){
    return Go;
  } else {
    return NoUnderstant; 
  }
}


const Calculator = function (num1, num2, operator){
  switch (operator) {
    case "+":
    return num1 + num2;
    case "-":
    return num1 - num2;
    case "/":
    return num1 / num2;
    case "*":
    return num1 * num2;
  }
}

const resultMonth = function month(num){
  switch(num){
    case "12":
    case "1":
    case "2":{
      console.log("winter");
      break;
    }
    case "3":
    case "4":
    case "5": {
      console.log("spring");
      break;
    }
    case "6":
      case "7":
      case "8": {
        console.log("summer");
        break;
      }
      case "9":
        case "10":
        case "11": {
          console.log("autumn");
          break;
        }
        default: {
          console.log("No such month");
        }
  }
}