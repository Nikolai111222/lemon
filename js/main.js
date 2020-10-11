class Animal {

    health = 100;

    constructor(name) {
        this.name = name;
    }



    getDamage() {
        this.health--;
        console.log(`${this.name} health is ${this.health}`);
    }

}

class Cat extends Animal {

    constructor(name) {
        super(name);
    }

    doMeow() {
        alert(`Кот ${this.name} делает meow`);
    }
}




let cat = new Cat('meow');
cat.doMeow();
cat.getDamage();
console.log(cat.name);
console.log(cat.health);








/*
let bgi = document.getElementById('background-image');
console.log(bgi);



let bgiBySelector = document.querySelector('#background-image');
console.log(bgiBySelector);



let allContainers = document.querySelectorAll('.container');
console.log(allContainers);

allContainers.forEach((container, index)=> {
    console.log(index);
    console.log(container);
});



let allContainersByClass = document.getElementsByClassName('container');
console.log(allContainersByClass);

[].forEach.call(allContainersByClass, (container, index)=> {
    console.log(index);
    console.log(container);

    container.style.backgroundColor = 'red';

    container.addEventListener('click', (e) => {
        alert(`${index} контейнер нажат`);
    });
});


document.addEventListener('keydown', (e) => {
    console.log(e);
});

*/









/*

let newDiv = document.createElement('div');
newDiv.classList.add('test');
document.body.appendChild(newDiv);
*/
