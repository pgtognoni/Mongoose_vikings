//Make sure to require your model so you can connect to the DB
//const mongoose = require("mongoose");

//This line of code connects to the Database
require("./db");

//Iteration 2:
const Viking = require('./models/User');
//Iteration 3:

const odin = {
    firstName: 'Odin',
    familyName: 'Saxon',
    strength: 87,
    weapon: 'Hummer'
}

// Viking.create(odin)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// Viking.findByIdAndDelete('63db9bb6be1dffac2828ad97')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

const vikingArr = [
    {
        firstName: 'Odin',
        familyName: 'Saxon',
        strength: 57,
        weapon: 'Hummer'
    },
    {
        firstName: 'Diogo',
        familyName: 'Saxon',
        strength: 77,
        weapon: 'Rock'
    },
    {
        firstName: 'Mat',
        familyName: 'Saxon',
        strength: 99,
        weapon: 'Sword'
    },
    {
        firstName: 'Josh',
        familyName: 'Saxon',
        strength: 55,
        weapon: 'Powder'
    },
    {
        firstName: 'Ed',
        familyName: 'Saxon',
        strength: 21,
        weapon: 'Knife'
    }
]

// Viking.insertMany(vikingArr)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

Viking.findByIdAndUpdate('63db9ce56b2ab52add92dd4b', {strength: 1000}, {new: true})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    
