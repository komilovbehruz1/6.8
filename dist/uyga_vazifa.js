"use strict";
// Birinchi Topshiriq
Object.defineProperty(exports, "__esModule", { value: true });
// 1.1 CAR CLASS
class Car {
    model;
    year;
    color;
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    changeColor(newColor) {
        this.color = newColor;
    }
    displayInfo() {
        console.log(`Model: ${this.model}, Yil: ${this.year}, Rang: ${this.color}`);
    }
}
const car1 = new Car("Chevrolet Cobalt", 2026, "Oq");
car1.displayInfo();
car1.changeColor("Qora");
car1.displayInfo();
// 1.2 STUDENT CLASS
class Student {
    firstName;
    lastName;
    grade;
    constructor(firstName, lastName, grade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    changeGrade(newGrade) {
        this.grade = newGrade;
    }
}
const student1 = new Student("Alibek", "Aminboyev", 17);
console.log(student1.getFullName());
student1.changeGrade(11);
console.log(`Yangi sinf: ${student1.grade}`);
// Ikkinchi Topshiriq
// 2.1 BANK ACCOUNT CLASS
class BankAccount {
    balance;
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Xatolik: summa musbat bo'lishi kerak!");
            return;
        }
        this.balance += amount;
        console.log(`${amount} so'm hisobga qo'shildi. Balans: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Xatolik: balansdan ortiq pul yechib bo'lmaydi!");
            return;
        }
        this.balance -= amount; // TUZATILDI: "= amount" o'rniga "-= amount"
        console.log(`${amount} so'm yechildi. Balans: ${this.balance}`);
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(2000);
account.withdraw(300);
// 2.2 USERACCOUNT CLASS
class UserAccount {
    username;
    password;
    lastActive;
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.lastActive = new Date();
    }
    changePassword(oldPassword, newPassword) {
        if (oldPassword !== this.password) {
            console.log("Xatolik: eski parol noto'g'ri!");
            return;
        }
        this.password = newPassword;
        console.log("Parol muvaffaqiyatli o'zgartirildi.");
    }
    isActive() {
        const now = new Date();
        const diffMinutes = (now.getTime() - this.lastActive.getTime()) / 60000;
        return diffMinutes < 30;
    }
}
// protected metodi
class AdminUser extends UserAccount {
    checkActivity() {
        console.log(`${this.username} faolmi: ${this.isActive()}`);
    }
}
const user1 = new UserAccount("ali_dev", "12345");
user1.changePassword("12345", "newpass1");
const admin1 = new AdminUser("admin1", "adminpass");
admin1.checkActivity();
class Dog {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} (it): Vov-vov!`);
    }
}
class Cat {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name} (mushuk): Miyov!`);
    }
}
const dog1 = new Dog("Rex", 3);
const cat1 = new Cat("Murka", 2);
dog1.speak();
cat1.speak();
class CarRental {
    id;
    name;
    pricePerDay;
    isRented = false;
    constructor(id, name, pricePerDay) {
        this.id = id;
        this.name = name;
        this.pricePerDay = pricePerDay;
    }
    rentItem() {
        this.isRented = true;
        console.log(`${this.name} (mashina) ijaraga berildi. Narxi: ${this.pricePerDay}/kun`);
    }
    returnItem() {
        this.isRented = false;
        console.log(`${this.name}  mashina qaytarildi.`);
    }
}
class HouseRental {
    id;
    name;
    pricePerDay;
    isRented = false;
    constructor(id, name, pricePerDay) {
        this.id = id;
        this.name = name;
        this.pricePerDay = pricePerDay;
    }
    rentItem() {
        this.isRented = true;
        console.log(`${this.name} (uy) ijaraga berildi. Narxi: ${this.pricePerDay}/kun`);
    }
    returnItem() {
        this.isRented = false;
        console.log(`${this.name}  uy qaytarildi.`);
    }
}
const carRental = new CarRental(1, "Nexia 3", 15);
const houseRental = new HouseRental(2, "2-xonali kvartira", 50);
carRental.rentItem();
carRental.returnItem();
houseRental.rentItem();
houseRental.returnItem();
// TO'RTINCHI TOPSHIRIQ
// 4.1 Calculator Abstract Class
class Calculator {
}
class SimpleCalculator extends Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
}
const calc = new SimpleCalculator();
console.log(`5 + 3 = ${calc.add(5, 3)}`);
console.log(`5 - 3 = ${calc.subtract(5, 3)}`);
console.log(`5 * 3 = ${calc.multiply(5, 3)}`);
//  4.2 Shape abstract klassi
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`${this.name}: Yuzasi = ${this.getArea().toFixed(2)}, Perimetri = ${this.getPerimeter().toFixed(2)}`);
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super("Doira");
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
        super("To'rtburchak");
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
const circle1 = new Circle(5);
const rect1 = new Rectangle(4, 6);
circle1.displayInfo();
rect1.displayInfo();
// BESHINCHI TOPSHIRIQ
// 5.1 Counter klassi
class Counter {
    static count = 0;
    constructor() {
        Counter.count++;
    }
}
const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();
console.log(`Yaratilgan obyektlar soni: ${Counter.count}`); // 3
//  5.2 Singleton klass
class Logger {
    static instance;
    logs = [];
    constructor() { }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        const entry = `[${new Date().toISOString()}] ${message}`;
        this.logs.push(entry);
        console.log(entry);
    }
    getAllLogs() {
        return this.logs;
    }
}
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
logger1.log("Tizim ishga tushdi");
logger2.log("Foydalanuvchi tizimga kirdi");
console.log(`Bir xil obyektmi? ${logger1 === logger2}`);
console.log("Barcha loglar:", logger1.getAllLogs());
class Account {
    accountNumber;
    holderName;
    balance;
    constructor(accountNumber, holderName, balance = 0) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("Xatolik: summa musbat bo'lishi kerak!");
            return;
        }
        this.balance += amount;
        console.log(`${amount} so'm hisobga qo'shildi. Balans: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Xatolik: balansdan ortiq pul yechib bo'lmaydi!");
            return;
        }
        this.balance -= amount;
        console.log(`${amount} so'm yechildi. Balans: ${this.balance}`);
    }
    checkBalance() {
        return this.balance;
    }
}
// AdminAccount
class AdminAccount extends Account {
    getRole() {
        return "Admin";
    }
    addUser(accounts, newAccount) {
        accounts.push(newAccount);
        console.log(`Yangi foydalanuvchi qo'shildi: ${newAccount.holderName}`);
    }
    closeAccount(accounts, accountNumber) {
        const index = accounts.findIndex((acc) => acc.accountNumber === accountNumber);
        if (index === -1) {
            console.log("Xatolik: hisob topilmadi!");
            return;
        }
        const closed = accounts.splice(index, 1)[0];
        console.log(`Hisob yopildi: ${closed.holderName} (${closed.accountNumber})`);
    }
}
// CustomerAccount
class CustomerAccount extends Account {
    getRole() {
        return "Customer";
    }
    viewOwnBalance() {
        console.log(`${this.holderName}ning balansi: ${this.checkBalance()} so'm`);
    }
}
// 6.2 ONLINE SHOPPING SYSTEM
class Product {
    name;
    price;
    category;
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    getPrice() {
        return this.price;
    }
    displayInfo() {
        console.log(`${this.name} | Kategoriya: ${this.category} | Narxi: ${this.price} so'm`);
    }
}
class DiscountedProduct extends Product {
    discountPercent;
    constructor(name, price, category, discountPercent) {
        super(name, price, category);
        this.discountPercent = discountPercent;
    }
    getDiscountedPrice() {
        return this.price - (this.price * this.discountPercent) / 100;
    }
    displayInfo() {
        console.log(`${this.name} | Kategoriya: ${this.category} | Asl narx: ${this.price} so'm | ` +
            `Chegirma: ${this.discountPercent}% | Chegirmali narx: ${this.getDiscountedPrice()} so'm`);
    }
}
//  Har xil mahsulotlar uchun hisob-kitob
const products = [
    new Product("Noutbuk", 8_000_000, "Elektronika"),
    new DiscountedProduct("Telefon", 5_000_000, "Elektronika", 15),
    new Product("Kitob", 50_000, "Kitoblar"),
    new DiscountedProduct("Krossovka", 700_000, "Kiyim", 20),
];
let totalSum = 0;
for (const product of products) {
    product.displayInfo();
    if (product instanceof DiscountedProduct) {
        totalSum += product.getDiscountedPrice();
    }
    else {
        totalSum += product.getPrice();
    }
}
console.log(`\nJami summa: ${totalSum.toFixed(2)} so'm`);
// 6.3 GAME
class Character {
    name;
    health;
    constructor(name, health = 100) {
        this.name = name;
        this.health = health;
    }
    isAlive() {
        return this.health > 0;
    }
}
class Warrior extends Character {
    attackPower = 20;
    armor = 5;
    attack(target) {
        console.log(`${this.name} (Jangchi) ${target.name}ga qilich bilan hujum qildi!`);
        target.defend(this.attackPower);
    }
    defend(damage) {
        const realDamage = Math.max(damage - this.armor, 0);
        this.health -= realDamage;
        console.log(`${this.name} zarba qabul qildi (-${realDamage} HP). Qolgan HP: ${Math.max(this.health, 0)}`);
    }
}
class Mage extends Character {
    magicPower = 30;
    attack(target) {
        console.log(`${this.name} (Sehrgar) ${target.name}ga olov to'pi otdi!`);
        target.defend(this.magicPower);
    }
    defend(damage) {
        // sehrgarning zirhi yo'q, to'liq zarar oladi
        this.health -= damage;
        console.log(`${this.name} zarba qabul qildi (-${damage} HP). Qolgan HP: ${Math.max(this.health, 0)}`);
    }
}
//  Jang qildirish
function battle(char1, char2) {
    console.log(`\n=== Jang boshlandi: ${char1.name} VS ${char2.name} ===`);
    let round = 1;
    while (char1.isAlive() && char2.isAlive()) {
        console.log(`\n-- ${round}-raund --`);
        char1.attack(char2);
        if (!char2.isAlive())
            break;
        char2.attack(char1);
        round++;
    }
    const winner = char1.isAlive() ? char1 : char2;
    console.log(`G'olib: ${winner.name}!`);
}
const warrior1 = new Warrior("Konan");
const mage1 = new Mage("Merlin");
battle(warrior1, mage1);
//# sourceMappingURL=uyga_vazifa.js.map