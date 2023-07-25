const chestOne = ['apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple'];

const chestTwo = [];

let itermRemove = "";
let itemAdd = "";

const media = (chestOne.length + chestTwo.length) / 2;

console.log('media :' + media);

for(i = 0; i <= media; i++){

    if( chestOne.length > media ){
        
        itemRemove = chestOne.shift();

        itemAdd = chestTwo.push(itemRemove);
    }

    else if( chestTwo.length > media ){
        
        itemRemove = chestTwo.shift();

        itemAdd = chestOne.push(itemRemove);
    }



}

console.log('cesto 1: ' + chestOne)
console.log('cesto 2: ' + chestTwo)