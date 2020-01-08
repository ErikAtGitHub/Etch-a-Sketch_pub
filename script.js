/*
Name: Ville Peltonen
Date created: 1/7/2020
Most recent revision: 1/8/2020
*/

let container = document.body.querySelector('#container');
let button = document.body.querySelector('#button');

function createGrid(num) {
    for (i=0; i<num; i++) {
        var div = document.createElement('div');
        div.classList.add('item');
        div.style.backgroundColor = '#808080';
        div.style.border = '1px solid black';
        container.appendChild(div);
    };
};
createGrid(256);

function coloring() {
document.querySelectorAll('.item').forEach(item => {
item.addEventListener("mouseenter", function(e) {
    var red = Math.random() * 255 + 1;
    var green = Math.random() * 255 + 1;
    var blue = Math.random() * 255 + 1;
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

})})
};
coloring();

    button.addEventListener('click', function(e) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        };
        let dimension = prompt("How many squares per side for the new grid?");
        let num = dimension*dimension;
        container.style.gridTemplateColumns = `repeat(${dimension}, auto)`;
        createGrid(num);
        coloring();
    });

