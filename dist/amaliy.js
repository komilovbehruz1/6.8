"use strict";
// Inheritancelar
Object.defineProperty(exports, "__esModule", { value: true });
//  1. Hayvonlar classi
class Animal {
    name;
    sound;
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} ovoz chiqarmoqda: ${this.sound}`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name, "Voof-voof");
    }
    makeSound() {
        console.log(`${this.name} hurmoqda: ${this.sound} `);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name, "Myov-myov");
    }
    makeSound() {
        console.log(`${this.name}  miyovlamoqda: ${this.sound} `);
    }
}
function animalsDemo() {
    console.log("Hayvonlar");
    const animals = [new Dog("Rex"), new Cat("Murka")];
    for (const animal of animals) {
        animal.makeSound();
    }
}
//  2. Texnika Klassini Yaratish
class Vehicle {
    name;
    speed;
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    move() {
        console.log(`${this.name} ${this.speed} km/soat tezlikda harakatlanmoqda.`);
    }
}
class Car extends Vehicle {
    move() {
        console.log(`${this.name} yo'l bo'ylab ${this.speed} km/soat tezlikda haydab ketmoqda `);
    }
}
class Bike extends Vehicle {
    move() {
        console.log(`${this.name} pedallarni bosib ${this.speed} km/soat tezlikda ketmoqda `);
    }
}
function vehiclesDemo() {
    console.log("Texnika");
    const vehicles = [
        new Car("Chevrolet", 120),
        new Bike("Fixie", 25),
    ];
    for (const vehicle of vehicles) {
        vehicle.move();
    }
}
// 2. ENCAPSULATION
//  1. Bank Hisobi
class BankAccount {
    balance;
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Xato: depozit summasi musbat bo'lishi kerak.");
            return;
        }
        this.balance += amount;
        console.log(`${amount} so'm hisobga qo'shildi. Joriy balans: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Xato: yechish summasi musbat bo'lishi kerak.");
            return;
        }
        if (amount > this.balance) {
            console.log("Xato: hisobda yetarli mablag' yo'q.");
            return;
        }
        this.balance -= amount;
        console.log(`${amount} so'm hisobdan yechildi. Joriy balans: ${this.balance}`);
    }
    getBalance() {
        return this.balance;
    }
}
function bankAccountDemo() {
    console.log("Bank Hisobi");
    const account = new BankAccount(1_000_000);
    account.deposit(500_000);
    account.withdraw(200_000);
    account.withdraw(5_000_000);
    console.log(`Yakuniy balans: ${account.getBalance()} so'm`);
}
// 2. Talabalar Reytingi
class Student {
    name;
    marks = [];
    constructor(name) {
        this.name = name;
    }
    addMark(mark) {
        if (mark < 0 || mark > 100) {
            console.log(`Xato: baho 0 dan 100 gacha bo'lishi kerak (${mark} kiritildi).`);
            return;
        }
        this.marks.push(mark);
    }
    getAverageMark() {
        if (this.marks.length === 0)
            return 0;
        const sum = this.marks.reduce((total, mark) => total + mark, 0);
        return sum / this.marks.length;
    }
}
function studentsDemo() {
    console.log("Talabalar Reytingi");
    const alice = new Student("Alibek");
    alice.addMark(85);
    alice.addMark(90);
    alice.addMark(78);
    const bob = new Student("Sanjar");
    bob.addMark(95);
    bob.addMark(88);
    bob.addMark(92);
    const students = [alice, bob];
    for (const student of students) {
        console.log(`${student.name}: o'rtacha bahosi = ${student.getAverageMark().toFixed(2)}`);
    }
    const topStudent = students.reduce((best, current) => current.getAverageMark() > best.getAverageMark() ? current : best);
    console.log(`Eng yuqori bahoga ega talaba: ${topStudent.name}`);
}
// 3. ABSTRACTION
// 1. Geometrik Shakllar
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
function shapesDemo() {
    console.log("Geometrik Shakllar");
    const shapes = [new Circle(5), new Rectangle(4, 6)];
    for (const shape of shapes) {
        console.log(`${shape.constructor.name}: maydon = ${shape.getArea().toFixed(2)}, ` +
            `perimetr = ${shape.getPerimeter().toFixed(2)}`);
    }
}
class TransportCar {
    move() {
        console.log("Mashina yo'l bo'ylab harakatlanmoqda ");
    }
    stop() {
        console.log("Mashina to'xtadi.");
    }
}
class Bus {
    move() {
        console.log("Avtobus yo'lovchilarni tashib harakatlanmoqda ");
    }
    stop() {
        console.log("Avtobus bekatda to'xtadi.");
    }
}
function transportDemo() {
    console.log("Transport Vositalari");
    const vehicles = [new TransportCar(), new Bus()];
    for (const vehicle of vehicles) {
        vehicle.move();
        vehicle.stop();
    }
}
// 4. POLYMORPHISM
// 1. Xodimlar Klassini Yaratish
class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
}
class FullTimeEmployee extends Employee {
    monthlySalary;
    constructor(name, monthlySalary) {
        super(name);
        this.monthlySalary = monthlySalary;
    }
    getSalary() {
        return this.monthlySalary;
    }
}
class PartTimeEmployee extends Employee {
    hourlyRate;
    hoursWorked;
    constructor(name, hourlyRate, hoursWorked) {
        super(name);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getSalary() {
        return this.hourlyRate * this.hoursWorked;
    }
}
function employeeDemo() {
    console.log("Xodimlar");
    const employees = [
        new FullTimeEmployee("Behruz", 5000000),
        new PartTimeEmployee("Alisher", 30000, 80),
    ];
    for (const employee of employees) {
        console.log(`${employee.name} (${employee.constructor.name}): oyligi = ${employee.getSalary()} so'm`);
    }
}
class Bird {
    fly() {
        console.log("Qush qanotlarini qoqib uchmoqda ");
    }
}
class Plane {
    fly() {
        console.log("Samolyot dvigatellari bilan osmonda uchmoqda ");
    }
}
function flyDemo() {
    console.log("Uchuvchi Obyektlar");
    const flyers = [new Bird(), new Plane()];
    for (const flyer of flyers) {
        flyer.fly();
    }
}
//# sourceMappingURL=amaliy.js.map