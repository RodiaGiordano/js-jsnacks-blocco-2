const chestOne = [];

const chestTwo = [];

// rimane da gestire il caso in cui entrambi i cesti siano vuoti


let randomOne = Math.floor((Math.random() * 50));
let randomTwo = Math.floor((Math.random() * 50));

for (a= 0; a <randomOne; a++){
    chestOne.push('apple');
}
for (b= 0; b <randomTwo; b++){
    chestTwo.push('apple');
}

console.log('random 1: ' + chestOne.length)
console.log('random 2: ' + chestTwo.length)

let media = (chestOne.length + chestTwo.length) / 2;

if(media % 2 !== 0 && chestOne.length > chestTwo.length){
    itemEat = chestOne.shift();
    alert("Mi mangio una mela così non litigate")
}

else if(media % 2 !== 0 && chestOne.length < chestTwo.length){
    itemEat = chestTwo.shift();
    
    alert("Mi mangio una mela così non litigate")
}

media = (chestOne.length + chestTwo.length) / 2;


 for(i = 0; i < media; i++){

     if(media % 2 !== 0 && chestOne.length > chestTwo.length){
                        
    

     media = (chestOne.length + chestTwo.length) / 2

     itemRemove = chestOne.shift();

     itemAdd = chestTwo.push(itemRemove)

    
     }   

     else if(media % 2 !== 0 && chestOne.length < chestTwo.length){
         chestTwo.shift();

         itemRemove = chestTwo.shift();
            
         itemAdd = chestOne.push(itemRemove);

         media = (chestOne.length + chestTwo.length) / 2

     }

     else if(chestOne.length > media ){
        
         itemRemove = chestOne.shift();

         itemAdd = chestTwo.push(itemRemove);

         media = (chestOne.length + chestTwo.length) / 2
     }

     else if( chestTwo.length > media ){
        
         itemRemove = chestTwo.shift();

         itemAdd = chestOne.push(itemRemove);

         media = (chestOne.length + chestTwo.length) / 2
     }
          

    
 }

    
     console.log('media :' + media);
     console.log('cesto 1: ' + chestOne)
     console.log('cesto 2: ' + chestTwo)
    