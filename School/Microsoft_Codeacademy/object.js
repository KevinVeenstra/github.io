
let car = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    getPrice: function() {
        // perform some calc
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model + ' ' + this.year);
    }
}

car.printDescription();
console.log(car.year);

// console.log(car['year']);
//  console.log(car[1]);

/*
var anotherCar = {};
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);
*/

/*
var a = {
    myPropoerty: { b: 'hi', c: 'bye'}
};
console.log(a.myPropoerty.b);
*/

/*
var c = {
    myPropoerty: [
        { d: 'this'},
        { e: 'can'},
        { f: 'get'},
        { g: 'crazy'},
    ]
};
*/

/*
let carlot = [
    {year: 2017, make: 'toyota', model: '4Runner'},
    {year: 2015, make: 'BMW', model: '528i'},
    {year: 1982, make: 'buick', model: 'Skylark'},
];

let contacts = {
    customers: [
        {firstName: 'Bob', lastName: 'Tabor', phoneNumbers: [ '06-12345678', '06-87654321' ] },
        {firstName: 'Richard', lastName: 'Boughton', phoneNumbers: [ '06-45612378', '06-98765142' ] },        
    ],
    employees: [
        {firstName: 'steve', lastName: 'Jaworski', phoneNumbers: [ '06-78954789', '06-251478987' ] },
        {firstName: 'Conrad', lastName: 'Tabor', phoneNumbers: [ '06-12687598' ] },
        {firstName: 'Grant', lastName: 'Tabor', phoneNumbers: [ '06-12587963' ] },
    ]
};
*/
