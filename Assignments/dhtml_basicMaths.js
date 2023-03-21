
function performoperation(){
    var value1 = document.querySelector(".firstValue").value;
    value1=parseInt(value1);
    var value2 = document.querySelector(".secondValue").value;
    value2 = parseInt(value2);
    var operationType = document.querySelector("#operation").value;
    var result = calculation(operationType, value1, value2);
    document.querySelector("#result").innerHTML=result;
}

function calculation(operationType, value1, value2){
    var result;
    switch(operationType){
        case "add":
            result = value1+value2;
            return result;
            break;
        case "sub":
            result = value1-value2;
            return result;
            break;
        case "mul":
            result = value1*value2;
            return result;
            break;
        case "div":
            result = value1/value2;
            return result;
            break;
    }
}