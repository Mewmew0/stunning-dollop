for (let i = 0; i <= 5  ; i++){
console.log(i)
} // 0,1,2,3,4,5 it stops when inside is false

for (var i = 0; i <= 5; i++) {
  for (var j = 0; j <= 50; j++) {
    if (j == 9) {
      break;
    }
    console.log("iç döngüden j :" + j);
  }

  console.log("dış döngü :" + i)
 }

for (var i = 0; i <=5; i++) {
  for (var j = 0; j <= 4; j++) {
    if (j == 2) {
      continue
    }
    console.log("iç döngüden j :" + j);
  }
 }  