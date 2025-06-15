const axios = require('axios');

axios.interceptors.request.use((config) => {
    console.log(`Запит: ${config.method.toUpperCase()} ${config.url}`);
    return config;
});

axios.interceptors.response.use((response) => {
    console.log(`Відповідь ${response.status} від ${response.config.url}`);
    return response;
}, (error) => {
    console.error(`Помилка: ${error.message}`);
    return Promise.reject(error);
});

async function runTests() {
    try {
        const getPost = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.assert(getPost.status === 200, 'Статус має бути 200');
        console.assert(getPost.data.id === 1, 'ID має бути 1');

        const getUser = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        console.assert(getUser.status === 200, 'Статус має бути 200');
        console.assert(getUser.data.id === 1, 'ID користувача має бути 1');

        const newPost = {
            title: 'Test Title',
            body: 'Test Body',
            userId: 1,
        };
        const postResponse = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
        console.assert(postResponse.status === 201, 'Стастус має бути 201');
        console.assert(postResponse.data.title === newPost.title, 'Назва має співпадати');

        const newComment = {
            postId: 1,
            name: 'Test Name',
            email: "test@example.com",
            body: 'Comment body',
        };
        const commentResponse = await axios.post('https://jsonplaceholder.typicode.com/comments', newComment);
        console.assert(commentResponse.status === 201, 'Статус має бути 201');
        console.assert(commentResponse.data.email === newComment.email, 'Email має співпадати');

        const todosResponse = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.assert(todosResponse.status === 200, 'Статус має бути 200');
        console.assert(Array.isArray(todosResponse.data), 'Дані мають бути масивом');

        console.log('\nВсі тести пройдені успішно!');
    }catch (error) {
        console.error('Тест не пройдено:', error.message);
    }
    }

runTests();