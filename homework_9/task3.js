const car1 = {
    brand: "BMW",
    model: "328i",
    year: 2018,
};

const car2 = {
    brand: "BMW",
    model: "530d",
    year: 2003,
    owner: "Кирило"
};

const car3 ={
    ...car1,
    ...car2,
};

console.log(car3);