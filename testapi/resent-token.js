import fetch from 'node-fetch';

const data = {
    emailOrPhone: 'kplotnikov@redrocket.software'
};

fetch('https://api.optimapartner.com/auth/reset-password-request', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => {
        if(response.ok) {
            console.log('Письмо с инструкцией отправлено!');
        } 
        // else {
        //     return response.json().then(error => {
        //         console.error('Ошибка:', error);
        //     });
        // }
    })
    .catch(error => {
        console.error('Ошибка сети:', error);
    });