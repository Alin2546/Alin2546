 var button = document.getElementById("add-btn").addEventListener("click", noInput);
 var input = document.getElementById("inputer");
 var list = document.getElementById("list");
 var clearButton = document.getElementById("clear").addEventListener("click", clear);
 var hidden = document.getElementById("hide");






 function noInput() {

     var x = input.value;
     if (x.length <= 0) {
         alert("please provide input")

     } else {
         list.innerHTML += '<li class="list-group-item ">' + x + '</li>';
         input.value = "";
         hidden.style.visibility = "hidden";


     }

 }


 function clear() {

     list.innerHTML = "";
     hidden.style.visibility = "visible";

 }

 list.addEventListener("click", decoration)

 function decoration(event) {
     var style = event.target.style;
     if (style.textDecoration === "line-through") {
         style.textDecoration = "initial";
     } else {
         style.textDecoration = "line-through";
     }


 }


 input.addEventListener("keydown", function (event) {
     var y = input.value;


     if (event.keyCode == 13 && y.length > 0) {
         list.innerHTML += '<li class="list-group-item ">' + y + '</li>';
         input.value = "";
         hidden.style.visibility = "hidden";
     }
 });

 hidden.addEventListener("click", task)

 function task(event) {
     const style = event.target.style;
     if (!style.textDecoration) {
         style.textDecoration = " underline overline"
     } else {
         style.textDecoration = ""
     }

 }
