const imuFanA = {
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
var x = document.getElementById("IMUFanAOn");  //id on the button
x.addEventListener("click", onIMUFanA);        //called function

function onIMUFanA() {                         //the function
    x = imuFanA.V;
    imuFanA.oV = x;
    document.getElementById("imuFanAV").innerText = imuFanA.oV;  //the location
};


//Off switch function for electrical voltage.
var x = document.getElementById("IMUFanAOff");
x.addEventListener("click", offIMUFanA);

function offIMUFanA() { //off action
    imuFanA.oV = 0;
    document.getElementById("imuFanAV").innerText = "0";
};
