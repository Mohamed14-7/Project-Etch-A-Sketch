let container = document.querySelector(".container");
let boxes = document.createElement("div");
boxes.classList.add("boxes");

// Event just for grid_10
let grid_10 = document.getElementsByClassName("grid_10")[0];

// Create 10*10 divs and give is a class

grid_10.addEventListener("click", () => {
  Active(grid_10);

  createBoxes(100);
  boxes.classList.add("grid_10");
  boxes.classList.remove("grid_30", "grid_20");
  mouseover();
});

// Event just for grid_20
let grid_20 = document.getElementsByClassName("grid_20")[0];

// Create 20*20 divs and give is a class
grid_20.addEventListener("click", () => {
  Active(grid_20);

  createBoxes(400);
  boxes.classList.add("grid_20");
  boxes.classList.remove("grid_10", "grid_30");
  mouseover();
});

// Event just for grid_30
let grid_30 = document.getElementsByClassName("grid_30")[0];

// Create 30*30 divs and give is a class
grid_30.addEventListener("click", () => {
  Active(grid_30);
  createBoxes(900);
  boxes.classList.add("grid_30");
  boxes.classList.remove("grid_10", "grid_20");
  mouseover();
});

// Function for removing the class box and create a class with it's num
function createBoxes(num) {
  let l = document.getElementsByClassName("box").length;
  for (let i = 0; i < l; i++) {
    document.querySelector(".box").remove();
  }
  for (let index = 0; index < num; index++) {
    let element = document.createElement("div");

    element.classList.add("box");

    boxes.appendChild(element);

    container.appendChild(boxes);
  }
}

// Function that add an active class to boxes
function Active(element) {
  let actives = document.querySelectorAll(".circle");
  for (let i = 0; i < actives.length; i++) {
    actives[i].classList.remove("active");
  }
  element.classList.add("active");
}

// Function that give a background-color to div which it's class is .box  
function mouseover() {
  let divBoxes = document.querySelectorAll("div.box");

  for (let i = 0; i < divBoxes.length; i++) {
    divBoxes[i].addEventListener("mouseover", () => {
      const color = document.querySelector(".btnColor").value;
      divBoxes[i].style.cssText = `background-color:${color}`;
    });
  }
}

// Get clear button 
let clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  let divClear = document.querySelectorAll(".box");
  for (let i = 0; i < divClear.length; i++)
    divClear[i].style.cssText = "background-color: #FFFFFF";
});

document.body.appendChild(container);
