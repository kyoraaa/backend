/*
const foo = 42;

//js can concat dan convert otomatis ke other operand secara implisit
const result = foo+"1";

console.log(result); //421
//plus mines karena bs jadi bug apabila codenya sudah panjang

*/

/*
//pengenalan data type
//untuk js menggunakan unicode utf16

//typeof conversion
const n = 1;
const text = n.toString();
console.log(text+ " " + typeof(text));

const x = 1;
console.log(parseInt(x));

*/

const a = BigInt(1); 

const sum = 1n + 1n; //hrs n 2 2 nya

const foo = "test";
foo.substring(1);// foo undefined

const enum1 = "Enumerate this string"; // enum adalah variabel spesial

const str = "This looks like a string";

const longString = `This is a very long string which needs
                    to wrap across multiple lines because
                    otherwise my code is unreadable`; //multiline pake ``

console.log(foo.substring(1));