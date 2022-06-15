// STRETCH

// BUILT FIRST, DUMMY DATA
const cars = [
    {
        vin: "1234567890123",
        make: "toyota",
        model: "prius",
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: "1234567890123",
        make: "toyota",
        model: "corolla",
        mileage: 115000,
        title: 'salvaged',
    },
    {
        vin: "1234567890123",
        make: "ford",
        model: "focus",
        mileage: 15000,
        title: 'clean',
    },

]

// exports.seed = function (knex) {
//     return knex('cars')
//         .truncate().then(() => {
//             return knex('cars').insert(cars)
//         })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}