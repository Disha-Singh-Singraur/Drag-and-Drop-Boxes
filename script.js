let lists=document.querySelectorAll(".list")
let left=document.querySelector(".left")
let right=document.querySelector(".right")

let selected=null;

for(list of lists){
    list.addEventListener("dragstart",(e)=>{
        selected=e.target;
    })
}
    right.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    right.addEventListener("drop",(e)=>{
        right.appendChild(selected);
    })

    left.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    left.addEventListener("drop", (e) => {
      left.appendChild(selected);
    });
