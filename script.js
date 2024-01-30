let button = document.querySelector("#button");
let eredmeny = document.querySelector("#eredmeny");
let emailInput = document.querySelector("#check")

button.addEventListener("click", () => {
console.log(emailInput.value)

  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
if(emailInput.value.match(mailformat)){
eredmeny.innerHTML = "Jó cím"
}else{
eredmeny.innerHTML = "Rossz cím"
}
});
