import fetch from 'node-fetch';

const data ={
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3OGU3NzNkOS1jYTM5LTRiODMtYmRhYi0zNGNiNjhjNGI0N2QiLCJpYXQiOjE3NDk3MzQ1NTMsImV4cCI6MTc0OTczNTQ1M30.aNRxIbJgjBaWYSeGej9Lwtxa8plNtsU5D2q8LRrk32E',
    newPassword: 'Qwerty321'
};

fetch('https://api.optimapartner.com/auth/reset-password', {
    method: 'Post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(async response => {
        const result = await response.json();
        if (response.ok) {
            console.log('Пароль успешно сброшен!');
        } else {
            console.error('Ошибка при сбросе пароля', result);
        }
    })
    .catch(error => {
        console.error('Сетевая ошибка:', error);
    });