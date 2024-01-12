// Initialize Variables below
 let date = "Monday 2019-03-18";
 let launchTime = "10:05:34 AM";
 let astronautCount = 7;
 let astronautStautus = "ready";
 let averageAstronautMassKg = 80.7;
 let crewMassKg = astronautCount*averageAstronautMassKg;
 let fuelMassKg = 760000;
 let shuttleMassKg = 74842.31;
 let totalMassKg = crewMassKg+fuelMassKg+shuttleMassKg;
 let maximumMassLimit = 850000;
 let fuelTempCelsius = -225
 let minimumFuelTemp = -300;
 let maximumFuelTemp = -150;
 let fuelLevel = "100%";
 let weatherStatus = "clear";
 let preparedForLiftOff = true;
 let commandOveride=true;
 // add logic below to verify total number of astronauts for shuttle launch does not exceed 7
console.log("Date: "+ date);
console.log("Time: "+ launchTime);

 if(astronautCount <= 7){
    console.log("Astronaut count: " + astronautCount);
    }else{
        console.log("Launch scrubbed!");
}
// add logic below to verify all astronauts are ready
if(astronautStautus==="ready"){
    }else{ 
        console.log("Launch scrubbed!");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg<maximumMassLimit){
    console.log("Crew mass: "+crewMassKg+"kg");
    console.log("Shuttle mass: "+ shuttleMassKg+"kg");
    console.log("Total mass: "+totalMassKg+"kg");
}else{
    (totalMassKg>maximumMassLimit);
    console.log("Launch scrubbed!");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius>-300 || fuelTempCelsius< -150){
    console.log("Fuel temperature: "+fuelTempCelsius+"˚c")
}else{
    console.log("Launch scrubbed!")
}

// add logic below to verify the fuel level is at 100%
if(fuelLevel="100%"){
    console.log("Fuel mass: "+fuelMassKg+"kg");
}else{
     console.log("Launch scrubbed!");
}

// add logic below to verify the weather status is clear
if(weatherStatus==="clear"){
    console.log("Weather status: "+ weatherStatus);
}else{
    (weatherStatus==!"clear");
    console.log("Launch scrubbed!");
}


// Verify shuttle launch can proceed based on above conditions

if (astronautCount<=7 && astronautStautus==="ready" && totalMassKg<maximumMassLimit
    && (fuelTempCelsius>-300||fuelTempCelsius<-150) &&fuelLevel==="100%"
    &&weatherStatus==="clear"){
   console.log("Cleared to launch!")
}else{
   console.log(" Launch scrubbed.")
}