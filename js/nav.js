var checkbox=document.querySelector("#menuToggle input");
var links=document.querySelectorAll("#menu a");

[].forEach.call(links, function (link){
  link.addEventListener("click", function (){
    checkbox.checked=false;
  })
})
