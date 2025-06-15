const users = [
	{ name: 'Кирило', email: 'kirill@gmail.com', age: 25 },
	{ name: 'Віктор', email: 'viktor@gmal.com', age: 26 },
	{ name: 'Тарас', email: 'taras@gmail.com', age: 30 },
];

for (const { name, email, age } of users) {
	console.log(`Ім’я: ${name}, Email: ${email}, Вік: ${age}`);
}
