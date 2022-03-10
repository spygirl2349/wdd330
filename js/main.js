const links = [
    {
        label: "Week 1 Notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "week2/notes2.html"
    },
    {
        label: "Week 3 Notes",
        url: "week3/notes3.html"
    },
    {
        label: "Week 4 Notes",
        url: "week4/notes4.html"
    },
    {
        label: "Week 5 Notes",
        url: "week5/notes5.html"
    },
    {
        label: "Week 6 ToDo App",
        url: "week6/"
    },
    {
        label: "Week 7 Notes",
        url: "week7/notes7.html"
    },
    {
        label: "Week 8 Notes",
        url: "week8/notes8.html"
    },
    {
        label: "Week 9 Notes",
        url: "week9/notes9.html"
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

//Chapters List
const chapters = [
    {
        label: "Doing Stuff with Web Things",
        url: "week1/index.html"
    },
    {
        label: "Javascript: Novice to Ninja Chapter 1",
        url: "week2/notesch1.html"
    },
    {
        label: "Chapter 2: Programming Basics",
        url: "week2/notes2.html#ch2"
    },
    {
        label: "Chapter 3: Arrays, Logic and Loops",
        url: "week2/notes2.html#ch3"
    },
    {
        label: "Chapter 4: Functions",
        url: "week2/notes2.html#ch4"
    },
    {
        label: "Chapter 5: Objects",
        url: "week3/notes3.html#ch5"
    },
    {
        label: "Chapter 6: Document Object Model",
        url: "week3/notes3.html#ch6"
    },
    {
        label: "Chapter 7: Events",
        url: "week3/notes3.html#ch7"
    },
    {
        label: "Chapter 8: Forms",
        url: "week4/notes4.html#ch8"
    },
    {
        label: "Chapter 9: The Window Object",
        url: "week9/notes9.html#ch9"
    },
    {
        label: "Chapter 10: Testing and Debugging",
        url: "week5/notes5.html"
    },
    {
        label: "Chapter 11: Further Functions",
        url: "week7/notes7.html#ch11"
    },
    {
        label: "Chapter 12: OOP",
        url: "week4/notes4.html#ch12"
    },
    {
        label: "Chapter 13: AJAX",
        url: "week7/notes7.html#ch13"
    },
    {
        label: "Chapter 14: HTML5 APIs",
        url: "week9/notes9.html#ch14"
    },
    {
        label: "Chapter 15: Modern Javascript",
        url: "week4/notes4.html#ch15"
    },
    {
        label: "HTML5 and CSS3 for the Real World, Ch8: Transforms and Tranisitions",
        url: "week8/notes8.html#hch8"
    },
    {
        label: "HTML5 and CSS3 for the Real World, Ch12: Canvas, SVG, Drag and Drop",
        url: "week8/notes8.html#hch12"
    }
]

let ul = document.getElementById("chapter-links");



for (let i=0; i < chapters.length; i++) {
    console.log(chapters)
    let li = document.createElement("li");
    let a = document.createElement("a");

    a.textContent = chapters[i].label;
    a.setAttribute ("href", chapters[i].url)

    li.append(a);
    ul.append(li);
   
};