function validateEmail(email) {
  if (email === "") return false;
  if (typeof email != "string") return false;
  if (email.length < 5) return false;
  let validData = email.split("");
  if (
    !validData.includes("@") ||
    validData[0] == "@" ||
    validData.includes("@@")
  )
    return false;
  let firstIndex = email.indexOf("@");
  let lastIndex = email.lastIndexOf(".");
  if (dotIndex < firstIndex + 2 || lastIndex === email.length - 1) {
    return false;
  }
  return true;
}
console.log(validateEmail("example@gmail.com"));
console.log(validateEmail("@example@gmail.com"));
console.log(validateEmail("examp"));
console.log(validateEmail("@@example@gmail.com"));
console.log(validateEmail("example@gmailcom"));
