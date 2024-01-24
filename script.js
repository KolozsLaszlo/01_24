let button = document.querySelector("#button");
let eredmeny = document.querySelector("#eredmeny");

button.addEventListener("click", () => {
  if (document.querySelector("#check").value != "alma@a.a") {
    // console.log("Helytelen");
    eredmeny.classList.remove("jo");
    eredmeny.innerHTML = "Helytelen a megadott email cím!";
    eredmeny.classList.add("rossz");
  } else {
    // console.log("Helyes");
    eredmeny.classList.remove("rossz");
    eredmeny.innerHTML = "Helyes a megadott email";
    eredmeny.classList.add("jo");
  }
});
