/**
 * @param {Element} cont
 */

var grideSize;
var square = () => {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("innerDiv");
    // adding hover event
    squareDiv.onmouseover = "divHover(this)";
    squareDiv.onmouseout = "divNormal(this)";

    let divStyle = squareDiv.style;
    divStyle.border = "0.01px solid rgb(0, 9, 255)";
    // divStyle.border = "0";
    divStyle.height = "20px";
    divStyle.width = "20px";

    return squareDiv;
};

function createDiv() {
    const div = document.createElement("div");
    // div.classList.add("container"); // class alternative
    div.id = "container";
    div.style.border = "0";
    div.style.display = "flex";
    div.style.maxWidth = ((20 * grideSize) + 2) + ((grideSize - 1) * 2.5) + "px";
    div.style.maxHeight = ((20 * grideSize) + 2) + ((grideSize - 1) * 2.5) + "px";
    div.style.margin = "auto";
    div.style.flexFlow = "row wrap";
    div.style.gap = "2.5px";

    var count = 1;
    for (let i = 0; i < grideSize; i++) {
        for (let j = 0; j < grideSize; j++) {
            var square1 = square();
            // square1.innerText = count++;
            square1.style.display = "flex";
            square1.style.alignItems = "center";
            square1.style.justifyContent = "center";

            div.appendChild(square1);
        }
    }

    document.body.appendChild(div);
}

var btn = () => {
    const promptBtn = document.createElement("button");
    promptBtn.textContent = "Grid";

    let btnStyle = promptBtn.style;
    btnStyle.marginBottom = "10px";
    btnStyle.marginLeft = "13px";

    promptBtn.addEventListener("click", () => {
        let input = prompt("Enter grid size (1-64)");

        if (input >= 1 && input <= 64) {
            // console.log(document.getElementById("container"));
            if (document.getElementById("container") != null) {
                const element = document.getElementById("container");
                element.remove();
            }
            grideSize = input;
            createDiv();
            // console.log(grideSize);
        }
    });

    return promptBtn;
}

/* function divHover(x) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    x.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    x.style.color = "blue";
    x.style.fontSize = "large";
    x.style.fontWeight = "bolder";
}

function divNormal(x) {
    x.style.fontSize = "5px";
    x.style.color = "rgb(0, 217, 255)";
} */

document.body.appendChild(btn());