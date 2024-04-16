// STRETCH
const cars = [
    {
    vin: '1111111111111',
    make: 'hyundai',
    model: 'elentra',
    mileage: 53456,
    title: 'clean',
    transmission: 'manual',
},
{
    vin: '1234567891012',
    make: 'toyota',
    model: 'corolla',
    mileage: 126456,
    title: 'salvage',
    transmission: 'automatic',
},
{
    vin: '1121121112111',
    make: 'ford',
    model: 'bronco',
    mileage: 18653,
    title: 'clean',
    transmission: 'automatic',
},
]

exports.seed = function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}