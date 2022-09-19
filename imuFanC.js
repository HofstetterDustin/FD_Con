const imuFanC = {
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
var x = document.getElementById("IMUFanCOn");  //id on the button
x.addEventListener("click", onIMUFanC);        //called function

function onIMUFanC() {                         //the function
    x = imuFanC.V;
    imuFanC.oV = x;
    document.getElementById("IMUFanCV").innerText = imuFanC.oV;  //the location
};


//Off switch function for electrical voltage.
var x = document.getElementById("IMUFanCOff");
x.addEventListener("click", offIMUFanC);

function offIMUFanC() { //off action
    imuFanCOff = 0;
    document.getElementById("IMUFanCV").innerText = "0";
};
