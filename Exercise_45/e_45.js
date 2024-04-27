"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...extras) {
    const car = { manufacturer, model };
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Example usage
const car = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
console.log(car);
