//Hello World
let count = 0; //Count
//All functions
function counter()
{
     count++;
     document.querySelector("#count").innerHTML = count;

     if(count%5===0)
     {
          alert(`${count} is a multiple of 5`);
     }
}
//DOM Content Loaded
document.addEventListener("DOMContentLoaded",function()
{
     //Button
     document.querySelectorAll("button").forEach(button => 
     {
          button.onclick = function() 
          {
               document.querySelector("h2").style.color = button.dataset.color;
          };   
     });

     //Counter
     document.querySelector("#count").onclick = counter;

     //Select
     document.querySelector("select").onchange = function()
     {
          document.querySelector("h2").style.color = this.value;
     };
});