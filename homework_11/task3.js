export async function getTodo() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const data = await response.json();
	return data;
}

export async function getUser() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
	const data = await response.json();
	return data;
}

export function promiseAll(promise1, promise2) {
	Promise.all([promise1, promise2])
		.then(([todo, user]) => {
			console.log('Результат Promise.all:');
			console.log('Todo', todo);
			console.log('User', user);
		})
		.catch((error) => {
			console.error('Помилка у Promise', error);
		});
}

export function promiseRace(promise1, promise2) {
	Promise.race([promise1, promise2])
		.then((result) => {
			console.log('Результат Promise.race:', result);
		})
		.catch((error) => {
			console.error('Помилка у Promise.race:', error);
		});
}
