// **********************
// DISPLAY HEADER AND FOOTER

export async function loadHeaderAndFooter() {
  const headerLink = "../public/partials/header.html";
    const footerLink = "../public/partials/footer.html";
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
export async function generateAndDisplayPrice(element, value, country) {
  
  const data = await fetchExchangeApi();
  let priceList = buildCurrency(country, data);

  if (value === 'photo-capsule') {
    element.innerHTML = `Your Expected Cost is: $${priceList[0].toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} ${country}`
  }
  if (value === 'mini-capsule') {
  element.innerHTML = `Your Expected Cost is: $${priceList[1].toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} ${country}`
  }
  if (value === 'grand-deluxe-capsule') {
  element.innerHTML = `Your Expected Cost is: $${priceList[2].toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} ${country}`
  }
}

// BUILD PICTURE OF DAY ON HOME PAGE

export async function buildPictureOfDay() {
  const data = await fetchNasaApi(); 

  const parentElement = document.querySelector('#astronomy-picture-of-day');
  let picture = document.createElement('img');
  let explain = document.createElement('p');
  let title = document.createElement('h3');
  let intro = document.createElement('p')
    
  picture.setAttribute('src', data.url);
  picture.setAttribute('alt', `Photo of ${data.title}`);
  picture.setAttribute('class', 'api-image');

  intro.innerHTML = 'Welcome to the Daily Image from NASA'
  intro.setAttribute('class', 'standard-container')

  explain.innerHTML = data.explanation;
  title.innerHTML = data.title;

  parentElement.appendChild(intro);
  parentElement.appendChild(title);
  parentElement.appendChild(picture);
  parentElement.appendChild(explain);
}

// Fetch NASA API data (generates picture of the day for nasa's daily astronomy picture)
export async function fetchNasaApi() {
    try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=tbSzsCqBm4Ss1693lTx1giVto8G1tFCvaf9IrJwY`);
        const data = await response.json();
        console.log(data)
        console.log(data.title);
        console.log(data.url);
      return data;
    } catch (error) {
        console.error(error);
    }
}

// ECHANGE RATE API

export async function fetchExchangeApi() {
    try {
        const response = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=c2c170bf8266e87fc0500c77a7b812d2`);
        const data = await response.json();
        console.log(data)
      return data;
    } catch (error) {
        console.error(error);
    }
}

// BUILD CURRENCY OPTIONS ON FORM
export function buildCurrencyOptions(parentElement, data) {
  data[rates].forEach((data) => {  
    let option = document.createElement('option');
    option.innerHTML = data.rates
    
  })
}



// BUILD CURRENCY
export function buildCurrency(currencyType, data) {
  console.log('Currency Type:', currencyType);
  console.log('Available rates:', data.rates);
  console.log('Exchange rate:', data.rates[currencyType])

  let price1 = 2000
  let price2 = 10000
  let price3 = 600000
  const exchangeRate = data.rates[currencyType];
  
  if (currencyType !== 'USD') {
    price1 = 2000 * exchangeRate
    price2 = 10000 * exchangeRate
    price3 = 600000 * exchangeRate
  }
  let priceList = [price1, price2, price3];


  return priceList
}
