// 1.     Masyvo Elementų Filtravimas: Sukurkite funkciją, kuri naudojant for ciklą iš masyvo išrenka ir grąžina naują masyvą su elementais, kurie tenkina tam tikrą sąlygą.
console.log("______________1   uzduotis___________")
const arr = [22, "abc", 33, "4", "cde", 10, 5, -5, "test", true]

function filterArr(types) {
    let newArr = [];
    for(let x of arr) {
        if (typeof(x) == types) {
            newArr.push(x);         
        }
    }
    return newArr;
}
console.log(filterArr('number'))

// 2.     Unikalių Reikšmių Radimas: Turite masyvą su pasikartojančiomis reikšmėmis. Naudodami for ciklą, sukurkite naują masyvą, kuriame būtų tik unikalios reikšmės.
console.log("______________2   uzduotis___________")
const arr2 = [22, "abc", 33, "4", "cde", 10, true, -5, "4", true]

function uniqueArr(arr) {
    let newArr = [];
    for(let x of arr) {
        if (!newArr.includes(x)) {
            newArr.push(x);
        }
    }
    return newArr;
}
console.log(uniqueArr(arr2));

//3.     Objekto Gylis: Parašykite funkciją, kuri naudodama for in ciklą ir rekursiją, grąžintų objekto gylį (kiek giliausiai objektas turi įdėtinius objektus).
console.log("______________3   uzduotis___________");

const obj3 = {
    'va': {
        'ka': {
            'ras': {'rytas': 1},
    },
}
}

function objDepth(obj, depth = 1) {
    let result = depth;
    for (let x in obj) {
        if (typeof obj[x] === 'object') {
            let next = objDepth(obj[x], depth + 1);
            result = next;
        }
    }
    return result;
}

console.log(objDepth(obj3));

//4.     Masyvo Atvirkštinis: Turite skaičių masyvą. Naudodami for ciklą, sukurkite naują masyvą, kurio elementai būtų pradinio masyvo, bet eilės atvirkščiai.
console.log("______________4   uzduotis___________")

const arr4 = [5,3,8,4,7,20,55,4,99,8,7];

let reverseArr4 = [];
for (let i = arr4.length - 1; i>=0; i--) {
    reverseArr4.push(arr4[i]);
}
console.log(reverseArr4);

//5.     Raktų Filtravimas Objekte: Turite objektą su daugybe savybių. Sukurkite funkciją, kuri naudojant for in ciklą, grąžina naują objektą, kuriame yra tik tas savybės, kurios tenkina tam tikrą sąlygą.
console.log("______________5   uzduotis___________")

const obj5 =  {
    title: "Candies",
    author: "John",
    year: 1980,
    price: 50,
    category: "sweet",
};

function filterObj(types) {
    let newObj = {};
    for(let x in obj5) {
        if (typeof(obj5[x]) == types) {
            newObj[x] = obj5[x];         
        }
    }
    return newObj;
}
console.log(filterObj('string'))

//6.     Suminė Vertė Objekte: Turite objektą, kurio savybės yra skaičiai. Naudodami for in ciklą, apskaičiuokite visų objekto savybių sumą.
console.log("______________6   uzduotis___________");

const obj6 =  {
    num1: 15,
    num2: -30,
    num3: 5.5,
    num4: 50,
    num5: 0,
};

let result = 0
for (let x in obj6) {
    result += obj6[x]
}
console.log(result)

//7.     Masyvo Elementų Kiekis: Turite masyvą su skirtingų tipų elementais. Naudodami for ciklą, suskaičiuokite, kiek yra kiekvieno tipo elementų.
console.log("______________7   uzduotis___________")

const arr7 = [22, "abc", 33, "4", "cde", 10, true, -5, "4", true];

function countType(type) {
    let counter = 0;
    for (let i = 0; i < arr7.length; i++) {
        if (typeof(arr7[i]) == type) {
            counter++
        }
    }
    return counter;
}
console.log(countType('number'));
 
//8.     Objekto Konversija Į Masyvą: Sukurkite funkciją, kuri objektą (raktai ir reikšmės) konvertuotų į masyvą, kur kiekvienas elementas būtų [raktas, reikšmė] pora.
console.log("______________8   uzduotis___________")

const obj8 =  {
    title: "Candies",
    author: "John",
    year: 1980,
    price: 50,
    category: "sweet",
};

function objToArr(obj){
    const objKeys = Object.keys(obj);
    const objValues = Object.values(obj)
    result = [];
    for (let i = 0; i < objKeys.length; i++) {
        let stringObj = (objKeys[i] + "." + objValues[i]).split('.');
        result.push(stringObj)
    }
return result
}
console.log(objToArr(obj8));

//9.     Dinaminis Objekto Sudarymas: Naudodami for ciklą, sukurti objektą, kurio raktai yra skaičiai nuo 1 iki n, o reikšmės - tie skaičiai pakelti kvadratu.
console.log("______________9   uzduotis___________")

const n = 10;
let genObj = {};
for (let i = 1; i <= n; i++) {
    genObj[i] = i*i;
}
console.log(genObj);

//10.  Sąlyginės Reikšmės Objekte: Turite objektą, kuriame saugomos įvairios vartotojų savybės (pvz., vardas, amžius, miestas). Sukurkite funkciją, kuri naudojant for in ciklą, pakeistų tam tikrų savybių reikšmes, jeigu jos tenkina nurodytą sąlygą (pvz., jeigu vartotojo amžius yra mažesnis nei 18, pridėkite savybę pilnametis: false).
console.log("______________10   uzduotis___________");

const obj10 =  {
    name: "Mark",
    surname: "Markensson",
    age: 18,
    country: "Norway",
};

const testObj = {
    pilnametis: "false",
};


for (let x in testObj) {
    if (obj10.age >= 14) {
        obj10[x] = testObj[x];
    } 
}

console.log(obj10);