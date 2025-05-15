let meow = document.querySelector("#meow");
console.log(meow);
meow.style.color = "red";
meow.addEventListener("click", changeColor);
function changeColor() {
  console.log("tıklandı");
  if (this.style.color == "red") {
    this.style.color = "black";
  } else if (this.style.color == "black") {
    this.style.color = "red";
  }
}
document.querySelector("#civ").innerHTML = `
<form action="#" id="selectColor">
  <label for="color">Choose a color</label>
    <select name="colors" id="select">
      <option value="red">RED</option>
      <option value="blue">BLUE</option>
      <option value="purple">PURPLE</option>
      <option value="orange">ORANGE</option>
      <option value="pink">PINK</option>
    </select>
    <br><br>
  <input type="submit" value="Submit">
</form>`;
//id=select olan nesne çağrılarak color değişkenine atandı
const color = document.querySelector("#select");
//color değişkenine change etkinliği etkinliği atandı ve fonksiyon ismi parametre olarak atandı
color.addEventListener("change", selectBox);

//selectBox isimli fonksiyon ile selectbox her seçildiğinde etkinlik tipi =change ve değeri consola yazılmaktadır
function selectBox(event) {
  console.log("Etkinlik tipi : " + event.type);
  console.log("deger : " + event.target.value);
}

document.querySelector("#county").innerHTML = `
<h1 id="counter">0<h1>
<button id="decrease">Decrease</button>
<button id="increase">Increase</button>
`;
let counter = 1;
function clickEvent() {
  console.log(this.id);
  if (this.id == "increase") {
    document.querySelector("#counter").innerHTML = counter += 10;
  } else if (this.id == "decrease") {
    document.querySelector("#counter").innerHTML = counter -= 10;
  }
}

document.querySelector("#counter").innerHTML = counter;
document.querySelector("#increase").addEventListener("dblclick", clickEvent);
document.querySelector("#decrease").addEventListener("click", clickEvent);
