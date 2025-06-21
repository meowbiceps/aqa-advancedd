const axios = require("axios");

function fetchPostById(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.data)
    .catch((err) => {
        if (err.response) {
            return `Помилка ${err.response.status}`;
        }
        return "Невідома помилка";
    }); 
}

module.exports = { fetchPostById };
