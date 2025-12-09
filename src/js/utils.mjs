// **********************
// DISPLAY HEADER AND FOOTER

export async function loadHeaderAndFooter() {
  const headerLink = "/public/partials/header.html";
    const footerLink = "/public/partials/footer.html";
    const headerTemplate = await loadTemplate(headerLink);
    const footerTemplate = await loadTemplate(footerLink);
    const headerOnHtml = document.querySelector("#header");
    const footerOnHtml = document.querySelector("#footer");
    renderTemplate(headerTemplate, headerOnHtml);
    renderTemplate(footerTemplate, footerOnHtml);

}

async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

function renderTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }

}

export async function getJsonData(filename) {
  try {
    const response = await fetch(`../json/${filename}`);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// *****************************************
// Build Explore Webpage View
export function buildLocationsDisplay() {
  let display = document.querySelector('.explore-container');
}

// export function buildDetailedLocationsDisplay() {
//   const filename = URLSearchParams.get(location);
//   let data = await getJsonData(filename);
// }




// **************************
// GET LOCATION DATA
// Will be used in a variety of locations to get local JSON file data

export async function getLocationData(category) {
    const jsonUrl = `../json/${category}.json`;
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
            throw new Error();
        }
        const data = await response.json();
      console.log(data);
      return data;

    } catch (error) {
        console.log(error);
    }
}


export function generateLocationsPage(data) {
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


// GENERATE LOCATION OPTIONS FOR APPLICATION FORM
export async function generateLocationOptions(options, data) {
    data.forEach(data => {
        let newOption = document.createElement('option');
        newOption.setAttribute('value', `${data.name}`);
        newOption.innerHTML = data.name;

        options.appendChild(newOption)
    })
}

// GENERATE PRICE FOR APPLICATION FORM
export async function generateAndDisplayPrice(element, value) {
  if (value === 'photo-capsule') {
    element.innerHTML = 'Your Expected Cost is: $2,000'
  }
  if (value === 'mini-capsule') {
  element.innerHTML = 'Your Expected Cost is: $10,000'
  }
  if (value === 'grand-deluxe-capsule') {
  element.innerHTML = 'Your Expected Cost is: $600,000'
  }
}



