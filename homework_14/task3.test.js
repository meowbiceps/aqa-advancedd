const axios = require("axios");
const { fetchPostById } = require("./task3");

jest.mock("axios");

test("Повертає пост при успішному запиті", async () => {
    const mockData = { id: 1, title: "Test post" };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchPostById(1);
    expect(result).toEqual(mockData);
});

test("Обробка помилки при нуіснуючому пості", async () => {
    axios.get.mockRejectedValue({
        response: { status: 404},
    });
    
    const result = await fetchPostById(999);
    expect(result).toBe("Помилка 404");
});

