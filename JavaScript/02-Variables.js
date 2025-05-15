var lorem1 = "lorem";
console.log(lorem1);
lorem1 = "ipsum";

let lorem2 = " ipsum";
lorem1 = "lorem";
document.write(lorem1 + lorem2);

const $meow = " meow";

let _lorem;

_lorem = lorem1 + lorem2 + $meow;

console.log(_lorem);

typeof lorem1; // string
Number.isFinite(5); // true
Number.isFinite(Infinity); // false
Number.isNaN(5); // false
Number.isNaN(NaN); // true

// Type Coercion
let number1 = 5;
let string1 = "5";
let string2 = "5.5";
let float1 = 7.5;
let boolean1 = true;

console.log(typeof number1);
console.log(typeof string1);
console.log(typeof float1);
console.log(typeof boolean1);
// string to number

let stringToNumber = Number(string1);
console.log(string1, stringToNumber, typeof stringToNumber);

// string to int

let stringToInt = parseInt(string1);
console.log(string1, stringToInt, typeof stringToInt);

// string to float

let stringToFloat = parseFloat(string2);
console.log(string2, stringToFloat, typeof stringToFloat);

// number to string

number1.toString();
console.log(number1, number1.toString(), typeof number1.toString());
String(5);

// to boolean
Boolean(""); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(false); // false
// üsttekiler hariç her şey true
console.log(Boolean(0)); // false

[1, 2, 3].length; // 3
[1, 2, 3].reverse(); // [3,2,1]
[1, 2, 3].slice(0);

let Kutu = { Uzunluk: 6, OrtadanIkiyeKes: function () {} };

Kutu.Uzunluk = 6;
Kutu.OrtadanIkiyeKes();

// Template Literals
const Name = "hownnow";
const age = 5;

console.log(
  `My name is ${Name} 
and I'm ${5}`
);

/***

const kitap = {
  ad: "Fırtına",
  yazar: "Shakespeare",
  tarih: 1610
}
const bookTable =
      "<table border>"+
  "<tbody>"+
    "<tr>"+
      "<td>"+"Kitap"+"</td>"+
      "<td>"+kitap.ad+"</td>"+
    "</tr>"+
  "<tr>"+
      "<td>"+"Yazar"+"</td>"+
      "<td>"+kitap.yazar+"</td>"+
    "</tr>"+
      "<tr>"+
      "<td>"+"Tarih"+"</td>"+
      "<td>"+kitap.tarih+"</td>"+
    "</tr>"+
 " </tbody>"+
"</table>"
document.body.innerHTML = bookTable

***/

const kitap = {
  ad: "Fırtına",
  yazar: "Shakespare",
  tarih: 1610,
};

const booktable = `
<table border> 
  <tbody>
    <tr>
      <td> Kitap </td>
      <td> ${kitap.ad} </td>
    </tr>
    <tr>
      <td> Yazar </td>
      <td> ${kitap.yazar} </td>
    </tr>
    <tr>
      <td> Tarih </td>
      <td> ${kitap.tarih} </td>
    </tr>
  <tbody>
</table>
`;

document.body.innerHTML = booktable;
