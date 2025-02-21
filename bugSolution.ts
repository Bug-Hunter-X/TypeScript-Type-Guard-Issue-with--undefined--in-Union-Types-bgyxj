function printName(name: string | null | undefined): void {
  if (name !== undefined && name !== null) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided or name is undefined');
  }
}

printName(null); // Works as expected
printName('John'); // Works as expected
printName(undefined); // Works as expected