// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "green";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus= spaceSuitsOn && shuttleCabinReady;
let compterStatusCode = 400;
let shuttleSpeed = 15000;

let commandOverride = true || false
let fuelLevel = 21000
let engineTemperature = 1200


// BEFORE running the code, predict what will be printed to the console by the following statements:
 // I think it will print engines are off//
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}


if (crewStatus){
   console.log ("Crew is ready for lift off!");
}else{(!crewStatus)
   console.log("Crew is not ready!");
}


if (compterStatusCode === 200){
   console.log("Please stand by. Computer is rebooting.");
}else if (compterStatusCode === 400){
   console.log("Successs! Computer online.");
}else{ 
   console.log("Alert: Computer offline!");
}


if (shuttleSpeed > 17500){
   console.log("Alert: Escape velocity reached!");
}else if (shuttleSpeed < 8000){
   console.log("Alert: Cannot maintain orbit!");
}else{
   console.log("Stable speed.");
}

if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
   console.log("ENGINE FAILURE IMMINENT!");
 } else if (fuelLevel <= 5000 || engineTemperature > 2500){
   console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500){
   console.log("Full tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500){
   console.log("Fuel level above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <= 2500){
   console.log("Fuel level above 25%. Engines good.");
 } else {
   console.log("Fuel and engine status pending...");
}






if (fuelLevel > 20000 && engineIndicatorLight ==! "red blinking" ||
commandOverride === true){
   console.log("Cleared to launch!")
}else{
   console.log(" Launch scrubbed.")
}
