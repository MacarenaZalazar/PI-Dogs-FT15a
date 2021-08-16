const {Dog, Op} = require('../db')
const {getDogTemps} = require('./gettersTemperaments')
const{lifespanToArray, infoToArray} = require('./utils')

//traigo todas las razas de la DB
async function getAllSqlDogs() {
    let dogs = await Dog.findAll({raw: true}) 
    dogs.map(e =>{
        let temperaments = getDogTemps(e.id)
        return{
            ...e,
            height: infoToArray(e.height),
            weight: infoToArray(e.weight),
            life_span: lifespanToArray(e.life_span), 
            temperament: temperaments
        }
    })
    console.log(dogs)

    return dogs
}

//traigo las razas filtradas por nombre de la DB
async function getSqlDogsByName(name){
    //let dogs = await Dog.findAll({ where: { name: {[Op.like]: `%${name}%`}}})
    let dogs = await getAllSqlDogs()
    dogs = dogs.filter(e =>  e.name.toLowerCase().includes(name.toLocaleLowerCase()))
    return dogs
}

//traigo todas las razas filtradas por id de la DB
async function getDogsByPk(pk){
    let dog = await Dog.findByPk(pk)
    dog =  dog.toJSON()
    let temperaments = await getDogTemps(dog.id)
    console.log(temperaments)
    dog = {
        ...dog, 
        height: infoToArray(dog.height),
        weight: infoToArray(dog.weight),
        life_span: lifespanToArray(dog.life_span),
        temperament: temperaments
    }
    console.log(dog)
    return [dog]
}

module.exports={
    getAllSqlDogs,
    getSqlDogsByName,
    getDogsByPk
}