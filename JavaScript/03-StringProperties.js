const DOMAİN = "meowing.com";
const mame = "Mimi";
let Mail = `${mame}@${DOMAİN}`;
console.log(Mail);
console.log(DOMAİN.length);
console.log(mame.toUpperCase());
console.log(mame[0], mame.charAt(0), mame.indexOf("i"), mame.lastIndexOf("i"));

console.log("mailslice", Mail.slice(4));
console.log("mailsearch", Mail.search("i"));

console.log(Mail.slice(Mail.search("@") + 1));

console.log(mame.search("o")); // -1: olmayanlar -1 veriyor.
console.log(Mail.indexOf("@"));

let Mail2 = Mail.replace("Mimi", "Momo");
console.log(
  Mail2.includes("Momo"),
  Mail2.startsWith("Momo"),
  Mail2.endsWith("@meowing.com")
);

console.log(Mail2.concat("", " = Mew"), Mail2.charCodeAt("i")); // concat: string birleştiriyo charcodeat:indexin unicodunu söylüyo
console.log(Mail2.split(".")); // split: stringi diziye bölüyo
