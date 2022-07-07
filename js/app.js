const result = document.getElementById('result');
let flagPow = false;
let resultPow = 0 ;
function addToCal(inputValue) {
  result.value += inputValue;
  if(flagPow == true){
   let numbers = result.value.split("^");
   resultPow += Math.pow(numbers[0],numbers[1]);
  }
}

function final(){
  if(flagPow){
    console.log(resultPow);
    result.value = resultPow;
    flagPow = false;
  }else if(result.value){
    result.value = eval(result.value);
  }
  else{
    result.value = " "
  } 
}

function deleteCal(){
    result.value = "";
}

function handleMathOprator(mathName){
  if(mathName=="pow"){
    flagPow = true;
    result.value += "^";
  }else{
    result.value = Math[mathName](result.value);
  } 
}



