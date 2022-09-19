const imuFanB = {
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
var x = document.getElementById("CFanBOn");  //id on the button
x.addEventListener("click", onCFanB);        //called function

function onCFanB() {                         //the function
    x = cabinTempCntlr.V;
    cabinTempCntlr.oV = x;
    document.getElementById("CFanBV").innerText = cabinTempCntlr.oV;  //the location
};


//Off switch function for electrical voltage.
var x = document.getElementById("CFanBOff");
x.addEventListener("click", offCFanB);

function offCFanB(CFanBOff) { //off action
    CFanBOff = 0;
    document.getElementById("CFanBV").innerText = "0";
};
