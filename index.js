document.addEventListener("DOMContentLoaded",function(){
     document.querySelector("form").onsubmit = function()
     {
          let fname = document.querySelector("#fname").value;
          let lname = document.querySelector("#lname").value;

          alert(`Hello, ${fname} ${lname}!`);

     };
});