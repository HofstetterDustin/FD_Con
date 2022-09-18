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
    TODO://posA need to reflect V,I,R and posB needs to reflect oV,oI,oR.
        posA: function() { return this.V + " volts - " + " " + this.oV },

    posB: function () { return "test of posB " }
};

//On switch function for electrical voltage.
var x = document.getElementById("hSepAOn");
x.addEventListener("click", onSw);

function onSw() { //on action
    x = humiditySepA.V;
    humiditySepA.oV = x;
    document.getElementById("hSepA").innerText = "Voltage: " + humiditySepA.oV;
};

//Off switch function for electrical voltage.
var x = document.getElementById("hSepAOff");
x.addEventListener("click", offSw);

function offSw(hSepAOff) { //off action
    hSepAOff = 0;
    document.getElementById("hSepA").innerText = "Voltage: 0";
};




const humiditySepB = {
    onVolts: 12,
    onLight: "ON",
    //what happens when switched on?
    offVolts: "0",
    offLight: "",
    //can both A and B be on at the same time?
    //validation checks?
    //error warnings?
    posA: function () {
        return this.onVolts + "volts - " + " " + "LED " + this.onLight
    },
    posB: function () {
        return this.offVolts + "volts - " + " " + "LED " + this.offLight
    },
};

