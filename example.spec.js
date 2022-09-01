describe("Prueba", () => {
  describe("suma", () => {
    it("suma 2 números", () => {
      const suma = (a, b) => {
        return a + b;
      };
      expect(suma(30, 3)).toEqual(33);
    });
  });
});
