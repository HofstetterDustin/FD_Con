
let crt1PowerOn = C2S1function

/*crt1PowerOn*/

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
