var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var text1 = document.getElementById("texta");
var text2 = document.getElementById("textar");


btn1.addEventListener("click" ,()=>{
    localStorage.setItem("text", text1.value)
    text2.innerHTML = localStorage.getItem("text")
})

btn2.addEventListener("click",()=>{
    text2.innerHTML = "";
})

// if(localStorage.getItem("text")!= null){
//     text1.value = localStorage.getItem("text")
//     text2.innerHTML = localStorage.getItem("text")
// }

onload = ()=>{
    text1.value = localStorage.getItem("text")
    // text2.innerHTML = localStorage.getItem("text")
}

//---------------------------------------------------------------------


