let marks = 65

function calculateGrade(score){
    switch(true){
        case(score>=90) :
            return "A"
            
        case(score>=70) :
            return "B"
            
        case(score>=50) :
            return "C"
            
        case(score>=35) :
            return "D"
        
        case(score>=0) :
            return "FAIL"
            
        default :
            console.log("Error.Recheck the input score.")
             
    }
}

console.log("The student score is "+marks+". Grade is: "+calculateGrade(marks))