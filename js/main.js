const links = [
    {
        label: "Week 1 Notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "week2/notes2.html"
    }
]

let ol = document.getElementById("content-links");



for (let i=0; i < links.length; i++) {
    console.log(links)
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = links[i].label;
    a.setAttribute ("href", links[i].url)

    li.append(a);
    ol.append(li);
   
};