// #1
document.getElementById("container");

// #2
document.querySelector("#container");

// #3
document.getElementsByClassName("second");

// #4
document.querySelector("ol .third");

// #5
let div = document.querySelector("#container");

div.innerText = "Hello";

// #6
let footer = document.querySelector(".footer");
footer.classList.add("main");

// #7
let footer = document.querySelector(".footer");
footer.classList.remove("main");

// #8 - #0
let newli = document.createElement("li");

newli.innerText = "four";

let list = document.querySelector("ul");
list.appendChild(newLi);

// #11
let loopList = document.querySelectorAll("ol li");

for (let i = 0; i< loopList.length; i++){
    loopList[i].computedStyleMap.backgroundColor = "green";

}

// #2
let footer = document.querySelector(".footer");
footer.remove();


