let browserName = "edge"

function launchBrowser(name){
    if (name ==="chrome"){
        console.log("Launching the chrome browser.")
    }else if (name ==="firefox"){
        console.log("Launching the firefox browser.")
    }else if (name ==="edge"){
        console.log("Launching the edge browser.") 
    }else {
        console.log("Launching someother browser.It is not chrome,edge or firefox.") 
    }
}

launchBrowser(browserName)

let testType ="sanity"

function runTests(type){
    switch(type){
        case "smoke" :
            console.log("Running the smoke test.")
            break
        case "sanity" :
            console.log("Running the sanity test.")
            break
        case "regression" :
            console.log("Running the regression test.")
            break
        default:
            console.log("Running the smoke test by default.")
    }   
}

runTests(testType)