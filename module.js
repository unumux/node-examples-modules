
var MSG = "";

function setMessage(msg) {
    if(msg.length > 0) {
        MSG = msg;
    } 
}

function myFunction() {
    console.log(MSG);
}

module.exports = {
    myFunction: myFunction,
    setMessage: setMessage
};