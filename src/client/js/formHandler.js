/**
 * Post user input url to the server
 * @param {string} userInputUrl url that user enters.
 * @param {string} routeUrl endpoint of route in the server
 * @return {string} newlyFormedUserUrl correctly reformedly user input url 
 */
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
        const newlyFormedUserUrl = await response.json();
        console.log(newlyFormedUserUrl);
        return newlyFormedUserUrl
    } catch(error){
        console.log("For some reason, could not finish user url POSt request");
    }
}

/**
 * Get analysis information from server and update user interface in the view.
 * @param {object} event submit event
 */
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let valiationResult = Client.urlValidator(formText);
    //post user input form text to server
    
    if(valiationResult == true){
        postUserUrlHelper(formText,'/update-url')
        
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8080/nlp-api')
        .then(res => res.json())
        .then(function(res) {
            //check if the post in the given url can be analized. 
            if(res.model == undefined){
                alert("Please, provide url with article or news.")
            }
            else{
                //Add analysis results and their designs in view
                document.getElementById('model').innerHTML = "Model: " + res.model
                document.getElementById('confidence').innerHTML = "Confidence: " + res.confidence
                document.getElementById('irony').innerHTML = "Irony: " + res.irony
                document.getElementById('agreement').innerHTML = "Agreement: " + res.agreement
                document.getElementById('subjectivity').innerHTML = "Subjective: " + res.subjectivity
                const resultItems = document.querySelectorAll('.result')

                for(let i = 0 ; i < resultItems.length ; i++){
                    resultItems[i].style.border = "1px solid skyblue"            
                    resultItems[i].style.padding = "20px"
                    resultItems[i].style.fontSize = "20px"
                }
            }
        })
    }
    else{
        alert("Please, provide valid URL of news or article.")
    }
}

export { handleSubmit }
export { postUserUrlHelper }
