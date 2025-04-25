let a = [1, 2, 3, 4, 5];

a.splice(2, 3, "Orta");
console.log(a); // [1,2,"orta"]

a[2] = "Mew";
a.unshift("atStart");
a.push("atEnd");

console.log(a); // [ "atStart", 1, 2, "Mew", "atEnd" ]

let starofA = a.shift();
let enofA = a.pop();

console.log(starofA, enofA, a); // atStart atEnd Array(3) [ 1, 2, "Mew" ]

let copyofA = a.slice();
let E6copyofA = [...a, ...copyofA];
console.log(copyofA, E6copyofA); // Array(3) [ 1, 2, "Mew" ] Array(6) [ 1, 2, "Mew", 1, 2, "Mew" ]

console.log(E6copyofA.join(" . "));

let b = ["a", "b", "c"];
let ab = b.concat(copyofA); // Arrayleri birleştiriyor.
console.log(ab); // Array(6) [ "a", "b", "c", 1, 2, "Mew" ]

// içerisine fonksiyon girilen methodlar:

const malzemeler = ["yumurta", "un", "süt"];
malzemeler.forEach((a, b, c) => console.log(a, b, c));

// forEach içerisinde callback fonksiyonu açılıyor 3 parametre giriliyor (Eleman,index,array),

let malzemelerIndex = malzemeler.map((a, b) => (a = b));
console.log(malzemeler, malzemelerIndex); // Array(3) [ "yumurta", "un", "süt" ] Array(3) [ 0, 1, 2 ]
// Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.

let sonuc1 = malzemelerIndex.some((a) => a > 2);
let sonuc2 = malzemelerIndex.every((a) => a >= 0);
console.log(typeof sonuc1, sonuc1, sonuc2); // boolean false true

let realNum = malzemelerIndex.filter((a) => a > 0);
console.log(realNum, malzemelerIndex); // Array [ 1, 2 ] Array(3) [ 0, 1, 2 ]

console.log(realNum.find((a) => a > 0 && a > 1));

realNum.sort((a, b) => b - a);
console.log(realNum);

let dizi = [3, 6, 9, 14, 16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction(dizi) {
  // Kodunuzu buraya yazın.
  if (dizi.some((a) => a > 5)) {
    console.log("5'ten büyük bir eleman var");
  } else console.log("5'ten büyük eleman yok");
}

myFunction(dizi);

let dizi1 = [2, 5, 8, 11, 15, 17];

// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

let ondan = dizi1.filter((a) => a > 10);
let sonuc = ondan.map((a) => a * 5);
console.log(sonuc);

console.log("OBJECTS");

let Angelina = {
  hunger: 0,
  "5Comfort": 5,
  version: "1.5",
  bodyHeight: "175cm",
};

console.log(typeof Object.keys(Angelina));

Angelina.hunger = 1;
Angelina.morph = "humanoid";
Angelina["hunger"] = 2;
Angelina["5Comfort"] = 8;

console.log(Angelina);

Object.entries(Angelina).forEach(([a, b]) => console.log(a));

delete Angelina.morph;
console.log(Angelina);
//Angelina.hunger = undefined;
console.log(Angelina);

delete Angelina;

console.log(Angelina);

let { hunger: hunger2 } = Angelina;

hunger2 = 10;

console.log(Angelina.hunger);

let Angelin = { ...Angelina };
Angelin.hunger = 20;
Angelin.version = "2.2";
(Angelin.sex = 222), console.log(Angelin);
console.log("TEST");
let mew = { ...Angelin, ...Angelina, hunger: 20202 };
console.log(mew);
console.log("TEST 2");
let mew2 = { ...Angelina, ...Angelin };
console.log(mew2);

let numbers2 = [1, 2, 3, 4];
let [bir, iki, ...rest] = numbers2;
let numbers3 = [...rest, ...rest, bir, iki];
console.log(numbers3);

const normalCikarma = (numbers) => {
  return numbers.sayi1 - numbers.sayi2;
};

const tamIsım = ({ soyisim, isim = "Kayla" }) => {
  // Bu satira dikkat
  return isim + " " + soyisim;
};
const sayilar = {
  isim: "Merin",
  soyisim: "Merin",
  sayi3: 1212,
};

console.log(tamIsım(sayilar));
console.log(normalCikarma(sayilar));

for (let key in sayilar) {
  console.log(key, sayilar[key]);
}
