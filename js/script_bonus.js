const chestTwo = ['apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple'];

const chestOne = [];


const media = (chestOne.length + chestTwo.length) / 2;

console.log('media :' + media);

for(i = 0; i <= media; i++){

    if( chestOne.length > media ){
        
        let itemRemove = chestOne.shift();

        let itemAdd = chestTwo.push(itemRemove);
    }

    else if( chestTwo.length > media ){
        
        let itemRemove = chestTwo.shift();

        let itemAdd = chestOne.push(itemRemove);
    }



}

console.log('cesto 1: ' + chestOne)
console.log('cesto 2: ' + chestTwo)