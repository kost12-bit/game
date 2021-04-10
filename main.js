let cube = {
    id: 'cube',
    x: 0,
    y: 0,
    width: 56,
    height: 56,
    trnstn: .25,
    step: 56,
    color: 'black'
}

let map = {
    X: 0,
    y: 0,
    width: 504,
    height: 504,
    color: 'red',
    border: '#f1f1f1'
}

renderMap(map);
renderCube(cube);