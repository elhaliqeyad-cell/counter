let counter=0;
const countervalue=document.getElementById("counter-value")
const incbtn =document.getElementById("increment-btn")
const decbtn=document.getElementById("decrement-btn")
const restbtn=document.getElementById("reset")
const double=document.getElementById("plustwo")
const minus=document.getElementById("minustwo")
const change=document.getElementById("changecolor")
restbtn.addEventListener("click",()=>{
    counter=0;
    countervalue.innerHTML=counter
})
incbtn.addEventListener("click",()=>{
    counter++;
    countervalue.innerHTML=counter
})
decbtn.addEventListener("click",()=>{
    counter--;
    countervalue.innerHTML=counter
})
plustwo.addEventListener("click",()=>{
    counter+=2;
    countervalue.innerHTML=counter
})
minus.addEventListener("click",()=>{
    counter-=2;
    countervalue.innerHTML=counter
})



change.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;

    countervalue.style.backgroundColor = color;
      document.body.style.backgroundColor = color;
});