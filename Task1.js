function pickPropArray(array, prop)
{
    return array.map(item => item[prop]).filter(value => value !== undefined);
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
];

const result = pickPropArray(students, 'name');

console.log(result);

// [ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]
