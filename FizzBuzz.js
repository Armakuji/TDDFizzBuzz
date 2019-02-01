function FizzBuzz(num){
    strNum = num.toString();
    if((num % 3 == 0 && num % 5 == 0) || (strNum.includes("3") && strNum.includes("5"))){
        return "FizzBuzz"
    }else if(num % 3 == 0 || strNum.includes("3")){
        return "Fizz"
    }else if(num % 5 == 0 || strNum.includes("5")){
        return "Buzz"
    }else{
        return num
    }
}

module.exports = FizzBuzz;