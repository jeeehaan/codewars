function hello(name) {
  if (name) {
    firstLetter = name[0].toUpperCase();
    remainingLetter = name.slice(1).toLowerCase();
    capitalizedName = firstLetter + remainingLetter;
    return `Hello, ${capitalizedName}`;
  }

  return "Hello, World!";
}

console.log(hello("jessy"));
console.log(hello());
