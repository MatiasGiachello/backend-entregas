const objetos = [
    {
        pizza: 3,
        tomate: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        pizza: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        papas: 4
    }
]
let newArray = [];

objetos.forEach(objeto => {
    const keys = Object.keys(objeto);
    keys.forEach(key => {
        if (!newArray.includes(key)) newArray.push(key);
    })
})

console.log(newArray);