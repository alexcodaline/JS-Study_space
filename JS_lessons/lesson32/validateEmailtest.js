describe("validateEmail", function () {
  describe("valid string", function () {
    it("not empty string", function () {
      assert.equal(validateEmail(""), false, "empty string");
      assert.equal(validateEmail(""), false, "empty < 5 characters");
    });
    it("typeof string", function () {
      assert.equal(validateEmail(222), false, "number error");
      assert.equal(validateEmail(true), false, "boolean error");
      assert.equal(validateEmail({}), false, "object error");
    });
    it("not an empty string", function () {
      assert.equal(validateEmail("     "), false);
    });
  });
  describe("valid data", function () {
    it("Don't have the @ or @ the first character", function () {
      assert.isFalse(validateEmail("emailgmail.com"), "Don't have the @");
      assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
      assert.isFalse(validateEmail("@ema@ilgmail.com"), "@@ characters");
      assert.isFalse(validateEmail("email@gmailcom"), " '.' not found ");
    });
  });
  describe();
});
