function urlValidator(userInputUrl) {
    // console.log("::: Running checkForName :::", inputText);
    // let names = [
    //     "Picard",
    //     "Janeway",
    //     "Kirk",
    //     "Archer",
    //     "Georgiou"
    // ]

    // if(names.includes(inputText)) {
    //     alert("Welcome, Captain!")
    // }
    var result = userInputUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(result == null)
        return false;
    else
        return true;
}

// function urlValidater(userInputUrl) {
//     var result = userInputUrl.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
//     if(result == null)
//         return false;
//     else
//         return true;
// }

// export { checkForName, urlValidater }
export { urlValidator }
