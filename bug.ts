function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Works as expected
printName('John'); // Works as expected
printName(undefined); // Error!