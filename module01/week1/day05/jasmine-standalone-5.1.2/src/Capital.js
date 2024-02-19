//function to capitalize the letter of any word

function capital(str) {
  if (str === undefined) {
    return null;
  }
  const newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}
