let a = 'first';

function scopeTest () {
    console.log(a);
        a = 'changed'

    let b = 'second';
    if (a != '') {
        console.log(a);
        console.log('inside if: ' + b);
        let c = 'third';
    }

    // let b = 'second';
}


scopeTest();
// console.log(b);
console.log(a); 

// everything defined in the most outer scope {} wil work in the inner scope, but everything defined in the inner scope {} won't work in the outer scopes