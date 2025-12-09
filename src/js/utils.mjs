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

export async function getLocationData() {
    const urlParams = new URLSearchParams(window.location.search);
    const locationCategory = urlParams.get('area');
    const jsonUrl = `../json/${locationCategory}.json`;
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