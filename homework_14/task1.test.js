const {fetchWithError} = require("./task1");

test("Повинна повернутися помилка 404", async () => {
    const result = await fetchWithError();
    expect(result).toMatch(/Помилка 404/i);
});
