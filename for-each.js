// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const newArr = [];
    arr.forEach((item) => {
        newArr.push(item.name)
    })
    return newArr;

}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const newAr = []
    arr.forEach((item) => {
        newAr.push(item.type)
    })
    return newAr.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const newArr = [];

    arr.forEach((spanish) => {
        let abla = { nombre: spanish.name, tipo: spanish.type }
        newArr.push(abla)
    })
    return newArr;
}

