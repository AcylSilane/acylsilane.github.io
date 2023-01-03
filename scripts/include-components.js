async function includeHTML(filePath, elementID) {
  const response = await fetch(filePath);
  const html = await response.text();
  const element = document.getElementById(elementID);
  element.insertAdjacentHTML("beforeend", html);
  return element;
}

// Nav goes into header
// Header goes before the body
// Footer goes after the body
async function includeSiteComponents() {
  const body = document.body;
  const [header_html, footer_html, nav_html] = await Promise.all([
    await fetch("/includes/header.html"),
    await fetch("/includes/footer.html"),
    await fetch("/includes/nav.html"),
  ]);
  body.insertAdjacentHTML("beforebegin", await header_html.text());

  const header = document.getElementsByTagName("header")[0];
  header.insertAdjacentHTML("beforeend", await nav_html.text());
  body.insertAdjacentHTML("afterend", await footer_html.text());

  insertLastModifiedDate(document.getElementsByTagName("footer")[0]);
}

async function insertLastModifiedDate(element) {
  const lastModified = new Date(document.lastModified).toLocaleString("en-US", {
    hour12: false,
    timeZone: "America/New_York",
    timeZoneName: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const lastModifiedHTML = `<p class="footerLastModified">Last modified ${lastModified}</p>`;

  element.insertAdjacentHTML("beforeend", lastModifiedHTML);
}
includeSiteComponents();
