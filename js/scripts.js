// constants for query selector
var pageBg = document.querySelector("html");
var myStudentId = document.querySelector("p");
var userInput = document.querySelector("input");
var custColor = document.querySelector("button:nth-of-type(1)");
var randColor = document.querySelector("button:nth-of-type(2)");
var imageSelect = document.querySelector("select");

var images = ["url('img/img1.jpg')", "url('img/img2.jpg')", "url('img/img3.jpg')", "url('img/img4.jpg')", "url('img/img5.jpg')"]
addList();

// function to change bg color from user input and add student id
function changeCustomColor() {
    myStudentId.textContent = "Arshelnour Boudala - 1270455";
    
    if(userInput.value < 0 || userInput.value > 100){
        pageBg.style.backgroundColor = "red";
        console.log("Color changed to red");
    }
    if(userInput.value > 0 && userInput.value < 20){
        pageBg.style.backgroundColor = "green";
        console.log("Color changed to green");
    }
    if(userInput.value > 20 && userInput.value < 40){
        pageBg.style.backgroundColor = "blue";
        console.log("Color changed to blue");
    }
    if(userInput.value > 40 && userInput.value < 60){
        pageBg.style.backgroundColor = "orange";
        console.log("Color changed to orange");
    }
    if(userInput.value > 60 && userInput.value < 80){
        pageBg.style.backgroundColor = "purple";
        console.log("Color changed to purple");
    }
    if(userInput.value > 80 && userInput.value < 100){
        pageBg.style.backgroundColor = "yellow";
        console.log("Color changed to yellow");
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    userInput.value = Math.floor(Math.random() * 100) + 1;
    if(userInput.value < 0 || userInput.value > 100){
        pageBg.style.backgroundColor = "red";
        console.log("Color changed to red");
    }
    if(userInput.value > 0 && userInput.value < 20){
        pageBg.style.backgroundColor = "green";
        console.log("Color changed to green");
    }
    if(userInput.value > 20 && userInput.value < 40){
        pageBg.style.backgroundColor = "blue";
        console.log("Color changed to blue");
    }
    if(userInput.value > 40 && userInput.value < 60){
        pageBg.style.backgroundColor = "orange";
        console.log("Color changed to orange");
    }
    if(userInput.value > 60 && userInput.value < 80){
        pageBg.style.backgroundColor = "purple";
        console.log("Color changed to purple");
    }
    if(userInput.value > 80 && userInput.value < 100){
        pageBg.style.backgroundColor = "yellow";
        console.log("Color changed to yellow");
    }
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    for (var i = 0; i < 5; i++) {
        var pic = document.createElement("option");
        pic.textContent = "Image " + (i+1);
        pic.value = images[i];
        //console.log(pic.value);
        imageSelect.appendChild(pic);
    }
}

// function to change image
function changeImage() {
    console.log(imageSelect.value)
    pageBg.style.backgroundImage = imageSelect.value;
}

// event listeners for on click event of buttons and select
custColor.addEventListener("click", changeCustomColor);
randColor.addEventListener("click", changeRandomColor);
// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);