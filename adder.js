const adder = (...numbers)  => numbers.reduce((accumulator, value) => accumulator + value, 0);

module.exports = adder;
