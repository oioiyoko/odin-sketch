//function creates boxes according to number specified
function createBoxes(boxNumber) {


    const screen = document.querySelector('.screen');
    let boxSize = 700/boxNumber;

    if (screen.firstChild) {
        while (screen.firstChild) {
            screen.removeChild(screen.firstChild);
            console.log("this run?");
        }
    }

    for (let i = 0; i < (boxNumber*boxNumber); i++) {
        let smallBox = document.createElement('div');
        smallBox.classList.add('smallBox');
        smallBox.style.width = boxSize + "px";
        smallBox.style.height = boxSize + "px";
        screen.appendChild(smallBox);  
    }
}


let gridSize = document.querySelector("#gridSize");
let input = document.querySelector("#input");
gridSize.textContent = input.value + " x " + input.value;
input.addEventListener("input", (event) => {
    gridSize.textContent = (event.target.value + " x " + event.target.value);
    createBoxes(event.target.value);
    console.log("the new boxnumber is: " + event.target.value);


    const screen = document.querySelector('.screen');
})
createBoxes(input.value);


//random color generator
function getColor() {
    let r = Math.floor(Math.random() * (255-232) + 232);
    let g = Math.floor(Math.random() * (213-48) + 48);
    let b = Math.floor(Math.random() * (249-201) + 201);
    return 'rgb(' + r + ', ' + g + ", " + b + ')'
}
//when mouse is clicked, toggles pen
let clickedBox = document.querySelector('.screen');
clickedBox.addEventListener('mouseover', (event)=> {
    let target = event.target;
    target.style.backgroundColor = getColor();
})