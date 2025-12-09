















// /*
//     Selecting or accessing elements
//         1. getElementById()
//         2. getElementsByClassName()
//         3. getElementsByTagName()
//         4. querySelector()
//         5. querySelectorAll()

// */ 

// // getElementById()
// const bigHeading = document.getElementById("big-heading");
// // bigHeading.style.color = "blue";

// console.log((bigHeading));

// // getElementsByClassName()
// const boxes = document.getElementsByClassName("box");

// console.log(boxes);

// // boxes.style.color = "red";

// for (let box of boxes){
//     box.style.color = "white";
//     box.style.backgroundColor = "black";
//     box.style.backgroundColor = box.className.split(" ")[1];    
// }

// let fullname = "John Doe";
// const firstname = fullname.split(" ")[0]
// console.log(firstname);

// // querySelector()
// const container = document.querySelectorAll("div");

// console.log(container);

// /* 
//     Modifying content and attributes
//         1. innerHTML
//         2. innerText
//         3. textContent
//         4. src
//         5. href
//         6. setAttribute()
// */

// // console.log(bigHeading.innerHTML);

// // bigHeading.innerHTML = "<h1>My favourite color is <span style=\"color: blue;\">blue</span>.</h1>";

// bigHeading.innerText = "<h1>My favourite color is <span style=\"color: blue;\">blue</span>.</h1>";

// console.log(bigHeading.innerText);
// console.log(bigHeading.textContent);

// const image = document.getElementById("dynamic-image");
// image.src = "./pexels-zetong-li-880728-13811359.jpg";

// // setAttribute()
// image.setAttribute("alt", "An Image");
// image.setAttribute("width", "500px");


// /*
//     Modifying styles and classes
//         1. style
//         2. classList
// */ 

// bigHeading.style.border = "2px solid black";
// bigHeading.style.textDecoration = "5px solid underline green";

// const lorem = document.getElementById("lorem");
// lorem.classList.add("lorem");

// setInterval(() => {
//     lorem.classList.toggle("lorem");
// }, 5000)

// /*
//     Creating and removing elements
//         1. createElement()
//         2. appendChild()
//         3. removeChild()
// */

// const paragraph = document.createElement("p");
// paragraph.textContent = "This is a dynamically created paragraph.";

// console.log(paragraph);

// document.body.appendChild(paragraph);

// setTimeout(() => {
//     document.body.removeChild(paragraph);
// }, 5000);
