# TypeScript Type Guard Issue with 'undefined'

This repository demonstrates a subtle issue with TypeScript's type guards when handling union types that include 'undefined'.  Even with a seemingly correct type check (`if (name)`), a runtime error can occur if 'undefined' is passed as an argument.

## Bug Description

The `printName` function is designed to handle string values or `null`.  It correctly handles `null` and non-null strings. However, passing `undefined` results in a runtime error because TypeScript's type guard doesn't strictly eliminate the possibility of `undefined` in this specific scenario. 

## Solution

The solution involves explicitly checking for `undefined` in addition to the null check, ensuring the type guard effectively narrows the type to only strings.