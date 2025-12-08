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

// *****************************************
// Build Explore Webpage View
export function buildLocationsDisplay(data) {
  document.querySelector('');

}
