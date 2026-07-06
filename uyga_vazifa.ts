
class Car {
  model: string;
  year: number;
  color: string;

  constructor(model: string, year: number, color: string) {
    this.model = model;
    this.year = year;
    this.color = color;
  }

  changeColor(newColor: string): void {
    this.color = newColor;
  }

  displayInfo(): void {
    console.log(`Model: ${this.model}, Yil: ${this.year}, Rang: ${this.color}`);
  }
}

const car1 = new Car("Chevrolet Cobalt", 2026, "Oq");
car1.displayInfo();
car1.changeColor("Qora");
car1.displayInfo();

class Student {
  firstName: string;
  lastName: string;
  grade: number;

  constructor(firstName: string, lastName: string, grade: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  changeGrade(newGrade: number): void {
    this.grade = newGrade;
  }
}

const student1 = new Student("Alibek", "Aminboyev", 17);
console.log(student1.getFullName());
student1.changeGrade(11);
console.log(`Yangi sinf: ${student1.grade}`);

class BankAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Xatolik: summa musbat bo'lishi kerak!");
      return;
    }
    this.balance += amount;
    console.log(`${amount} so'm hisobga qo'shildi. Balans: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Xatolik: balansdan ortiq pul yechib bo'lmaydi!");
      return;
    }
    this.balance -= amount; // TUZATILDI: "= amount" o'rniga "-= amount"
    console.log(`${amount} so'm yechildi. Balans: ${this.balance}`);
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(2000);
account.withdraw(300);

class UserAccount {
  public username: string;
  private password: string;
  protected lastActive: Date;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.lastActive = new Date();
  }

  changePassword(oldPassword: string, newPassword: string): void {
    if (oldPassword !== this.password) {
      console.log("Xatolik: eski parol noto'g'ri!");
      return;
    }
    this.password = newPassword;
    console.log("Parol muvaffaqiyatli o'zgartirildi.");
  }

  protected isActive(): boolean {
    const now = new Date();
    const diffMinutes = (now.getTime() - this.lastActive.getTime()) / 60000;
    return diffMinutes < 30;
  }
}

class AdminUser extends UserAccount {
  checkActivity(): void {
    console.log(`${this.username} faolmi: ${this.isActive()}`);
  }
}

const user1 = new UserAccount("ali_dev", "12345");
user1.changePassword("12345", "newpass1");

const admin1 = new AdminUser("admin1", "adminpass");
admin1.checkActivity();

interface Animal {
  name: string;
  age: number;
  speak(): void;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} (it): Vov-vov!`);
  }
}

class Cat implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} (mushuk): Miyov!`);
  }
}

const dog1 = new Dog("Rex", 3);
const cat1 = new Cat("Murka", 2);
dog1.speak();
cat1.speak();

interface RentalItem {
  id: number;
  name: string;
  pricePerDay: number;
  rentItem(): void;
  returnItem(): void;
}

class CarRental implements RentalItem {
  id: number;
  name: string;
  pricePerDay: number;
  private isRented: boolean = false;

  constructor(id: number, name: string, pricePerDay: number) {
    this.id = id;
    this.name = name;
    this.pricePerDay = pricePerDay;
  }

  rentItem(): void {
    this.isRented = true;
    console.log(
      `${this.name} (mashina) ijaraga berildi. Narxi: ${this.pricePerDay}/kun`,
    );
  }

  returnItem(): void {
    this.isRented = false;
    console.log(`${this.name}  mashina qaytarildi.`);
  }
}

class HouseRental implements RentalItem {
  id: number;
  name: string;
  pricePerDay: number;
  private isRented: boolean = false;

  constructor(id: number, name: string, pricePerDay: number) {
    this.id = id;
    this.name = name;
    this.pricePerDay = pricePerDay;
  }

  rentItem(): void {
    this.isRented = true;
    console.log(
      `${this.name} (uy) ijaraga berildi. Narxi: ${this.pricePerDay}/kun`,
    );
  }

  returnItem(): void {
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

abstract class Calculator {
  abstract add(a: number, b: number): number;
  abstract subtract(a: number, b: number): number;
  abstract multiply(a: number, b: number): number;
}

class SimpleCalculator extends Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calc = new SimpleCalculator();
console.log(`5 + 3 = ${calc.add(5, 3)}`);
console.log(`5 - 3 = ${calc.subtract(5, 3)}`);
console.log(`5 * 3 = ${calc.multiply(5, 3)}`);

//  4.2 Shape abstract klassi
abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getArea(): number;
  abstract getPerimeter(): number;

  displayInfo(): void {
    console.log(
      `${this.name}: Yuzasi = ${this.getArea().toFixed(2)}, Perimetri = ${this.getPerimeter().toFixed(2)}`,
    );
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super("Doira");
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super("To'rtburchak");
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const circle1 = new Circle(5);
const rect1 = new Rectangle(4, 6);
circle1.displayInfo();
rect1.displayInfo();


class Counter {
  static count: number = 0;

  constructor() {
    Counter.count++;
  }
}

const c1 = new Counter();
const c2 = new Counter();
const c3 = new Counter();
console.log(`Yaratilgan obyektlar soni: ${Counter.count}`); // 3

class Logger {
  private static instance: Logger;
  private logs: string[] = [];

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string): void {
    const entry = `[${new Date().toISOString()}] ${message}`;
    this.logs.push(entry);
    console.log(entry);
  }

  getAllLogs(): string[] {
    return this.logs;
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Tizim ishga tushdi");
logger2.log("Foydalanuvchi tizimga kirdi");

console.log(`Bir xil obyektmi? ${logger1 === logger2}`);
console.log("Barcha loglar:", logger1.getAllLogs());



interface IAccountActions {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  checkBalance(): number;
}

abstract class Account implements IAccountActions {
  accountNumber: string;
  holderName: string;
  protected balance: number;

  constructor(accountNumber: string, holderName: string, balance: number = 0) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Xatolik: summa musbat bo'lishi kerak!");
      return;
    }
    this.balance += amount;
    console.log(`${amount} so'm hisobga qo'shildi. Balans: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Xatolik: balansdan ortiq pul yechib bo'lmaydi!");
      return;
    }
    this.balance -= amount;
    console.log(`${amount} so'm yechildi. Balans: ${this.balance}`);
  }

  checkBalance(): number {
    return this.balance;
  }

  abstract getRole(): string;
}

class AdminAccount extends Account {
  getRole(): string {
    return "Admin";
  }

  addUser(accounts: Account[], newAccount: Account): void {
    accounts.push(newAccount);
    console.log(`Yangi foydalanuvchi qo'shildi: ${newAccount.holderName}`);
  }

  closeAccount(accounts: Account[], accountNumber: string): void {
    const index = accounts.findIndex(
      (acc) => acc.accountNumber === accountNumber,
    );
    if (index === -1) {
      console.log("Xatolik: hisob topilmadi!");
      return;
    }
    const closed = accounts.splice(index, 1)[0];
    console.log(
      `Hisob yopildi: ${closed.holderName} (${closed.accountNumber})`,
    );
  }
}

class CustomerAccount extends Account {
  getRole(): string {
    return "Customer";
  }

  viewOwnBalance(): void {
    console.log(`${this.holderName}ning balansi: ${this.checkBalance()} so'm`);
  }
}


class Product {
  name: string;
  price: number;
  category: string;

  constructor(name: string, price: number, category: string) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getPrice(): number {
    return this.price;
  }

  displayInfo(): void {
    console.log(
      `${this.name} | Kategoriya: ${this.category} | Narxi: ${this.price} so'm`,
    );
  }
}

class DiscountedProduct extends Product {
  discountPercent: number;

  constructor(
    name: string,
    price: number,
    category: string,
    discountPercent: number,
  ) {
    super(name, price, category);
    this.discountPercent = discountPercent;
  }

  getDiscountedPrice(): number {
    return this.price - (this.price * this.discountPercent) / 100;
  }

  displayInfo(): void {
    console.log(
      `${this.name} | Kategoriya: ${this.category} | Asl narx: ${this.price} so'm | ` +
        `Chegirma: ${this.discountPercent}% | Chegirmali narx: ${this.getDiscountedPrice()} so'm`,
    );
  }
}

const products: Product[] = [
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
  } else {
    totalSum += product.getPrice();
  }
}

console.log(`\nJami summa: ${totalSum.toFixed(2)} so'm`);


abstract class Character {
  name: string;
  health: number;

  constructor(name: string, health: number = 100) {
    this.name = name;
    this.health = health;
  }

  abstract attack(target: Character): void;
  abstract defend(damage: number): void;

  isAlive(): boolean {
    return this.health > 0;
  }
}

class Warrior extends Character {
  private attackPower: number = 20;
  private armor: number = 5;

  attack(target: Character): void {
    console.log(
      `${this.name} (Jangchi) ${target.name}ga qilich bilan hujum qildi!`,
    );
    target.defend(this.attackPower);
  }

  defend(damage: number): void {
    const realDamage = Math.max(damage - this.armor, 0);
    this.health -= realDamage;
    console.log(
      `${this.name} zarba qabul qildi (-${realDamage} HP). Qolgan HP: ${Math.max(this.health, 0)}`,
    );
  }
}

class Mage extends Character {
  private magicPower: number = 30;

  attack(target: Character): void {
    console.log(`${this.name} (Sehrgar) ${target.name}ga olov to'pi otdi!`);
    target.defend(this.magicPower);
  }

  defend(damage: number): void {
    // sehrgarning zirhi yo'q, to'liq zarar oladi
    this.health -= damage;
    console.log(
      `${this.name} zarba qabul qildi (-${damage} HP). Qolgan HP: ${Math.max(this.health, 0)}`,
    );
  }
}

function battle(char1: Character, char2: Character): void {
  console.log(`\n=== Jang boshlandi: ${char1.name} VS ${char2.name} ===`);
  let round = 1;

  while (char1.isAlive() && char2.isAlive()) {
    console.log(`\n-- ${round}-raund --`);
    char1.attack(char2);
    if (!char2.isAlive()) break;

    char2.attack(char1);
    round++;
  }

  const winner = char1.isAlive() ? char1 : char2;
  console.log(`G'olib: ${winner.name}!`);
}

const warrior1 = new Warrior("Konan");
const mage1 = new Mage("Merlin");

battle(warrior1, mage1);
