/** Object that represents a client */
class Client {
    constructor(name, email, companyName) {
        this.name = name;
        this.email = email;
        this.companyName = companyName;
    }
}

/** Checks if a client's input information is valid. Talk to Del about what we want to be considered valid */
function validClient() {
    var name = document.getElementById("clientName").value;
    var email = document.getElementById("clientEmail").value;
    var company = document.getElementById("clientCompany").value;

    return name != '' && email != '' && company != '';
}

/** Stores the client's information */
function clientInfo() {
    // initialize a new client object
    var client = new Client();
    if (validClient()) {
        client.name = document.getElementById("clientName").value;;
        client.email = document.getElementById("clientEmail").value;
        client.companyName = document.getElementById("clientCompany").value;
    } else {
        alert("Please fill out all of the boxes!")
    }
    // Append string for Client Information
    var clientInfo = "The client's Name: " + client.name + "\n";
    clientInfo += "The client's Email: " + client.email + "\n";
    clientInfo += "The client's Company: " + client.companyName + "\n";
    // return the appended String
    return clientInfo;
}

var type = '';

function isWebApp() {
    type = '';
    type += "This is a " + document.getElementById("isWebApp").value + "\n";
}

function isWebSite() {
    type = '';
    type += "This is a " + document.getElementById("isWebSite").value + "\n";
}

function siteType() {
    return type;
}

function submitEmail() {
    var sendUs = "\n";
    sendUs += clientInfo();
    sendUs += siteType();
    document.getElementById("formToSend").name = "ERL Info for: \n";
    document.getElementById("formToSend").value += sendUs;
    console.log("submit email");
    console.log(sendUs);

}
function myFunc() {
    var text = "";
    text += document.getElementById("clientName").value;
    text += "\n";
    text += document.getElementById("clientEmail").value;
    text += document.getElementById("clientComments").value;
    text += "\n";
    text += "\n";
    text += "erl is dead"
    document.getElementById("formToSend").name = text;
    document.getElementById("formToSend").value = "it worked";
}