// Pattern Prototype
// Pattern Constructor

// паттерна Constructor предназначен для создания объекта.
// с помощью паттерна Prototype можем создать копию объекта на основании уже существующей структуры
// в случае необходимости изменить каждый экземпляр точечно под определенные нужды не изменяя базовой структуры

// создаем класс прототипа (в конструкторе свойства, метод который клонирует объект)

class Smartphone {

    constructor(model, color, memory, price) {
        this.model = model;
        this.color = color;
        this.memory = memory;
        this.price = price;
    }

    make() {
        return new Smartphone(this.model, this.color, this.memory, this.price);
    }

}

// создаем класс Smartphone с конкретными характеристиками будущего телефона (стандартные)

const prototypePhone = new Smartphone('X', 'black', '64GB', 9000);

// создаем прототипы смартфона

const phone1 = prototypePhone.make();
const phone2 = prototypePhone.make();
const phone3 = prototypePhone.make();

// если необходимо изменить некоторые критерии, то меняем клон под эти критерии

phone2.color = 'red';
phone3.memory = '128GB';

console.log(phone1);
console.log(phone2);
console.log(phone3);



