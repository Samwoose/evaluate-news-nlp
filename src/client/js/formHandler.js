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
        console.log('point0')
        console.log(response.body.userUrl)
        console.log('point1')
        const newlyFormedUserUrl = await response.json();
        console.log('point2')
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
        document.getElementById('results').innerHTML = res.model
        console.log(res)
    })
   
}

export { handleSubmit }
