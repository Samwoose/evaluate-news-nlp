const postUserUrlHelper = async (userInputUrl, routeUrl)=>{
    const response = await fetch(routeUrl,{
        method:'POST',
        credentials: 'same-origin',
        headers:{
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            userUrl : userInputUrl,
        }),
    });
    try{
        console.log(response.body.userUrl)
        const newlyFormedUserUrl = await response.json();
        return newlyFormedUserUrl
    } catch(error){
        console.log("For some reason, could not finish user url POSt request");
    }
}


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //Client.checkForName(formText)
    //post user input form text to server
    
    postUserUrlHelper(formText,'/update-url')
    
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080/nlp-api')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('model').innerHTML = "Model: " + res.model
        document.getElementById('confidence').innerHTML = "Confidence: " + res.confidence
        document.getElementById('irony').innerHTML = "Irony: " + res.irony
        document.getElementById('agreement').innerHTML = "Agreement: " + res.agreement
        document.getElementById('subjectivity').innerHTML = "Subjective: " + res.subjectivity
        const resultItems = document.querySelectorAll('.result')

        for(let i = 0 ; i < resultItems.length ; i++){
            resultItems[i].style.border = "solid"
        }
        console.log(res)
    })
   
}

export { handleSubmit }
