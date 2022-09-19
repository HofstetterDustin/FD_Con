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
var x = document.getElementById("IMUFanBOn");  //id on the button
x.addEventListener("click", onIMUFanB);        //called function

function onIMUFanB() {                         //the function
    x = imuFanB.V;
    imuFanB.oV = x;
    document.getElementById("IMUFanBV").innerText = imuFanB.oV;  //the location
};


//Off switch function for electrical voltage.
var x = document.getElementById("IMUFanBOff");
x.addEventListener("click", offIMUFanB);

function offIMUFanB() { //off action
    imuFanBOff = 0;
    document.getElementById("IMUFanBV").innerText = "0";
};
