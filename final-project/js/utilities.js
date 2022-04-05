function disable() {
    // To get the scroll position of current webpage
    let TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    let LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

    // if scroll happens, set it to the previous value
    window.onscroll = function () {
        window.scrollTo(LeftScroll, TopScroll);
    };
}

function getHero(url) {
    //uses fetch to pull json data of super heroes and displays it to the user
    fetch(url)
        .then(response => response.json())
        .then(heroes => {
            let indexH = Math.floor(heroes.length * Math.random());
            let hero = heroes[indexH];
            document.getElementById("super-hero").textContent = hero;
        })

}

function hideDiv(type) {
    //this hides a div based on the type
    let id = type + '-div'
    let div = document.getElementById(id);

    if (div.style.display !== "none") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}

function makeHiddendiv(type) {
    //this function makes a div that has a class that makes it hideen
    let nav = document.querySelector("nav");
    let div = document.createElement("div");
    let form = document.createElement("form");
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let typeList = type.split("");
    let three = `${typeList[0]}${typeList[1]}${typeList[2]}`
    console.log(three)

    div.id = `${type}-div`;
    div.classList.add("toggle");
    div.style.display = "none";

    form.setAttribute("action", "index.html");
    form.id = `set-${three}`

    input1.type = "color";
    input1.name = "color";

    input2.type = "submit";
    input2.vaule = "Save";

    form.appendChild(input1);
    form.appendChild(input2);
    div.appendChild(form);

    nav.appendChild(div);
}

function getFormInfo(id) {
    //this function gets information from the forms
    let form = document.getElementById(id);
    form.addEventListener('submit', (event) => {
        // stop form submission
        event.preventDefault();
        mainColor = form.elements['color'].value;

    })
}



export {
    disable,
    getHero,
    hideDiv,
    makeHiddendiv,
    getFormInfo
}