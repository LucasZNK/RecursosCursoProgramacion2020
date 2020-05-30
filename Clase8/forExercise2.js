let arrayOfPeople = [
    {
        name: "Jorge",
        age: 22,
    },
    {
        name: "Lucas",
        age: 12,
    },
    {
        name: "Pamela",
        age: 33,
    },
    {
        name: "Carlos",
        age: 75,
    },
    {
        name: "Romina",
        age: 11,
    }
]


for (i = 0; i < arrayOfPeople.length; i++) {

    let myActualPeople = arrayOfPeople[i];
    console.log(`El nombre de esta persona es ${myActualPeople.name} y su edad es de ${myActualPeople.age} y se encuentra en la posicion ${i}`)
}