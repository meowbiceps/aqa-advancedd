const person = {
	firstName: 'Кирило',
	lastName: 'Плотніков',
	age: 25,
};

person.email = 'kirill.plotnikov@gmail.com';

delete person.age;

console.log(person);
