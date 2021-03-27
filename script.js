document.onkeydown = checkButton;

let cube = {
    x: 0,
    y: 0,
    width:56,
    height:56,
    transition:.25,
    stop:50
}

function checkButton(event) {
    if (event.keyCode ===37){
        console.log("Arrowleft");
        cube.x -=10;
        renderCube(cube);
    }

    else if (event.keyCode ===39) {
        console.log("ArrowRight");
        cube.x +=10;
        renderCube(cube);
    }

    else if (event.keyCode ===38) {
        console.log("ArrowUp");
        cube.y -=10;
        renderCube(cube);
    }

    else if (event.keyCode ===40) {
        console.log("ArrowDown");
        cube.y +=10;
        renderCube(cube);
    }



};

function renderCube() {
    document.getElementById("cube").style.top = cube.x + 'px';
    document.getElementById("cube").style.left = cube.y + 'px';
    document.getElementById("cube").style.left = cube.width + 'px';
    document.getElementById("cube").style.left = cube.height + 'px';
    document.getElementById("cube").style.left = 'ease' + cube.transition;
}

renderCube(cube.x, cube.y);