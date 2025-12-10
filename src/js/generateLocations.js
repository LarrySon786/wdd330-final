import { buildPictureOfDay, fetchNasaApi } from "./utils.mjs"

// NASA API Picture of the day


const data = await fetchNasaApi() 
buildPictureOfDay(data);

