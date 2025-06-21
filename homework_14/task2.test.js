const axios = require("axios");
const { fetchWithHeaders } = require("./task2");

jest.mock("axios");

test("Повинні бути перелані хедери і параметри", async () => {
    axios.get.mockResolvedValue({ data: [{ id:1 }] });

    await fetchWithHeaders();

    expect(axios.get).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts",
        expect.objectContaining({
            headers: expect.objectContaining({ "x-custom-header": "myValue" }),
            params: expect.objectContaining({ userId: 1 }),
        })
    );
});