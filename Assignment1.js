let number = 37;

function isOddOrEven(number){
    if(number % 2===0){
       return "EVEN"
    }
    else{
       return "ODD"
    }
}
    
console.log("The given input number is "+number+ ". It is "+isOddOrEven(number)+" number.")
