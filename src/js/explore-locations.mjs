
import { getLocationData, generateLocationsPage } from "./utils.mjs";

const urlParams = new URLSearchParams(window.location.search);
const locationCategory = urlParams.get('area');
const data = await getLocationData(locationCategory);
generateLocationsPage(data);




