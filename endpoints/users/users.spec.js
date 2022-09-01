const users = require("./");

describe("Endpoints", () => {
  describe("Users", () => {
    describe("Get", () => {
      it("Return a user json", async () => {
        const axios = {
          get: jest.fn().mockResolvedValue({
            data: 1,
          }),
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };

        await users({ axios }).get({}, res);

        expect(res.status.mock.calls).toEqual([[200]]);
        expect(res.send.mock.calls).toEqual([[1]]);
      });
    });
  });
});
