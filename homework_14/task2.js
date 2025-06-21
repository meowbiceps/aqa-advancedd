const axios = require("axios");

function fetchWithHeaders() {
    return axios.get("https://jsonplaceholder.typicode.com/posts", {
        headers: {
            "x-custom-header": "myValue",
        },
        params: {
            userId: 1,
        },
    });
}

module.exports = { fetchWithHeaders };

