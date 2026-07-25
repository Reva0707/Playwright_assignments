let number = -3;

function checkNumberType(number){
    if(number>0){
        return "Positive"
    }
    else if (number<0){
        return "Negative"
    }
    else{
       return "Neutral means Zero"
    }
}
    
console.log("The given input "+number+" is "+checkNumberType(number) +" number.")
