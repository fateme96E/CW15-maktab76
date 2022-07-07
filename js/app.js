const result = document.getElementById('result');
function addToCal(inputValue) {
  result.value += inputValue;
}

function final(){
    result.value = eval(result.value);
}

function deleteCal(){
    result.value = 0;
}


