// Import Relevant functions and variables
import { fetchApiData } from "./nasa-api.mjs";
import { buildLocationsDisplay } from "./utils.mjs"
// const apiKey = import.meta.env.NASA_API;
const apiUrlNasaAstronomyPhotos = "https://images-api.nasa.gov";
const NASA_API = 'tbSzsCqBm4Ss1693lTx1giVto8G1tFCvaf9IrJwY';
const NASA_ID = 'fdd50c79-6345-4cbc-a7a4-29b4fd6f7b20';


// Call function to retrieve data from NASA API
const nasaData = fetchApiData(apiUrlNasaAstronomyPhotos, NASA_API);

// Call function to build the page using NASA's APIs
// buildLocationsDisplay(nasaData);


