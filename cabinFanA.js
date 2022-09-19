const cabinFanA = {
    V: 12,
    I: "Amps",
    R: "Res",
    oV: "oV",
    oI: "oI",
    oR: "oR",
    //validation checks?
    //error warnings?
};

//On switch function for electrical voltage.
var x = document.getElementById("CFanAOn");  //id on the button
x.addEventListener("click", onCFan);        //called function

function onCFan() {                         //the function
    x = cabinFanA.V;
    cabinFanA.oV = x;
    document.getElementById("CFanAV").innerText = cabinFanA.oV;  //the location
};


//Off switch function for electrical voltage.
var x = document.getElementById("CFanAOff");
x.addEventListener("click", offCFan);

function offCFan(CFanAOff) { //off action
    CFanAOff = 0;
    document.getElementById("CFanAV").innerText = "0";
};
