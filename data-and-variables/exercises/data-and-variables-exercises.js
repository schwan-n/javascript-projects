// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below
let shuttleName = ("Determination");
console.log(typeof shuttleName);
let shuttleSpeedMPH = Number(17500); //speed mph//
console.log (typeof shuttleSpeedMPH);
let distanceToMarsKM = Number (225000000);// mars distance//
console.log (typeof distanceToMarsKM)
let distanceToTheMoonKM = Number (384400); //moon distance//
console.log (typeof distanceToTheMoonKM);
let milesPerKilometer = Number (.621); //miles to kilometer//
console.log (typeof milesPerKilometer);
//writting expression//
let milesToMars = distanceToMarsKM * milesPerKilometer;
console.log(milesToMars)
let hoursToMars = milesToMars / shuttleSpeedMPH;
console.log(hoursToMars);
let daysToMars = hoursToMars/ Number (24);
console.log(daysToMars);
console.log((shuttleName) + " will take " + (daysToMars)+ " days to reach Mars. ");
let milesToMoon = distanceToTheMoonKM * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / Number(24);
console.log(daysToMoon);
console.log((shuttleName) + " will take " + (daysToMoon) + " days to reach the moon.");
