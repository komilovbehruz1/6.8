// Inheritancelar

//  1. Hayvonlar classi
class Animal {
  constructor(
    public name: string,
    public sound: string,
  ) {}

  makeSound(): void {
    console.log(`${this.name} ovoz chiqarmoqda: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name, "Voof-voof");
  }

  makeSound(): void {
    console.log(`${this.name} hurmoqda: ${this.sound} `);
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name, "Myov-myov");
  }

  makeSound(): void {
    console.log(`${this.name}  miyovlamoqda: ${this.sound} `);
  }
}

function animalsDemo(): void {
  console.log("Hayvonlar");
  const animals: Animal[] = [new Dog("Rex"), new Cat("Murka")];

  for (const animal of animals) {
    animal.makeSound();
  }
}

//  2. Texnika Klassini Yaratish

class Vehicle {
  constructor(
    public name: string,
    public speed: number,
  ) {}

  move(): void {
    console.log(`${this.name} ${this.speed} km/soat tezlikda harakatlanmoqda.`);
  }
}

class Car extends Vehicle {
  move(): void {
    console.log(
      `${this.name} yo'l bo'ylab ${this.speed} km/soat tezlikda haydab ketmoqda `,
    );
  }
}

class Bike extends Vehicle {
  move(): void {
    console.log(
      `${this.name} pedallarni bosib ${this.speed} km/soat tezlikda ketmoqda `,
    );
  }
}

function vehiclesDemo(): void {
  console.log("Texnika");
  const vehicles: Vehicle[] = [
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
  private balance: number;

  constructor(initialBalance: number = 0) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      console.log("Xato: depozit summasi musbat bo'lishi kerak.");
      return;
    }
    this.balance += amount;
    console.log(
      `${amount} so'm hisobga qo'shildi. Joriy balans: ${this.balance}`,
    );
  }

  withdraw(amount: number): void {
    if (amount <= 0) {
      console.log("Xato: yechish summasi musbat bo'lishi kerak.");
      return;
    }
    if (amount > this.balance) {
      console.log("Xato: hisobda yetarli mablag' yo'q.");
      return;
    }
    this.balance -= amount;
    console.log(
      `${amount} so'm hisobdan yechildi. Joriy balans: ${this.balance}`,
    );
  }

  getBalance(): number {
    return this.balance;
  }
}

function bankAccountDemo(): void {
  console.log("Bank Hisobi");
  const account = new BankAccount(1_000_000);

  account.deposit(500_000);
  account.withdraw(200_000);
  account.withdraw(5_000_000);
  console.log(`Yakuniy balans: ${account.getBalance()} so'm`);
}

// 2. Talabalar Reytingi

class Student {
  private marks: number[] = [];

  constructor(public name: string) {}

  addMark(mark: number): void {
    if (mark < 0 || mark > 100) {
      console.log(
        `Xato: baho 0 dan 100 gacha bo'lishi kerak (${mark} kiritildi).`,
      );
      return;
    }
    this.marks.push(mark);
  }

  getAverageMark(): number {
    if (this.marks.length === 0) return 0;
    const sum = this.marks.reduce((total, mark) => total + mark, 0);
    return sum / this.marks.length;
  }
}

function studentsDemo(): void {
  console.log("Talabalar Reytingi");

  const alice = new Student("Alibek");
  alice.addMark(85);
  alice.addMark(90);
  alice.addMark(78);

  const bob = new Student("Sanjar");
  bob.addMark(95);
  bob.addMark(88);
  bob.addMark(92);

  const students: Student[] = [alice, bob];

  for (const student of students) {
    console.log(
      `${student.name}: o'rtacha bahosi = ${student.getAverageMark().toFixed(2)}`,
    );
  }

  const topStudent = students.reduce((best, current) =>
    current.getAverageMark() > best.getAverageMark() ? current : best,
  );

  console.log(`Eng yuqori bahoga ega talaba: ${topStudent.name}`);
}

// 3. ABSTRACTION

// 1. Geometrik Shakllar
abstract class Shape {
  abstract getArea(): number;
  abstract getPerimeter(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function shapesDemo(): void {
  console.log("Geometrik Shakllar");
  const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];

  for (const shape of shapes) {
    console.log(
      `${shape.constructor.name}: maydon = ${shape.getArea().toFixed(2)}, ` +
        `perimetr = ${shape.getPerimeter().toFixed(2)}`,
    );
  }
}

//  2. Transport Vositalari
interface Transport {
  move(): void;
  stop(): void;
}

class TransportCar implements Transport {
  move(): void {
    console.log("Mashina yo'l bo'ylab harakatlanmoqda ");
  }

  stop(): void {
    console.log("Mashina to'xtadi.");
  }
}

class Bus implements Transport {
  move(): void {
    console.log("Avtobus yo'lovchilarni tashib harakatlanmoqda ");
  }

  stop(): void {
    console.log("Avtobus bekatda to'xtadi.");
  }
}

function transportDemo(): void {
  console.log("Transport Vositalari");
  const vehicles: Transport[] = [new TransportCar(), new Bus()];

  for (const vehicle of vehicles) {
    vehicle.move();
    vehicle.stop();
  }
}

// 4. POLYMORPHISM

// 1. Xodimlar Klassini Yaratish
abstract class Employee {
  constructor(public name: string) {}

  abstract getSalary(): number;
}

class FullTimeEmployee extends Employee {
  constructor(
    name: string,
    private monthlySalary: number,
  ) {
    super(name);
  }

  getSalary(): number {
    return this.monthlySalary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    name: string,
    private hourlyRate: number,
    private hoursWorked: number,
  ) {
    super(name);
  }

  getSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

function employeeDemo(): void {
  console.log("Xodimlar");
  const employees: Employee[] = [
    new FullTimeEmployee("Behruz", 5000000),
    new PartTimeEmployee("Alisher", 30000, 80),
  ];

  for (const employee of employees) {
    console.log(
      `${employee.name} (${employee.constructor.name}): oyligi = ${employee.getSalary()} so'm`,
    );
  }
}

// 2. Transport Vositalarini Boshqarish
interface Flyer {
  fly(): void;
}

class Bird implements Flyer {
  fly(): void {
    console.log("Qush qanotlarini qoqib uchmoqda ");
  }
}

class Plane implements Flyer {
  fly(): void {
    console.log("Samolyot dvigatellari bilan osmonda uchmoqda ");
  }
}

function flyDemo(): void {
  console.log("Uchuvchi Obyektlar");
  const flyers: Flyer[] = [new Bird(), new Plane()];

  for (const flyer of flyers) {
    flyer.fly();
  }
}
