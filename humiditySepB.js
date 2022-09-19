const humiditySepB = {
    V: 12,
    I: "Amps",
    R: "Res",
    oV: "oV",
    oI: "oI",
    oR: "oR",
    //can both A and B be on at the same time?
    //validation checks?
    //error warnings?

};

//On switch function for electrical voltage.
var x = document.getElementById("hSepBOn"); //id on the button
x.addEventListener("click", onSwB);         //function called

function onSwB() { //on action
    x = humiditySepB.V;
    humiditySepB.oV = x;
    document.getElementById("hSepBV").innerText = humiditySepB.oV;  //id of the location
};

//Off switch function for electrical voltage.
var x = document.getElementById("hSepBOff");
x.addEventListener("click", offSwB);

function offSwB(hSepBOff) { //off action
    hSepBOff = 0;
    document.getElementById("hSepBV").innerText = "0";
};
