/**
 * Adds the header (w/ navbar) and footer (w/ current dates) to the website
 */
async function includeSiteComponents() {
  const body = document.body;
  const [header_html, footer_html, nav_html] = await Promise.all([
    await fetch("/includes/header.html"),
    await fetch("/includes/footer.html"),
    await fetch("/includes/nav.html"),
  ]);

  body.insertAdjacentHTML("afterbegin", await header_html.text());
  body.insertAdjacentHTML("afterbegin", await nav_html.text());
  body.insertAdjacentHTML("beforeend", await footer_html.text());

  addFooterDates(document.getElementsByTagName("footer")[0]);
}

/**
 * Updates the dates in the footer. Current year for copyright, and last modified.
 * @param {HTMLElement} element The HTML element containing the footer.
 */
async function addFooterDates(element) {
  const currentYear = new Date().getFullYear();
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

  const copyright = `<p class="copyrightDate">© 2020 - ${currentYear} James Dean</p>`;
  const lastModifiedHTML = `<p class="footerLastModified">Last modified ${lastModified}</p>`;

  element.insertAdjacentHTML("beforeend", copyright + lastModifiedHTML);
}
includeSiteComponents();
