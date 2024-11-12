let btn = document.querySelector("#btn");
let notes = document.querySelector(".notes");

btn.addEventListener("click",()=>{
    let inputBox  = document.createElement("div");
    notes.appendChild(inputBox);
    inputBox.classList.add("inputbox");
    let textarea = document.createElement("textarea");
    textarea.classList.add("textArea");
    inputBox.appendChild(textarea);
    let img = document.createElement("img");
    img.classList.add("img") ;
    img.src = "trash-2.png";
    inputBox.appendChild(img);
})

notes.addEventListener("click",(e)=>{
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
    }
})