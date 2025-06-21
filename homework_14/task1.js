const axios = require("axios");

function fetchWithError() {
    return axios.get("https://jsonplaceholder.typicode.com/invalid-endpoint")
        .then(() => "Запит не повинен бути успішним")
        .catch((error) => {
            if (error.response) {
                return `Помилка ${error.response.status}: ${error.response.statusText}`;
            } else {
                return "Невідома помилка";
            }
        });
}

module.exports = {fetchWithError};
