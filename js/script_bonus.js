const chestTwo = ['apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple'];

const chestOne = ['apple'];

let media = (chestOne.length + chestTwo.length) / 2;

if(media % 2 !== 0 && chestOne.length > chestTwo.length){
    itemEat = chestOne.shift();
    
}

else if(media % 2 !== 0 && chestOne.length < chestTwo.length){
    itemEat = chestTwo.shift();
    

}

media = (chestOne.length + chestTwo.length) / 2;


 for(i = 0; i < media; i++){

     if(media % 2 !== 0 && chestOne.length > chestTwo.length && chestOne > media){
                        
    

     media = (chestOne.length + chestTwo.length) / 2

     itemRemove = chestOne.shift();

     itemAdd = chestTwo.push(itemRemove)

    
     }   

     else if(media % 2 !== 0 && chestOne.length < chestTwo.length && chestOne < media){
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
    