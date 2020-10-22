//Sets important constants and variables

const title = document.querySelector('h1');
const container = document.querySelector(".container");
const rows = document.getElementsByClassName("gridRow");
const button = document.createElement('button');
const btnContainer = document.createElement('div');

btnContainer.className = 'btn-div';

// Set text content
button.textContent = 'Clear';

// Assign a class to the new button
button.className = 'btn';

// Append the button 
btnContainer.appendChild(button);

// Insert button container between h1 and grid container
title.after(btnContainer);


// Call the createGrid() function 16X16
createGrid(16);


function createGrid(num) {
    makeRows(num);
    makeColumns(num);
}

//Creates rows
function makeRows(num) {

    for (let r = 0; r < num; r++) {
        let row = document.createElement("div");
        row.setAttribute("class", "gridRow");
        container.appendChild(row);
    };
};

//Creates columns
function makeColumns(num) {

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};

// Add event listeners
container.addEventListener("mouseover", mouseOver);
button.addEventListener('click', clearGrid);


function mouseOver(e) {
    if (e.target.className === "gridRow" || e.target.className === "cell") {

        e.target.style.background = changeColor();
        e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.7;
    }
}

function changeColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    const color = 'rgb(' + x + ',' + y + ',' + z + ')';

    return color;
}


// Clear the grid, prompt the user for a number and create the new grid

function clearGrid() {
    while (container.firstChild) {
        container.firstChild.remove();
    }

    let message = prompt('Enter the number of squares for each side of the new grid:');

    if (message <= 100) {
        createGrid(parseInt(message));

    } else {

        message = prompt('Enter the number of squares for each side of the new grid:');

        createGrid(parseInt(message));
    }
}



