// STRETCH
const cars = [
    {
    vin: '2G1WJ15K579325419',
    make: 'hyundai',
    model: 'elentra',
    mileage: 53456,
    title: 'clean',
    transmission: 'manual',
},
{
    vin: 'JN1DA31A53T450658',
    make: 'toyota',
    model: 'corolla',
    mileage: 126456,
    title: 'salvage',
    transmission: 'automatic',
},
{
    vin: 'JTJHY7AX7D4087858',
    make: 'ford',
    model: 'bronco',
    mileage: 18653,
    title: 'clean',
    transmission: 'automatic',
},
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}