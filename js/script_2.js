const invitedName = ['Gianni', 'Paolo', 'Carlo', 'Marco', 'Giuseppe'];

const invitedSurname = ['Rossi', 'Bianchi', 'Smith', 'Chan', 'Rodia'];

const max = invitedName.length;

const fakeInvited = [];

// let randomName ="";
// let randomSurname="";








for(i = 0; i <= max; i++){


    randomName = invitedName [Math.floor(Math.random() * max)];

    randomSurname = invitedSurname [Math.floor(Math.random() * max)];

    fakeName = randomName + " " + randomSurname;

    fakeInvited.push(fakeName);
     
    

    console.log(fakeName);
    
}

// console.log('nomi generati ' + fakeInvited)

// console.log('randomName: ' + randomName);
// console.log('randomSurname: ' + randomSurname);