
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

    return result;
}


console.log(calculator(1,2,));
