
let crt1PowerOn = C2S1function

/* 
This is the target crt1PowerOn 
On change true value for clicked and false value for non-clicked.
Display clicked value in console log.
Trigger LED for clicked value.

*/

function C2S1ON() {
    var C2S1 = "";
    if (crt1PowerOn == true) {
        C2S1 = "ON";
    } else {
        C2S1 = "ST BY";
    }
    document.getElementById("C2A2").innerHTML = C2S1;
    console.log(C2S1);
    return C2S1;
}

$(document).ready(function () {
    $("#about").on("click", function () {
        $("#target").load("../FlightDeckConsole/index.html.html");
    });
    $("#help").on("click", function () {
        $("#target").load("../pages/theHelpPage.html");
    });
    $("#contact").on("click", function () {
        $("#target").load("../pages/theContactPage.html");
    });
});