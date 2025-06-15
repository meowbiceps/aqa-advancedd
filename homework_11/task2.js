function getTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1').then((Response) => {
		if (!Response.ok) {
			throw new Error('Помилка при отримані todo');
		}
		return Response.json();
	});
}

function getUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1').then((Response) => {
		if (!Response.ok) {
			throw new Error('Помилка при отримані юзера');
		}
		return Response.json();
	});
}

Promise.all([getTodo(), getUser()])
	.then(([todo, user]) => {
		console.log('Результат Promise.all:');
		console.log('Todo', todo);
		console.log('User', user);
	})
	.catch((error) => {
		console.error('Помилка у Promise', error);
	});

Promise.race([getTodo(), getUser()])
	.then((result) => {
		console.log('Результат Promise.race:', result);
	})
	.catch((error) => {
		console.error('Помилка у Promise.race:', error);
	});
