import { fetchExchangeApi, buildCurrency } from "./utils.mjs";

// CALL EXCHANGE RATE API TO ALLOW USER TO SEE PRICES IN DIFFERENT CURRENCY
let currencyChoice = document.querySelector('#currency-selector');
let capsule1 = document.querySelector('#capsule1');
let capsule2 = document.querySelector('#capsule2');
let capsule3 = document.querySelector('#capsule3');


const data = await fetchExchangeApi();
let defaultPrice = buildCurrency('USD', data);
// console.log(defaultPrice)

currencyChoice.addEventListener('change', function () {
    let choice = event.target.value;
    let priceList = buildCurrency(choice, data);
    console.log(priceList);

    capsule1.innerHTML = `Price: $${priceList[0].toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} ${choice}`;
    capsule2.innerHTML = `Price: $${priceList[1].toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} ${choice}`;
    capsule3.innerHTML = `Price: $${priceList[2].toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })} ${choice}`;
})




