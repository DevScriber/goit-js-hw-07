const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const titles = item.querySelector("h2");
  const numberOfElements = item.querySelectorAll("li");
  console.log(`Category: ${titles.textContent}`);
  console.log(`Elements: ${numberOfElements.length}`);
});
