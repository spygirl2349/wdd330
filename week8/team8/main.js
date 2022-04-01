const baseURL = "https://swapi.dev/api/people";
const container = document.querySelector(".container");

let next = null;
let prev = null;

document.querySelector(".next").addEventListener("click", () => {
  if (next) {
    getRequest(next);
  }
});

document.querySelector(".prev").addEventListener("click", () => {
  if (prev) {
    getRequest(prev);
  }
});

async function getRequest(url) {
  const response = await fetch(url);
  const wholeResponse = await response.json();

  container.innerHTML = "";

  wholeResponse.results.forEach((element) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const h2 = document.createElement("h2");
    h2.textContent = element.name;

    const par = document.createElement("p");
    par.textContent = element.skin_color;

    const par2 = document.createElement("p");
    par2.textContent = element.height;

    card.addEventListener("click", () => {
      for (const item in element) {
        const div = document.createElement("div");
        div.textContent = element[item];

        card.appendChild(div);
      }
    });

    card.appendChild(h2);
    card.appendChild(par);
    card.appendChild(par2);

    container.appendChild(card);
  });

  next = wholeResponse.next;
  prev = wholeResponse.previous;
}

getRequest(baseURL);
