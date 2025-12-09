
import { getLocationData } from "./utils.mjs";


const data = await getLocationData();
generateLocationsPage(data);


function generateLocationsPage(data) {
    let parentContainer = document.querySelector('.location-cards-container');
    data.forEach(location => {
        let arrivalTimeInDays = Math.ceil(((location.distance_from_sun_miles / 430000) / 24))
        let locationCard = document.createElement('section');
        let image = document.createElement('img');
        let nameHeader = document.createElement('h3');
        let arrival = document.createElement('p');
        let description = document.createElement('p');

        nameHeader.innerHTML = location.name;
        arrival.innerHTML = `Time for capsule to arrive: ${arrivalTimeInDays} Days.`;
        description.innerHTML = location.description;

        locationCard.appendChild(image);
        locationCard.appendChild(nameHeader);
        locationCard.appendChild(arrival);
        locationCard.appendChild(description);

        locationCard.setAttribute('class', 'locationCardDisplay')
        parentContainer.appendChild(locationCard);
        return;
    })
};


