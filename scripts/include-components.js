async function includeHTML(filePath, elementID){
  const response = await fetch(filePath);
  const html = await response.text();
  const element = document.getElementById(elementID);
  element.insertAdjacentHTML("beforeend", html);
}

async function includeSiteComponents(){
  const includeFiles = [
    ["/includes/nav.html", "insert-navbar"],
    ["/includes/footer.html", "insert-footer"],
    ["/includes/header.html", "insert-header"]
  ];
  for (const [filePath, divID] of includeFiles) {
    await includeHTML(filePath, divID);
  }
}

includeSiteComponents();