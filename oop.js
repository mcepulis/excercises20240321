//1. Knygynas: Sukurkite klasę, kuri reprezentuotų knygyną. Kiekviena knyga turėtų pavadinimą, autorių ir kainą. Galite pridėti metodus, kad būtų galima pridėti naują knygą, pašalinti knygą arba gauti visų knygų sąrašą.
console.log("______________1   uzduotis___________");

class Bookstore {
     constructor (bookName, bookAuthor, bookPrice) {
        this.bookName = bookName;
        this.bookAuthor = bookAuthor;
        this.bookPrice = bookPrice;
     }
}
const book1 = new Bookstore("Karas ir Taika", "Tolstojus", "500eu");
const book2 = new Bookstore("On Writing", "Hamingway", "400eu");
const book3 = new Bookstore("Pet Sematary", "King", "1500eu");
console.log(book1,book2,book3)
class Books {
    constructor () {
        this.book = []
    }

    addNewBook(bookName, bookAuthor, bookPrice) {
        const newBook = new Bookstore(bookName, bookAuthor, bookPrice)
        this.book.push(newBook)
    }
    removeBook(bookName) {
        this.book = this.book.filter(boo => boo.bookName !== bookName);
    }
    listBooks() {
        return this.book;
    }
}

const newBooks = new Books();
newBooks.addNewBook("Kliudziau", "Biliunas", "80eu");
newBooks.addNewBook("Kliudziau2", "Biliunas2", "90eu");
newBooks.addNewBook("Kliudziau3", "Biliunas3", "100eu");
// console.log(newBooks.listBooks())

newBooks.removeBook("Kliudziau2");
console.log(newBooks.listBooks());

/*2.Transporto priemonės:
Sukurkite klases "Automobilis" ir "Motociklas". Kiekviena turi markę, modelį ir variklio galingumą. Sukurkite metodą, kuris leidžia gauti visą informaciją apie transporto priemonę.*/
console.log("______________2   uzduotis___________");

class Car {
    constructor (brand, model, enginePower) {
        this.brand = brand;
        this.model = model;
        this.enginePower = enginePower;
     }

     infoCar() {
        return `Modelis: ${this.brand} Klase: ${this.model} Variklio galingumas: ${this.enginePower}`;
     }
}

const myCar = new Car("bmw", "x6", "375hp");

console.log(myCar.infoCar())

class Moto {
    constructor (brand, model, enginePower) {
        this.brand = brand;
        this.model = model;
        this.enginePower = enginePower;
     }
     infoMoto() {
        return `Modelis: ${this.brand} Klase: ${this.model} Variklio galingumas: ${this.enginePower}`;
     }
}

const myMoto = new Moto("Honda", "Winner", "16.1hp")
console.log(myMoto.infoMoto());

/*Darbuotojai:
Sukurkite klasę "Darbuotojas" su savybėmis, tokiomis kaip vardas, pavardė, pareigos ir atlyginimas. Pridėkite metodus, leidžiančius padidinti ar sumažinti atlyginimą ir gauti visas darbuotojo informacijas. */

console.log("______________3   uzduotis___________");

class Worker {
    constructor(name, surname, position, salary) {
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.salary = salary;
    }

    increaseSalary(n) {
        this.salary += n; 
    }

    decreaseSalary(n) {
        this.salary -= n; 
    }

    workerInfo() {
        return `Worker Name: ${this.name}, Surname: ${this.surname}, Position: ${this.position}, Salary: ${this.salary}`;
    }
}

const worker1 = new Worker("James", "Fox", "Admin", 1850);
worker1.increaseSalary(0); 
worker1.decreaseSalary(15); 
console.log(worker1.workerInfo()); 

/*Kreditų kortelės:
Sukurkite klasę "Kreditinė Kortelė", kuri turėtų savybes, tokias kaip kortelės numeris, saugumo kodas, galiojimo data ir limitas. Pridėkite metodus, kurie leidžia patikrinti kortelės galiojimą ir atlikti mokėjimus. */

class CreditCard {
    constructor(cardNumber, secCode, expire, limit) {
        this.cardNumber = cardNumber;
        this.secCode = secCode;
        this.expire = expire;
        this.limit = limit;
    }

}

const card1 = new CreditCard("EE55 2564 2221 2222 3566", "5555", )
