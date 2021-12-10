// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let div = document.getElementById("missionTaget");
    
// Here is the HTML formatting for our mission target div.
            div.innerHTML = ` 
             <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter}</li>
                    <li>Star:${star}</li>
                    <li>Distance from Earth:${distance}</li>
                    <li>Number of Moons:${moons}</li>
                </ol>
                  <img src="${imageUrl}"> 
                `;

}

function validateInput(testInput) {
    let numInput = Number(testInput);
    if (testInput === ""){
        return "Empty";
    }
    else if(isNaN(numInput)){
        return "Not a Number";
    } 
    else if (isNaN(numInput)=== false){
        return "Is a Number";
    }  
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");

    let pilotName = document.getElementById("pilotName");
    let copilotName = document.getElementById("copilotName");
    //let fuelLevel = document.getElementById("fuelLevel");
    let cargoMass = document.getElementById("cargoMass");

        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
            alert("All fields are required!");

        }else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
            alert("Make sure to enter valid information for each field!");
                
        }else {
            list.style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready to launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready to launch`;  

             if(fuelLevel < 10000 && cargoLevel <= 10000){
                faultyItems.style.visibility = "visible";
                fuelStatus.innerHTML = "Fuel level too low for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for shuttle to take off";
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.style.color = '#C7254E'; 

            }else if(fuelLevel >= 10000 && cargoLevel > 10000){
                faultyItems.style.visibility = "visible";
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass too heavy for shuttle to take off";
                launchStatus.innerHTML = "Shuttle not ready for launch";
                launchStatus.style.color = '#C7254E'; 
                
            }else if(fuelLevel < 10000 && cargoLevel > 10000){
                faultyItems.style.visibility = "visible";
                fuelStatus.innerHTML = "Fuel level too low for the Journey";
                cargoStatus.innerHTML = "Cargo mass too heavy for shuttle to take off";
                launchStatus.innerHTML = "Shuttle is  not ready for launch";
                launchStatus.style.color = '#C7254E'; 

            }else{
                faultyItems.style.visibility = "visible";
                fuelStatus.innerHTML = "Fuel level high enough for launch";
                cargoStatus.innerHTML = "Cargo mass low enough for launch";
                launchStatus.innerHTML = "Shuttle Ready for launch";
                launchStatus.style.color = '#419F6A'; 
        }
     }

}

async function myFetch() {

    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        
        if(response.status >= 400){
            throw new Error ("response is not right!");
        }else{
            return response.json();
        }
    });
    
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * (planets.length));
    return planets[index];
    }   

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;

