let range = document.querySelector(".gridrange");
let color = document.querySelector(".color");
let background = document.querySelector(".background");
let container = document.querySelector(".container");
let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser");
let light = document.querySelector(".light");
let shadow = document.querySelector(".shadow");
let mouseDown = false;
let method = "draw";

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

for(i = 0; i<(range.value)*(range.value);i++){
    const content = document.createElement('div');
    content.classList.add('gridelement');
    container.appendChild(content);
    content.style.backgroundColor=`${background.value}`;
    content.addEventListener('mousedown', change_color);
    content.addEventListener('mouseover', change_color);
    content.addEventListener("dragstart", prevent_dragging);
}

function change_grid(){
    document.querySelector(".gridtext").textContent = range.value+"x"+range.value;


    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${range.value}, 1fr)`;

    for(i = 0; i<(range.value)*(range.value);i++){
        const content = document.createElement('div');
        content.classList.add('gridelement');
        container.appendChild(content);
        content.style.backgroundColor= `${background.value}`;
        content.addEventListener('mouseover', change_color);
        content.addEventListener('mousedown', change_color);
        content.addEventListener("dragstart", prevent_dragging);
    }
}

function setMethod(value){
    method = value;
}

pencil.addEventListener("click", () => {
    if(method !== "draw"){
        pencil.classList.toggle("untoggled");
        pencil.classList.toggle("toggled");
        if (method === "erase"){
            eraser.classList.toggle("toggled");
            eraser.classList.toggle("untoggled");
        }
        if (method === "light"){
            light.classList.toggle("toggled");
            light.classList.toggle("untoggled");
        }
        if (method === "shadow"){
            shadow.classList.toggle("toggled");
            shadow.classList.toggle("untoggled");
        }
        setMethod("draw");
    } 
})

eraser.addEventListener("click", () => {
    if(method !== "erase"){
        eraser.classList.toggle("untoggled");
        eraser.classList.toggle("toggled");
        if (method === "draw"){
            pencil.classList.toggle("toggled");
            pencil.classList.toggle("untoggled");
        }
        if (method === "light"){
            light.classList.toggle("toggled");
            light.classList.toggle("untoggled");
        }
        if (method === "shadow"){
            shadow.classList.toggle("toggled");
            shadow.classList.toggle("untoggled");
        }
        setMethod("erase");
    }
})

light.addEventListener("click", () => {
    if(method !== "light"){
        light.classList.toggle("untoggled");
        light.classList.toggle("toggled");
        if (method === "draw"){
            pencil.classList.toggle("toggled");
            pencil.classList.toggle("untoggled");
        }
        if (method === "erase"){
            eraser.classList.toggle("toggled");
            eraser.classList.toggle("untoggled");
        }
        if (method === "shadow"){
            shadow.classList.toggle("toggled");
            shadow.classList.toggle("untoggled");
        }
        setMethod("light");
    }
})

shadow.addEventListener("click", () => {
    if(method !== "shadow"){
        shadow.classList.toggle("untoggled");
        shadow.classList.toggle("toggled");
        if (method === "draw"){
            pencil.classList.toggle("toggled");
            pencil.classList.toggle("untoggled");
        }
        if (method === "light"){
            light.classList.toggle("toggled");
            light.classList.toggle("untoggled");
        }
        if (method === "erase"){
            eraser.classList.toggle("toggled");
            eraser.classList.toggle("untoggled");
        }
        setMethod("shadow");
    }
})

function change_color(e){
    if((mouseDown || e.type === "mousedown") && method === "draw") {
         e.target.style.backgroundColor= `${color.value}`;
    }
    else if((mouseDown || e.type === "mousedown") && method === "erase") {
        e.target.style.backgroundColor= `${background.value}`;
    }
    else if((mouseDown || e.type === "mousedown") && method === "light") {
        let previousColor = e.target.style.backgroundColor;
        let colorArray = previousColor.match(/\d+/g);

        let red = parseInt(colorArray[0]) + 10;
        if (red > 255) red = 255;

        let green = parseInt(colorArray[1]) + 10;
        if (green > 255) green = 255;

        let blue = parseInt(colorArray[2]) + 10;
        if (blue > 255) blue = 255;
        
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
    else if((mouseDown || e.type === "mousedown") && method === "shadow") {
        let previousColor = e.target.style.backgroundColor;
        let colorArray = previousColor.match(/\d+/g);

        let red = parseInt(colorArray[0]) - 10;
        if (red < 0) red = 0;

        let green = parseInt(colorArray[1]) - 10;
        if (green < 0) green = 0;

        let blue = parseInt(colorArray[2]) - 10;
        if (blue < 0) blue = 0;
        
        e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}

function clear_grid(){
    
    container.innerHTML = '';
    
    for(i = 0; i<(range.value)*(range.value);i++){
        const content = document.createElement('div');
        content.classList.add('gridelement');
        container.appendChild(content);
        content.style.backgroundColor= `${background.value}`;
        content.addEventListener('mouseover', change_color);
        content.addEventListener('mousedown', change_color);
        content.addEventListener("dragstart", prevent_dragging);
    }
}


function prevent_dragging(e) {
    e.preventDefault();
}


