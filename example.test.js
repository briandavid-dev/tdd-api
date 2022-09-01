describe("Prueba", () => {
  describe("suma", () => {
    it("suma 3 números", () => {
      const suma = (a, b, c) => {
        return a + b + c;
      };
      expect(suma(30, 3, 5)).toEqual(38);
    });
  });
});
