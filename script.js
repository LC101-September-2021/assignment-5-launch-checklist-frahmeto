
// Write your JavaScript code here!
window.addEventListener("load", function() {
    
        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch(); //UNCOMMENT LATER WHEN FETCHING PLANETS
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            console.log(listedPlanets);
        }).then(function () {
           // console.log(listedPlanets);
            // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
            let ListedPlanets = pickPlanet(listedPlanets);
            myFetch();
            pickPlanet(planets);
            addDestinationInfo(document, ListedPlanets.name, ListedPlanets.diameter, ListedPlanets.star, ListedPlanets.distance, ListedPlanets.moons, ListedPlanets.imageUrl);
            // myFetch();
            // pickPlanet(planets);
        });

   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";

        let form = document.querySelector("form");
        form.addEventListener("submit", function(event){
            event.preventDefault();

       let pilotInput = document.querySelector("Input[name=pilotName]");
       let pilot = pilotInput.value;
        
       let copilotInput = document.querySelector("Input[name=copilotName]");
       let copilot = copilotInput.value;

       let fuelInput = document.querySelector("Input[name=fuelLevel]");
       let fuelLevel = (fuelInput.value);

       let cargoInput = document.querySelector("Input[name=cargoMass]");
       let cargoLevel = (cargoInput.value);

       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    
   });  

 });
  