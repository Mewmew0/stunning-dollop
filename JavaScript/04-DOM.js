// get element by ıd, class, name
// document.querySelector("#id, .class, name")

// let a = prompt()
// console.log(a);
// document.write(a);
// document.querySelector('#header1').innerHTML = a;

var liste = document.querySelector("ul");
var yesil = document.querySelectorAll(".yesil");

for (i = 0; i < yesil.length; i++) {
  yesil[i].style.color = "green";
}

var giris = document.querySelector("#giris");
var buton = document.querySelector("#buton");

buton.addEventListener("click", function () {
  var li = document.createElement("li");
  li.textContent = giris.value;
  liste.appendChild(li);
  giris.value = "";
});

liste.classList.add("sınıf");
liste.classList.toggle("sınıf");


