import { getLocationData, generateLocationOptions, generateAndDisplayPrice } from "./utils.mjs";


let capsule = document.querySelector('#capsule-options')
let price = document.querySelector('#price');
let options = document.querySelector('#location-select');
let selection = document.querySelector('#location-categories');



selection.addEventListener('change', async function () {
    options.classList.remove('hidden')
    options.replaceChildren();
    const selectedValue = event.target.value;
    const data = await getLocationData(selectedValue);
    generateLocationOptions(options, data)
})

capsule.addEventListener('change', async function () {
    price.replaceChildren();
    let country = document.querySelector('#country').value;
    const selectedValue = event.target.value;
    generateAndDisplayPrice(price, selectedValue, country);
})





