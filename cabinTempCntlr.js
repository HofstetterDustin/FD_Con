const cabinTempCntlr = {
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
var x = document.getElementById("CTCOn");  //id on the button
x.addEventListener("click", onCTC);        //called function

function onCTC() {                         //the function
    x = cabinTempCntlr.V;
    cabinTempCntlr.oV = x;
    document.getElementById("CTCV").innerText = cabinTempCntlr.oV;  //the location
};

//Norm switch function for electrical voltage.
var x = document.getElementById("CTCNorm");
x.addEventListener("click", normCTC);

function normCTC() { //on action
    x = cabinTempCntlr.V;
    cabinTempCntlr.oV = x;
    document.getElementById("CTCV").innerText = cabinTempCntlr.V;
};

//Off switch function for electrical voltage.
var x = document.getElementById("CTCOff");
x.addEventListener("click", offCTC);

function offCTC(CTCOff) { //off action
    CTCOff = 0;
    document.getElementById("CTCV").innerText = "0";
};
