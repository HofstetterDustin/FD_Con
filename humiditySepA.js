const humiditySepA = {
    V: 12,
    I: "Amps",
    R: "Res",
    oV: "oV",
    oI: "oI",
    oR: "oR",
    //can both A and B be on at the same time?
    //validation checks?
    //error warnings?

    posA: function () { return "Voltage: " + this.V + "Amps: " + this.I + "Resistance: " + this.R },

    // posB: function () { return },
};

//On switch function for electrical voltage.
var x = document.getElementById("hSepAOn");
x.addEventListener("click", onSwA);

function onSwA() { //on action
    x = humiditySepA.V;
    humiditySepA.oV = x;
    document.getElementById("hSepAV").innerText = humiditySepA.oV;
};

//Off switch function for electrical voltage.
var x = document.getElementById("hSepAOff");
x.addEventListener("click", offSwA);

function offSwA(hSepAOff) { //off action
    hSepAOff = 0;
    document.getElementById("hSepAV").innerText = "0";
};





