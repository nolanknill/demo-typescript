export {};

function greeting(username: string, age: number | string) {
    if (typeof age === "string") {
        age = Number(age);
    }

    const output = `Hi, I'm ${username}. Last year I was ${age - 1} years old`;
    
    return output;
}

const age: string = "19";

const greeting1 = greeting("Michael", age); 
console.log(greeting1);


// let types: number | string | boolean | {};

interface User {
    id: number,
    name: string,
    horoscope: HoroscopeSign
}

enum HoroscopeSign {
    Aries = "Aries",
    Cancer = "Cancer",
    Virgo = "Virgo",
    Aquarius = "Aquarius"
}


const user: User = {
    id: 1, 
    name: "Person1",
    horoscope: HoroscopeSign.Aquarius
}

const user2: User = {
    id: 2,
    name: "Person2",
    horoscope: HoroscopeSign.Aries
}

const user3 = { 
    id: 3, 
    name:"Person3", 
    horoscope: HoroscopeSign.Cancer
}

// Array of User-interfaced objects
const users: User[] = [user, user2, user3];

users.forEach((user: User) => {
    console.log(`${user.name} has the sign: ${user.horoscope}`);
});


const grades: number[] = [99, 98, 100, 97, 99];