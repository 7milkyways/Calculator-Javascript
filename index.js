alert("Welcome click OK to start calculator")

let fValue = Number(prompt("Enter FIrst Value:"));
let sValue = Number(prompt("Enter Second Value:"));
let op = prompt("Enter Operation ('+', '-', '*', '/'):");


function calculator(a,b,operation){
    let result = 0;
    if(operation == "+"){
       result = a + b;
    }
    else if( operation == "-"){
       result = a - b;
    }
    else if( operation == "*"){
        result = a * b;
     }
    else if( operation == "/"){
       result = a / b;
    }
    else{
        result = "operation is invalid: please check your operation"
    }

    return alert(result);
}


calculator(fValue, sValue, op);
