(function(){
let btnForm = document.querySelector("#userform button");
let form = document.querySelector("#userform");
btnForm.onclick = function(){
  if(btnForm.classList.contains("btnError")|| btnForm.classList.contains("btnSuccess")){
    form.onsubmit = null;
    event.preventDefault();
    btnForm.innerHTML ="SEND MESSAGE";
    btnForm.classList.remove("btnSuccess");
    btnForm.classList.remove("btnError");
    form.onsubmit = () => formSubmit(event);
  }
}
form.onsubmit = () => formSubmit(event);
function formSubmit(event){
  event.preventDefault();
  fetch("https://binoapp.herokuapp.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: this.name.value,
      email: this.email.value,
      subject: this.subject.value,
      text: this.message.value })
  }).then(function(response){
    console.log( response.json())
  }).then(function(data){
    btnForm.classList.add("btnSuccess");
    btnForm.innerHTML ="";
  }).catch(function(error){
    console.log(error)
    btnForm.classList.add("btnError");
    btnForm.innerHTML ="";
  })
  return false;
}
})()
