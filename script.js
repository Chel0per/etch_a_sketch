let range = document.querySelector(".gridrange");
let color = document.querySelector(".color");
let background = document.querySelector(".background");
let container = document.querySelector(".container");

for(i = 0; i<(range.value)*(range.value);i++){
    const content = document.createElement('div');
    content.classList.add('gridelement');
    container.appendChild(content);
    content.style.backgroundColor=`${background.value}`;
    content.addEventListener('mouseover', change_color);
    content.addEventListener('mousedown', change_color);
    content.addEventListener('click', change_color);
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
        content.addEventListener('click', change_color);
    }
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function change_color(e){
    if(e.type === 'mouseover' && e.type === 'click') {
         e.target.style.backgroundColor= `${color.value}`;
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
        content.addEventListener('click', change_color);
    }
}




