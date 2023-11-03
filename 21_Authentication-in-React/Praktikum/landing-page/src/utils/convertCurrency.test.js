const { convertCurrency } = require("./convertCurrency");

describe("convertCurrency function", () => {
  it("should convert currency correctly", async () => {
    const convertedAmount = await convertCurrency(100, "USD", "IDR");
    expect(convertedAmount).toEqual(expect.any(Number));
    expect(convertedAmount).toBeGreaterThan(0);
  });

  it("should handle errors gracefully", async () => {
    const convertedAmount = await convertCurrency(
      100,
      "USD",
      "INVALID_CURRENCY"
    );
    expect(convertedAmount).toBe(undefined);
  });
});
